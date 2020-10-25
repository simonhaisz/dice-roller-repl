// Generated from ../grammar/D6.g4 by ANTLR 4.7.3-SNAPSHOT


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
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly EXTENDED = 4;
	public static readonly USE_EDGE = 5;
	public static readonly ASSIGNMENT = 6;
	public static readonly OPERATOR = 7;
	public static readonly NUMBER = 8;
	public static readonly ID = 9;
	public static readonly NEW_LINE = 10;
	public static readonly WS = 11;
	public static readonly RULE_source = 0;
	public static readonly RULE_statement = 1;
	public static readonly RULE_declaration = 2;
	public static readonly RULE_expression = 3;
	public static readonly RULE_test = 4;
	public static readonly RULE_successTest = 5;
	public static readonly RULE_opposedTest = 6;
	public static readonly RULE_extendedTest = 7;
	public static readonly RULE_value = 8;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"source", "statement", "declaration", "expression", "test", "successTest", 
		"opposedTest", "extendedTest", "value",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'('", "')'", "'vs'", undefined, undefined, "'='",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, "EXTENDED", "USE_EDGE", "ASSIGNMENT", 
		"OPERATOR", "NUMBER", "ID", "NEW_LINE", "WS",
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
			this.state = 27;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << D6Parser.USE_EDGE) | (1 << D6Parser.NUMBER) | (1 << D6Parser.ID))) !== 0)) {
				{
				{
				this.state = 18;
				this.statement();
				this.state = 22;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === D6Parser.NEW_LINE) {
					{
					{
					this.state = 19;
					this.match(D6Parser.NEW_LINE);
					}
					}
					this.state = 24;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				}
				this.state = 29;
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
			this.state = 34;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 30;
				this.declaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 31;
				this.test();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 32;
				this.expression();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 33;
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
			this.state = 36;
			this.match(D6Parser.ID);
			this.state = 37;
			this.match(D6Parser.ASSIGNMENT);
			this.state = 38;
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
			this.state = 41;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === D6Parser.USE_EDGE) {
				{
				this.state = 40;
				this.match(D6Parser.USE_EDGE);
				}
			}

			this.state = 43;
			this.value();
			this.state = 48;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === D6Parser.OPERATOR) {
				{
				{
				this.state = 44;
				this.match(D6Parser.OPERATOR);
				this.state = 45;
				this.value();
				}
				}
				this.state = 50;
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
	public test(): TestContext {
		let _localctx: TestContext = new TestContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, D6Parser.RULE_test);
		try {
			this.state = 54;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 5, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 51;
				this.successTest();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 52;
				this.opposedTest();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 53;
				this.extendedTest();
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
	public successTest(): SuccessTestContext {
		let _localctx: SuccessTestContext = new SuccessTestContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, D6Parser.RULE_successTest);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 56;
			this.expression();
			this.state = 57;
			this.match(D6Parser.T__0);
			this.state = 58;
			_localctx._threshold = this.match(D6Parser.NUMBER);
			this.state = 59;
			this.match(D6Parser.T__1);
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
	public opposedTest(): OpposedTestContext {
		let _localctx: OpposedTestContext = new OpposedTestContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, D6Parser.RULE_opposedTest);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 61;
			_localctx._left = this.expression();
			this.state = 62;
			this.match(D6Parser.T__2);
			this.state = 63;
			_localctx._right = this.expression();
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
	public extendedTest(): ExtendedTestContext {
		let _localctx: ExtendedTestContext = new ExtendedTestContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, D6Parser.RULE_extendedTest);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 65;
			this.expression();
			this.state = 66;
			this.match(D6Parser.T__0);
			this.state = 67;
			_localctx._threshold = this.match(D6Parser.NUMBER);
			this.state = 68;
			this.match(D6Parser.T__1);
			this.state = 69;
			this.match(D6Parser.EXTENDED);
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
		this.enterRule(_localctx, 16, D6Parser.RULE_value);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 71;
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\rL\x04\x02\t" +
		"\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07\t" +
		"\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x03\x02\x03\x02\x07\x02\x17\n\x02\f" +
		"\x02\x0E\x02\x1A\v\x02\x07\x02\x1C\n\x02\f\x02\x0E\x02\x1F\v\x02\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x05\x03%\n\x03\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x05\x05\x05,\n\x05\x03\x05\x03\x05\x03\x05\x07\x051\n\x05\f\x05\x0E" +
		"\x054\v\x05\x03\x06\x03\x06\x03\x06\x05\x069\n\x06\x03\x07\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03" +
		"\t\x03\t\x03\n\x03\n\x03\n\x02\x02\x02\v\x02\x02\x04\x02\x06\x02\b\x02" +
		"\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x02\x03\x03\x02\n\v\x02K\x02\x1D" +
		"\x03\x02\x02\x02\x04$\x03\x02\x02\x02\x06&\x03\x02\x02\x02\b+\x03\x02" +
		"\x02\x02\n8\x03\x02\x02\x02\f:\x03\x02\x02\x02\x0E?\x03\x02\x02\x02\x10" +
		"C\x03\x02\x02\x02\x12I\x03\x02\x02\x02\x14\x18\x05\x04\x03\x02\x15\x17" +
		"\x07\f\x02\x02\x16\x15\x03\x02\x02\x02\x17\x1A\x03\x02\x02\x02\x18\x16" +
		"\x03\x02\x02\x02\x18\x19\x03\x02\x02\x02\x19\x1C\x03\x02\x02\x02\x1A\x18" +
		"\x03\x02\x02\x02\x1B\x14\x03\x02\x02\x02\x1C\x1F\x03\x02\x02\x02\x1D\x1B" +
		"\x03\x02\x02\x02\x1D\x1E\x03\x02\x02\x02\x1E\x03\x03\x02\x02\x02\x1F\x1D" +
		"\x03\x02\x02\x02 %\x05\x06\x04\x02!%\x05\n\x06\x02\"%\x05\b\x05\x02#%" +
		"\x07\x07\x02\x02$ \x03\x02\x02\x02$!\x03\x02\x02\x02$\"\x03\x02\x02\x02" +
		"$#\x03\x02\x02\x02%\x05\x03\x02\x02\x02&\'\x07\v\x02\x02\'(\x07\b\x02" +
		"\x02()\x05\b\x05\x02)\x07\x03\x02\x02\x02*,\x07\x07\x02\x02+*\x03\x02" +
		"\x02\x02+,\x03\x02\x02\x02,-\x03\x02\x02\x02-2\x05\x12\n\x02./\x07\t\x02" +
		"\x02/1\x05\x12\n\x020.\x03\x02\x02\x0214\x03\x02\x02\x0220\x03\x02\x02" +
		"\x0223\x03\x02\x02\x023\t\x03\x02\x02\x0242\x03\x02\x02\x0259\x05\f\x07" +
		"\x0269\x05\x0E\b\x0279\x05\x10\t\x0285\x03\x02\x02\x0286\x03\x02\x02\x02" +
		"87\x03\x02\x02\x029\v\x03\x02\x02\x02:;\x05\b\x05\x02;<\x07\x03\x02\x02" +
		"<=\x07\n\x02\x02=>\x07\x04\x02\x02>\r\x03\x02\x02\x02?@\x05\b\x05\x02" +
		"@A\x07\x05\x02\x02AB\x05\b\x05\x02B\x0F\x03\x02\x02\x02CD\x05\b\x05\x02" +
		"DE\x07\x03\x02\x02EF\x07\n\x02\x02FG\x07\x04\x02\x02GH\x07\x06\x02\x02" +
		"H\x11\x03\x02\x02\x02IJ\t\x02\x02\x02J\x13\x03\x02\x02\x02\b\x18\x1D$" +
		"+28";
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
	public test(): TestContext | undefined {
		return this.tryGetRuleContext(0, TestContext);
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


export class TestContext extends ParserRuleContext {
	public successTest(): SuccessTestContext | undefined {
		return this.tryGetRuleContext(0, SuccessTestContext);
	}
	public opposedTest(): OpposedTestContext | undefined {
		return this.tryGetRuleContext(0, OpposedTestContext);
	}
	public extendedTest(): ExtendedTestContext | undefined {
		return this.tryGetRuleContext(0, ExtendedTestContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	// @ts-ignore
	public get ruleIndex(): number { return D6Parser.RULE_test; }
	// @Override
	public enterRule(listener: D6Listener): void {
		if (listener.enterTest) {
			listener.enterTest(this);
		}
	}
	// @Override
	public exitRule(listener: D6Listener): void {
		if (listener.exitTest) {
			listener.exitTest(this);
		}
	}
	// @Override
	public accept<Result>(visitor: D6Visitor<Result>): Result {
		if (visitor.visitTest) {
			return visitor.visitTest(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SuccessTestContext extends ParserRuleContext {
	public _threshold: Token;
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public NUMBER(): TerminalNode { return this.getToken(D6Parser.NUMBER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	// @ts-ignore
	public get ruleIndex(): number { return D6Parser.RULE_successTest; }
	// @Override
	public enterRule(listener: D6Listener): void {
		if (listener.enterSuccessTest) {
			listener.enterSuccessTest(this);
		}
	}
	// @Override
	public exitRule(listener: D6Listener): void {
		if (listener.exitSuccessTest) {
			listener.exitSuccessTest(this);
		}
	}
	// @Override
	public accept<Result>(visitor: D6Visitor<Result>): Result {
		if (visitor.visitSuccessTest) {
			return visitor.visitSuccessTest(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OpposedTestContext extends ParserRuleContext {
	public _left: ExpressionContext;
	public _right: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	// @ts-ignore
	public get ruleIndex(): number { return D6Parser.RULE_opposedTest; }
	// @Override
	public enterRule(listener: D6Listener): void {
		if (listener.enterOpposedTest) {
			listener.enterOpposedTest(this);
		}
	}
	// @Override
	public exitRule(listener: D6Listener): void {
		if (listener.exitOpposedTest) {
			listener.exitOpposedTest(this);
		}
	}
	// @Override
	public accept<Result>(visitor: D6Visitor<Result>): Result {
		if (visitor.visitOpposedTest) {
			return visitor.visitOpposedTest(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExtendedTestContext extends ParserRuleContext {
	public _threshold: Token;
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public EXTENDED(): TerminalNode { return this.getToken(D6Parser.EXTENDED, 0); }
	public NUMBER(): TerminalNode { return this.getToken(D6Parser.NUMBER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	// @ts-ignore
	public get ruleIndex(): number { return D6Parser.RULE_extendedTest; }
	// @Override
	public enterRule(listener: D6Listener): void {
		if (listener.enterExtendedTest) {
			listener.enterExtendedTest(this);
		}
	}
	// @Override
	public exitRule(listener: D6Listener): void {
		if (listener.exitExtendedTest) {
			listener.exitExtendedTest(this);
		}
	}
	// @Override
	public accept<Result>(visitor: D6Visitor<Result>): Result {
		if (visitor.visitExtendedTest) {
			return visitor.visitExtendedTest(this);
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


