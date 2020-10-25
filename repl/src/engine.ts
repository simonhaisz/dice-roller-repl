import { CharStreams, CommonTokenStream, ParserRuleContext } from "antlr4ts";
import { ParseTree } from "antlr4ts/tree/ParseTree";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { fail } from "assert";
import { assert } from "console";
import { DicePool } from "./dice-pool";
import { DiceRollResult, getDiceRollResult } from "./dice-roll-result";
import { D6Lexer } from "./grammar/D6Lexer";
import { D6Parser, DeclarationContext, ExpressionContext, ExtendedTestContext, OpposedTestContext, StatementContext, SuccessTestContext, ValueContext } from "./grammar/D6Parser";
import { makeExtendedTest, makeOpposedTest, makeSuccessTest, TestResult } from "./test";

export type Completions = {
    matches: string[];
    sourceSymbol: string;
}

export type ExecuteResult = TestResult | DiceRollResult | undefined;

export class DiceRollEngine {
    private dicePool: DicePool;
    private lines: string[];
    private declarations: Map<string,ExpressionContext>;

    constructor() {
        this.dicePool = new DicePool();
        this.lines = [];
        this.declarations = new Map<string,ExpressionContext>();
    }

    execute(line: string): ExecuteResult {
        try {
            this.lines.push(line);
            return this.evaluate(this.parse(line));
        } finally {
            this.dicePool.completedRoll();
        }
    }

    loadLines(lines: string[]) {
        for (const line of lines) {
            this.lines.push(line);
            const statement = this.parse(line);
            if (statement.declaration() !== undefined) {
                this.evaluateDeclaration(statement.declaration());
            } else {
                // ignore non-declarations when loading from a file
            }
        }
    }

    getCompletions(line: string, cursor: number): Completions {
        const ast = this.parse(line);
        const leafContext = findLeafContext(ast, cursor);
        if (leafContext === undefined) {
            return {
                matches: [],
                sourceSymbol: line
            };
        }
        const matches: string[] = [];
        const sourceSymbol = leafContext.text;
        if (leafContext instanceof ValueContext) {
            const valueContext = leafContext as ValueContext;
            if (valueContext.ID() != undefined) {
                const id = valueContext.ID().text;
                for (const name of this.declarations.keys()) {
                    if (name.toLowerCase().startsWith(id.toLowerCase())) {
                        matches.push(name);
                    }
                }
            }
        }

        return {
            matches,
            sourceSymbol
        };
    }

    private parse(line: string): StatementContext {
        const inputStream = CharStreams.fromString(line);
        const lexer = new D6Lexer(inputStream);
        const tokenStream = new CommonTokenStream(lexer);
        const parser = new D6Parser(tokenStream);
        const statement = parser.statement();
        return statement;
    }

    private evaluate(statement: StatementContext): ExecuteResult {
        if (statement.declaration() !== undefined) {
            this.evaluateDeclaration(statement.declaration()!);
            return undefined;
        } else if (statement.test() !== undefined) {
            const test = statement.test();
            if (test.successTest() !== undefined) {
                return this.evaluateSuccessTest(test.successTest());
            } else if (test.opposedTest() !== undefined) {
                return this.evaluateOpposedTest(test.opposedTest());
            } else if (test.extendedTest() !== undefined) {
                return this.evaluateExtendedTest(test.extendedTest());
            } else {
                fail(`unknown test: it is not a success, opposed, or extended test`);
            }
        } else if (statement.expression() !== undefined) {
            const count = this.evaluateExpression(statement.expression()!);
            this.dicePool.roll(count);
            return getDiceRollResult(this.dicePool.getDiceRolls()[0]);
        } else if (statement.USE_EDGE() !== undefined) {
            this.dicePool.reRollFailures();
            return getDiceRollResult(this.dicePool.getDiceRolls()[0]);
        } else {
            fail(`unknown statement: is not a declaration, an expression, or USEEDGE`);
        }
    }

    private evaluateDeclaration(declaration: DeclarationContext) {
        const name = declaration.ID().text;
        this.declarations.set(name.toLowerCase(), declaration.expression());
    }

    private evaluateSuccessTest(success: SuccessTestContext): TestResult {
        const count = this.evaluateExpression(success.expression());
        const threshold = parseNumber(success.NUMBER());
        return makeSuccessTest(this.dicePool, count, threshold);
    }

    private evaluateOpposedTest(opposed: OpposedTestContext): TestResult {
        const leftCount = this.evaluateExpression(opposed._left);
        const rightCount = this.evaluateExpression(opposed._right);
        const rightDicePool = new DicePool();
        return makeOpposedTest(this.dicePool, leftCount, rightDicePool, rightCount);
    }

    private evaluateExtendedTest(extended: ExtendedTestContext): TestResult {
        const count = this.evaluateExpression(extended.expression());
        const threshold = parseNumber(extended.NUMBER());
        return makeExtendedTest(this.dicePool, count, threshold);
    }

    private evaluateExpression(expression: ExpressionContext): number {
        if (expression.USE_EDGE()) {
            this.dicePool.toggleExplodingDiceOn();
        }
        let count = NaN;
        const values = expression.value();
        const operators = expression.OPERATOR();
        assert(values.length === operators.length + 1, `There should always be one more value than operators`);
        let value: ValueContext | undefined;
        let operator: TerminalNode | undefined;
        for (let i = 0; i < values.length; i++) {
            value = values[i];
            if (i > 0) {
                operator = operators[i - 1];
            }
            const n = this.parseValue(value);
            if (operator === undefined) {
                count = n;
            } else if (operator.text === '+') {
                count += n;
            } else if (operator.text === '-') {
                count -= n;
            } else {
                fail(`unknown operator: is not a + or -`);
            }
        }

        return count;
    }

    private parseValue(v: ValueContext): number {
        if (v.ID() !== undefined) {
            const name = v.ID()!.text;
            const expression = this.declarations.get(name.toLowerCase());
            if (expression === undefined) {
                throw new Error(`No declaration found with name '${name}'`);
            }
            return this.evaluateExpression(expression);
        } else if (v.NUMBER() !== undefined) {
            return parseNumber(v.NUMBER()!);
        } else {
            fail(`unknown value: is not an ID or NUMBER`);
        }
    }
}

function findLeafContext(parent: ParseTree, cursor: number): ParserRuleContext | undefined {
    const parentContext = parent as ParserRuleContext;
    // TODO:
    // figure out why charPositionInLine is always zero here, when it works in the language-server project
    // until then, use start/stop index which does work for some reason
    if (parentContext.start.startIndex > cursor || parentContext.stop.stopIndex + 1 < cursor) {
        return undefined;
    }
    if (parentContext.children === undefined) {
        return parentContext;
    }
    for (const child of parentContext.children) {
        if (child instanceof TerminalNode) {
            continue;
        }
        const childContext = child as ParserRuleContext;
        if (childContext.start.startIndex <= cursor && childContext.stop.stopIndex + 1 >= cursor) {
            return findLeafContext(child, cursor);
        }
    }
    // within range of the parent but not within range of any non-terminal children - use the parent
    return parentContext;
}

function parseNumber(node: TerminalNode): number {
    return Number.parseInt(node.text);
}

export function isTestResult(result: ExecuteResult): result is TestResult {
    return (result as TestResult).threshold !== undefined;
}

export function isRollResult(result: ExecuteResult): result is DiceRollResult {
    return (result as DiceRollResult).hits !== undefined;
}