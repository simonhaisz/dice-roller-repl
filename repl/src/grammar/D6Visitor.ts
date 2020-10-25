// Generated from ../grammar/D6.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { SourceContext } from "./D6Parser";
import { StatementContext } from "./D6Parser";
import { DeclarationContext } from "./D6Parser";
import { ExpressionContext } from "./D6Parser";
import { TestContext } from "./D6Parser";
import { SuccessTestContext } from "./D6Parser";
import { OpposedTestContext } from "./D6Parser";
import { ExtendedTestContext } from "./D6Parser";
import { ValueContext } from "./D6Parser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `D6Parser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface D6Visitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `D6Parser.source`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSource?: (ctx: SourceContext) => Result;

	/**
	 * Visit a parse tree produced by `D6Parser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `D6Parser.declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclaration?: (ctx: DeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `D6Parser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `D6Parser.test`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTest?: (ctx: TestContext) => Result;

	/**
	 * Visit a parse tree produced by `D6Parser.successTest`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSuccessTest?: (ctx: SuccessTestContext) => Result;

	/**
	 * Visit a parse tree produced by `D6Parser.opposedTest`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOpposedTest?: (ctx: OpposedTestContext) => Result;

	/**
	 * Visit a parse tree produced by `D6Parser.extendedTest`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExtendedTest?: (ctx: ExtendedTestContext) => Result;

	/**
	 * Visit a parse tree produced by `D6Parser.value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValue?: (ctx: ValueContext) => Result;
}

