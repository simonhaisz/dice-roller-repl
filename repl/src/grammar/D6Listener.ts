// Generated from ../grammar/D6.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
 * This interface defines a complete listener for a parse tree produced by
 * `D6Parser`.
 */
export interface D6Listener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `D6Parser.source`.
	 * @param ctx the parse tree
	 */
	enterSource?: (ctx: SourceContext) => void;
	/**
	 * Exit a parse tree produced by `D6Parser.source`.
	 * @param ctx the parse tree
	 */
	exitSource?: (ctx: SourceContext) => void;

	/**
	 * Enter a parse tree produced by `D6Parser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `D6Parser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;

	/**
	 * Enter a parse tree produced by `D6Parser.declaration`.
	 * @param ctx the parse tree
	 */
	enterDeclaration?: (ctx: DeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `D6Parser.declaration`.
	 * @param ctx the parse tree
	 */
	exitDeclaration?: (ctx: DeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `D6Parser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `D6Parser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `D6Parser.test`.
	 * @param ctx the parse tree
	 */
	enterTest?: (ctx: TestContext) => void;
	/**
	 * Exit a parse tree produced by `D6Parser.test`.
	 * @param ctx the parse tree
	 */
	exitTest?: (ctx: TestContext) => void;

	/**
	 * Enter a parse tree produced by `D6Parser.successTest`.
	 * @param ctx the parse tree
	 */
	enterSuccessTest?: (ctx: SuccessTestContext) => void;
	/**
	 * Exit a parse tree produced by `D6Parser.successTest`.
	 * @param ctx the parse tree
	 */
	exitSuccessTest?: (ctx: SuccessTestContext) => void;

	/**
	 * Enter a parse tree produced by `D6Parser.opposedTest`.
	 * @param ctx the parse tree
	 */
	enterOpposedTest?: (ctx: OpposedTestContext) => void;
	/**
	 * Exit a parse tree produced by `D6Parser.opposedTest`.
	 * @param ctx the parse tree
	 */
	exitOpposedTest?: (ctx: OpposedTestContext) => void;

	/**
	 * Enter a parse tree produced by `D6Parser.extendedTest`.
	 * @param ctx the parse tree
	 */
	enterExtendedTest?: (ctx: ExtendedTestContext) => void;
	/**
	 * Exit a parse tree produced by `D6Parser.extendedTest`.
	 * @param ctx the parse tree
	 */
	exitExtendedTest?: (ctx: ExtendedTestContext) => void;

	/**
	 * Enter a parse tree produced by `D6Parser.value`.
	 * @param ctx the parse tree
	 */
	enterValue?: (ctx: ValueContext) => void;
	/**
	 * Exit a parse tree produced by `D6Parser.value`.
	 * @param ctx the parse tree
	 */
	exitValue?: (ctx: ValueContext) => void;
}

