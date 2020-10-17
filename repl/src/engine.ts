import { CharStreams, CommonTokenStream } from "antlr4ts";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { fail } from "assert";
import { assert } from "console";
import { DicePool } from "./dice-pool";
import { D6Lexer } from "./grammar/D6Lexer";
import { D6Parser, ExpressionContext, StatementContext, ValueContext } from "./grammar/D6Parser";

export class DiceRollEngine {
    private dicePool: DicePool;
    private lines: string[];

    constructor() {
        this.dicePool = new DicePool();
        this.lines = [];
    }

    execute(line: string) {
        this.lines.push(line);
        this.evaluate(this.parse(line));
    }

    getResult(): number[] {
        return this.dicePool.getDice();
    }

    private parse(line: string): StatementContext {
        const inputStream = CharStreams.fromString(line);
        const lexer = new D6Lexer(inputStream);
        const tokenStream = new CommonTokenStream(lexer);
        const parser = new D6Parser(tokenStream);
        const statement = parser.statement();
        assert(statement !== undefined, `A D6 line should always be parsed to a statement`);
        return statement;
    }

    private evaluate(statement: StatementContext) {
        if (statement.declaration() !== undefined) {
            fail(`statement declarations are not implemented`);
        } else if (statement.expression() !== undefined) {
            this.evaluateExpression(statement.expression()!);
        } else if (statement.USE_EDGE() !== undefined) {
            fail(`statement USEEDGE is not implemented`);
        } else {
            fail(`unknown statement: is not a declaration, an expression, or USEEDGE`);
        }
    }

    private evaluateExpression(expression: ExpressionContext) {
        if (expression.USE_EDGE()) {
            fail(`expression USEEDGE is not implemented`);
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
            } else if (operator.symbol.text === '+') {
                count += n;
            } else if (operator.symbol.text === '-') {
                count -= n;
            } else {
                fail(`unknown operator: is not a + or -`);
            }
        }

        this.dicePool.roll(count);
    }

    private parseValue(v: ValueContext): number {
        if (v.ID() !== undefined) {
            fail(`declarations are not implemented`);
        } else if (v.NUMBER() !== undefined) {
            return this.parseNumber(v.NUMBER()!);
        } else {
            fail(`unknown value: is not an ID or NUMBER`);
        }
    }

    private parseNumber(n: TerminalNode): number {
        return Number.parseInt(n.symbol.text!);
    }
}