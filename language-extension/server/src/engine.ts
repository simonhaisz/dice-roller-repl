import { CharStreams, CommonTokenStream, ParserRuleContext } from "antlr4ts";
import { fail } from "assert";
import { assert } from "console";
import { Diagnostic, Position, Range, DiagnosticSeverity } from "vscode-languageserver";
import { D6Lexer } from "./grammar/D6Lexer";
import { D6Parser, SourceContext, DeclarationContext, ExpressionContext } from "./grammar/D6Parser";

export class DiceParseEngine {

    private source: SourceContext;

    constructor(text: string) {
        this.source = parse(text);
    }

    getDiagnostics(): Diagnostic[] {
        let diagnostics: Diagnostic[] = [];

        const declarationNames: string[] = [];

        for (const statement of this.source.statement()) {
            if (statement.declaration() !== undefined) {
                this.processDeclaration(statement.declaration()!, declarationNames, diagnostics);
            } else if (statement.expression() !== undefined) {
                this.processExpression(statement.expression()!, declarationNames, diagnostics);
            } else if (statement.USE_EDGE() !== undefined) {
                fail(`UseEdge is not implemented`);
            } else {
                fail(`Unknown statement: `);
            }
        }

        return diagnostics;
    }

    private processDeclaration(declaration: DeclarationContext, declarationNames: string[], diagnostics: Diagnostic[]) {
        this.processExpression(declaration.expression(), declarationNames, diagnostics);
        // add the declaration after processing its expression;
        declarationNames.push(declaration.ID().text);
    }

    private processExpression(expression: ExpressionContext, declarationNames: string[], diagnostics: Diagnostic[]) {
        if (expression.USE_EDGE() !== undefined) {
            fail(`UseEdge is not implemented`);
        }
        for (const value of expression.value()) {
            if (value.ID() !== undefined) {
                const name = value.ID()!.text;
                if (!nameExists(declarationNames, name)) {
                    const diagnostic: Diagnostic = {
                        range: findRange(value),
                        message: `Undefined name '${name}'`,
                        severity: DiagnosticSeverity.Error
                    };
                    diagnostics.push(diagnostic);
                }
            }
        }
    }
}

function parse(text: string): SourceContext {
    const inputStream = CharStreams.fromString(text);
    const lexer = new D6Lexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new D6Parser(tokenStream);
    const source = parser.source();
    assert(source !== undefined, `A D6 text should always be parsed to a source`);
    return source;
}

function nameExists(declarationNames: string[], name: string): boolean {
    for (const declaration of declarationNames) {
        if (declaration.toLowerCase() === name.toLowerCase()) {
            return true;
        }
    }
    return false;
}

function findRange(context: ParserRuleContext): Range {
    const start: Position = {
        line: context.start.line - 1,
        character: context.start.charPositionInLine
    };
    const end: Position = {
        line: context.stop!.line - 1,
        character: context.stop!.charPositionInLine
    }
    return Range.create(start, end);
}