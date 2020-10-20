// Generated from ../../grammar/D6.g4 by ANTLR 4.7.3-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { D6Listener } from "./D6Listener";
import { D6Visitor } from "./D6Visitor";


export class D6Parser extends Parser {
	public static readonly USE_EDGE = 1;
	public static readonly ASSIGNMENT = 2;
	public static readonly OPERATOR = 3;
	public static readonly NUMBER = 4;
	public static readonly ID = 5;
	public static readonly NEW_LINE = 6;
	public static readonly WS = 7;
	public static readonly RULE_source = 0;
	public static readonly RULE_statement = 1;
	public static readonly RULE_declaration = 2;
	public static readonly RULE_expression = 3;
	public static readonly RULE_value = 4;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"source", "statement", "declaration", "expression", "value",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, "'='",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "USE_EDGE", "ASSIGNMENT", "OPERATOR", "NUMBER", "ID", "NEW_LINE", 
		"WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(D6Parser._LITERAL_NAMES, D6Parser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return D6Parser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "D6.g4"; }

	// @Override
	public get ruleNames(): string[] { return D6Parser.ruleNames; }

	// @Override
	// @ts-ignore
	public get serializedATN(): string { return D6Parser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(D6Parser._ATN, this);
	}
	// @RuleVersion(0)
	public source(): SourceContext {
		let _localctx: SourceContext = new SourceContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, D6Parser.RULE_source);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 19;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << D6Parser.USE_EDGE) | (1 << D6Parser.NUMBER) | (1 << D6Parser.ID))) !== 0)) {
				{
				{
				this.state = 10;
				this.statement();
				this.state = 14;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === D6Parser.NEW_LINE) {
					{
					{
					this.state = 11;
					this.match(D6Parser.NEW_LINE);
					}
					}
					this.state = 16;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				}
				this.state = 21;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, D6Parser.RULE_statement);
		try {
			this.state = 25;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 22;
				this.declaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 23;
				this.expression();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 24;
				this.match(D6Parser.USE_EDGE);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public declaration(): DeclarationContext {
		let _localctx: DeclarationContext = new DeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, D6Parser.RULE_declaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 27;
			this.match(D6Parser.ID);
			this.state = 28;
			this.match(D6Parser.ASSIGNMENT);
			this.state = 29;
			this.expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expression(): ExpressionContext {
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, D6Parser.RULE_expression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 32;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === D6Parser.USE_EDGE) {
				{
				this.state = 31;
				this.match(D6Parser.USE_EDGE);
				}
			}

			this.state = 34;
			this.value();
			this.state = 39;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === D6Parser.OPERATOR) {
				{
				{
				this.state = 35;
				this.match(D6Parser.OPERATOR);
				this.state = 36;
				this.value();
				}
				}
				this.state = 41;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public value(): ValueContext {
		let _localctx: ValueContext = new ValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, D6Parser.RULE_value);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 42;
			_la = this._input.LA(1);
			if (!(_la === D6Parser.NUMBER || _la === D6Parser.ID)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\t/\x04\x02\t" +
		"\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x03\x02\x03" +
		"\x02\x07\x02\x0F\n\x02\f\x02\x0E\x02\x12\v\x02\x07\x02\x14\n\x02\f\x02" +
		"\x0E\x02\x17\v\x02\x03\x03\x03\x03\x03\x03\x05\x03\x1C\n\x03\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x05\x05\x05#\n\x05\x03\x05\x03\x05\x03\x05\x07" +
		"\x05(\n\x05\f\x05\x0E\x05+\v\x05\x03\x06\x03\x06\x03\x06\x02\x02\x02\x07" +
		"\x02\x02\x04\x02\x06\x02\b\x02\n\x02\x02\x03\x03\x02\x06\x07\x02/\x02" +
		"\x15\x03\x02\x02\x02\x04\x1B\x03\x02\x02\x02\x06\x1D\x03\x02\x02\x02\b" +
		"\"\x03\x02\x02\x02\n,\x03\x02\x02\x02\f\x10\x05\x04\x03\x02\r\x0F\x07" +
		"\b\x02\x02\x0E\r\x03\x02\x02\x02\x0F\x12\x03\x02\x02\x02\x10\x0E\x03\x02" +
		"\x02\x02\x10\x11\x03\x02\x02\x02\x11\x14\x03\x02\x02\x02\x12\x10\x03\x02" +
		"\x02\x02\x13\f\x03\x02\x02\x02\x14\x17\x03\x02\x02\x02\x15\x13\x03\x02" +
		"\x02\x02\x15\x16\x03\x02\x02\x02\x16\x03\x03\x02\x02\x02\x17\x15\x03\x02" +
		"\x02\x02\x18\x1C\x05\x06\x04\x02\x19\x1C\x05\b\x05\x02\x1A\x1C\x07\x03" +
		"\x02\x02\x1B\x18\x03\x02\x02\x02\x1B\x19\x03\x02\x02\x02\x1B\x1A\x03\x02" +
		"\x02\x02\x1C\x05\x03\x02\x02\x02\x1D\x1E\x07\x07\x02\x02\x1E\x1F\x07\x04" +
		"\x02\x02\x1F \x05\b\x05\x02 \x07\x03\x02\x02\x02!#\x07\x03\x02\x02\"!" +
		"\x03\x02\x02\x02\"#\x03\x02\x02\x02#$\x03\x02\x02\x02$)\x05\n\x06\x02" +
		"%&\x07\x05\x02\x02&(\x05\n\x06\x02\'%\x03\x02\x02\x02(+\x03\x02\x02\x02" +
		")\'\x03\x02\x02\x02)*\x03\x02\x02\x02*\t\x03\x02\x02\x02+)\x03\x02\x02" +
		"\x02,-\t\x02\x02\x02-\v\x03\x02\x02\x02\x07\x10\x15\x1B\")";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!D6Parser.__ATN) {
			D6Parser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(D6Parser._serializedATN));
		}

		return D6Parser.__ATN;
	}

}

export class SourceContext extends ParserRuleContext {
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	public NEW_LINE(): TerminalNode[];
	public NEW_LINE(i: number): TerminalNode;
	public NEW_LINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(D6Parser.NEW_LINE);
		} else {
			return this.getToken(D6Parser.NEW_LINE, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	// @ts-ignore
	public get ruleIndex(): number { return D6Parser.RULE_source; }
	// @Override
	public enterRule(listener: D6Listener): void {
		if (listener.enterSource) {
			listener.enterSource(this);
		}
	}
	// @Override
	public exitRule(listener: D6Listener): void {
		if (listener.exitSource) {
			listener.exitSource(this);
		}
	}
	// @Override
	public accept<Result>(visitor: D6Visitor<Result>): Result {
		if (visitor.visitSource) {
			return visitor.visitSource(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public declaration(): DeclarationContext | undefined {
		return this.tryGetRuleContext(0, DeclarationContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public USE_EDGE(): TerminalNode | undefined { return this.tryGetToken(D6Parser.USE_EDGE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	// @ts-ignore
	public get ruleIndex(): number { return D6Parser.RULE_statement; }
	// @Override
	public enterRule(listener: D6Listener): void {
		if (listener.enterStatement) {
			listener.enterStatement(this);
		}
	}
	// @Override
	public exitRule(listener: D6Listener): void {
		if (listener.exitStatement) {
			listener.exitStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: D6Visitor<Result>): Result {
		if (visitor.visitStatement) {
			return visitor.visitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeclarationContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(D6Parser.ID, 0); }
	public ASSIGNMENT(): TerminalNode { return this.getToken(D6Parser.ASSIGNMENT, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	// @ts-ignore
	public get ruleIndex(): number { return D6Parser.RULE_declaration; }
	// @Override
	public enterRule(listener: D6Listener): void {
		if (listener.enterDeclaration) {
			listener.enterDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: D6Listener): void {
		if (listener.exitDeclaration) {
			listener.exitDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: D6Visitor<Result>): Result {
		if (visitor.visitDeclaration) {
			return visitor.visitDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	public value(): ValueContext[];
	public value(i: number): ValueContext;
	public value(i?: number): ValueContext | ValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueContext);
		} else {
			return this.getRuleContext(i, ValueContext);
		}
	}
	public USE_EDGE(): TerminalNode | undefined { return this.tryGetToken(D6Parser.USE_EDGE, 0); }
	public OPERATOR(): TerminalNode[];
	public OPERATOR(i: number): TerminalNode;
	public OPERATOR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(D6Parser.OPERATOR);
		} else {
			return this.getToken(D6Parser.OPERATOR, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	// @ts-ignore
	public get ruleIndex(): number { return D6Parser.RULE_expression; }
	// @Override
	public enterRule(listener: D6Listener): void {
		if (listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	// @Override
	public exitRule(listener: D6Listener): void {
		if (listener.exitExpression) {
			listener.exitExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: D6Visitor<Result>): Result {
		if (visitor.visitExpression) {
			return visitor.visitExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ValueContext extends ParserRuleContext {
	public NUMBER(): TerminalNode | undefined { return this.tryGetToken(D6Parser.NUMBER, 0); }
	public ID(): TerminalNode | undefined { return this.tryGetToken(D6Parser.ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	// @ts-ignore
	public get ruleIndex(): number { return D6Parser.RULE_value; }
	// @Override
	public enterRule(listener: D6Listener): void {
		if (listener.enterValue) {
			listener.enterValue(this);
		}
	}
	// @Override
	public exitRule(listener: D6Listener): void {
		if (listener.exitValue) {
			listener.exitValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: D6Visitor<Result>): Result {
		if (visitor.visitValue) {
			return visitor.visitValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


