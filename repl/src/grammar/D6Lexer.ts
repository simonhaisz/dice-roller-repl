// Generated from ../grammar/D6.g4 by ANTLR 4.7.3-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class D6Lexer extends Lexer {
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

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "EXTENDED", "USE_EDGE", "ASSIGNMENT", "OPERATOR", 
		"NUMBER", "ID", "NEW_LINE", "WS", "A", "B", "C", "D", "E", "F", "G", "H", 
		"I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", 
		"W", "X", "Y", "Z",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'('", "')'", "'vs'", undefined, undefined, "'='",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, "EXTENDED", "USE_EDGE", "ASSIGNMENT", 
		"OPERATOR", "NUMBER", "ID", "NEW_LINE", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(D6Lexer._LITERAL_NAMES, D6Lexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return D6Lexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(D6Lexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "D6.g4"; }

	// @Override
	public get ruleNames(): string[] { return D6Lexer.ruleNames; }

	// @Override
	// @ts-ignore
	public get serializedATN(): string { return D6Lexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return D6Lexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return D6Lexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\r\xB3\b\x01\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
		"\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12" +
		"\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17" +
		"\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C" +
		"\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04" +
		"#\t#\x04$\t$\x04%\t%\x04&\t&\x03\x02\x03\x02\x03\x03\x03\x03\x03\x04\x03" +
		"\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03" +
		"\x06\x03\x07\x03\x07\x03\b\x03\b\x03\t\x06\tk\n\t\r\t\x0E\tl\x03\n\x06" +
		"\np\n\n\r\n\x0E\nq\x03\v\x05\vu\n\v\x03\v\x03\v\x03\f\x06\fz\n\f\r\f\x0E" +
		"\f{\x03\f\x03\f\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x10\x03" +
		"\x10\x03\x11\x03\x11\x03\x12\x03\x12\x03\x13\x03\x13\x03\x14\x03\x14\x03" +
		"\x15\x03\x15\x03\x16\x03\x16\x03\x17\x03\x17\x03\x18\x03\x18\x03\x19\x03" +
		"\x19\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03" +
		"\x1E\x03\x1E\x03\x1F\x03\x1F\x03 \x03 \x03!\x03!\x03\"\x03\"\x03#\x03" +
		"#\x03$\x03$\x03%\x03%\x03&\x03&\x02\x02\x02\'\x03\x02\x03\x05\x02\x04" +
		"\x07\x02\x05\t\x02\x06\v\x02\x07\r\x02\b\x0F\x02\t\x11\x02\n\x13\x02\v" +
		"\x15\x02\f\x17\x02\r\x19\x02\x02\x1B\x02\x02\x1D\x02\x02\x1F\x02\x02!" +
		"\x02\x02#\x02\x02%\x02\x02\'\x02\x02)\x02\x02+\x02\x02-\x02\x02/\x02\x02" +
		"1\x02\x023\x02\x025\x02\x027\x02\x029\x02\x02;\x02\x02=\x02\x02?\x02\x02" +
		"A\x02\x02C\x02\x02E\x02\x02G\x02\x02I\x02\x02K\x02\x02\x03\x02\"\x04\x02" +
		"--//\x03\x022;\x04\x02C\\c|\x03\x02\x0F\x0F\x03\x02\f\f\x04\x02\v\v\"" +
		"\"\x04\x02CCcc\x04\x02DDdd\x04\x02EEee\x04\x02FFff\x04\x02GGgg\x04\x02" +
		"HHhh\x04\x02IIii\x04\x02JJjj\x04\x02KKkk\x04\x02LLll\x04\x02MMmm\x04\x02" +
		"NNnn\x04\x02OOoo\x04\x02PPpp\x04\x02QQqq\x04\x02RRrr\x04\x02SSss\x04\x02" +
		"TTtt\x04\x02UUuu\x04\x02VVvv\x04\x02WWww\x04\x02XXxx\x04\x02YYyy\x04\x02" +
		"ZZzz\x04\x02[[{{\x04\x02\\\\||\x02\x9C\x02\x03\x03\x02\x02\x02\x02\x05" +
		"\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02\x02\v\x03" +
		"\x02\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02\x02\x02\x11\x03" +
		"\x02\x02\x02\x02\x13\x03\x02\x02\x02\x02\x15\x03\x02\x02\x02\x02\x17\x03" +
		"\x02\x02\x02\x03M\x03\x02\x02\x02\x05O\x03\x02\x02\x02\x07Q\x03\x02\x02" +
		"\x02\tT\x03\x02\x02\x02\v]\x03\x02\x02\x02\re\x03\x02\x02\x02\x0Fg\x03" +
		"\x02\x02\x02\x11j\x03\x02\x02\x02\x13o\x03\x02\x02\x02\x15t\x03\x02\x02" +
		"\x02\x17y\x03\x02\x02\x02\x19\x7F\x03\x02\x02\x02\x1B\x81\x03\x02\x02" +
		"\x02\x1D\x83\x03\x02\x02\x02\x1F\x85\x03\x02\x02\x02!\x87\x03\x02\x02" +
		"\x02#\x89\x03\x02\x02\x02%\x8B\x03\x02\x02\x02\'\x8D\x03\x02\x02\x02)" +
		"\x8F\x03\x02\x02\x02+\x91\x03\x02\x02\x02-\x93\x03\x02\x02\x02/\x95\x03" +
		"\x02\x02\x021\x97\x03\x02\x02\x023\x99\x03\x02\x02\x025\x9B\x03\x02\x02" +
		"\x027\x9D\x03\x02\x02\x029\x9F\x03\x02\x02\x02;\xA1\x03\x02\x02\x02=\xA3" +
		"\x03\x02\x02\x02?\xA5\x03\x02\x02\x02A\xA7\x03\x02\x02\x02C\xA9\x03\x02" +
		"\x02\x02E\xAB\x03\x02\x02\x02G\xAD\x03\x02\x02\x02I\xAF\x03\x02\x02\x02" +
		"K\xB1\x03\x02\x02\x02MN\x07*\x02\x02N\x04\x03\x02\x02\x02OP\x07+\x02\x02" +
		"P\x06\x03\x02\x02\x02QR\x07x\x02\x02RS\x07u\x02\x02S\b\x03\x02\x02\x02" +
		"TU\x05!\x11\x02UV\x05G$\x02VW\x05? \x02WX\x05!\x11\x02XY\x053\x1A\x02" +
		"YZ\x05\x1F\x10\x02Z[\x05!\x11\x02[\\\x05\x1F\x10\x02\\\n\x03\x02\x02\x02" +
		"]^\x05A!\x02^_\x05=\x1F\x02_`\x05!\x11\x02`a\x05!\x11\x02ab\x05\x1F\x10" +
		"\x02bc\x05%\x13\x02cd\x05!\x11\x02d\f\x03\x02\x02\x02ef\x07?\x02\x02f" +
		"\x0E\x03\x02\x02\x02gh\t\x02\x02\x02h\x10\x03\x02\x02\x02ik\t\x03\x02" +
		"\x02ji\x03\x02\x02\x02kl\x03\x02\x02\x02lj\x03\x02\x02\x02lm\x03\x02\x02" +
		"\x02m\x12\x03\x02\x02\x02np\t\x04\x02\x02on\x03\x02\x02\x02pq\x03\x02" +
		"\x02\x02qo\x03\x02\x02\x02qr\x03\x02\x02\x02r\x14\x03\x02\x02\x02su\t" +
		"\x05\x02\x02ts\x03\x02\x02\x02tu\x03\x02\x02\x02uv\x03\x02\x02\x02vw\t" +
		"\x06\x02\x02w\x16\x03\x02\x02\x02xz\t\x07\x02\x02yx\x03\x02\x02\x02z{" +
		"\x03\x02\x02\x02{y\x03\x02\x02\x02{|\x03\x02\x02\x02|}\x03\x02\x02\x02" +
		"}~\b\f\x02\x02~\x18\x03\x02\x02\x02\x7F\x80\t\b\x02\x02\x80\x1A\x03\x02" +
		"\x02\x02\x81\x82\t\t\x02\x02\x82\x1C\x03\x02\x02\x02\x83\x84\t\n\x02\x02" +
		"\x84\x1E\x03\x02\x02\x02\x85\x86\t\v\x02\x02\x86 \x03\x02\x02\x02\x87" +
		"\x88\t\f\x02\x02\x88\"\x03\x02\x02\x02\x89\x8A\t\r\x02\x02\x8A$\x03\x02" +
		"\x02\x02\x8B\x8C\t\x0E\x02\x02\x8C&\x03\x02\x02\x02\x8D\x8E\t\x0F\x02" +
		"\x02\x8E(\x03\x02\x02\x02\x8F\x90\t\x10\x02\x02\x90*\x03\x02\x02\x02\x91" +
		"\x92\t\x11\x02\x02\x92,\x03\x02\x02\x02\x93\x94\t\x12\x02\x02\x94.\x03" +
		"\x02\x02\x02\x95\x96\t\x13\x02\x02\x960\x03\x02\x02\x02\x97\x98\t\x14" +
		"\x02\x02\x982\x03\x02\x02\x02\x99\x9A\t\x15\x02\x02\x9A4\x03\x02\x02\x02" +
		"\x9B\x9C\t\x16\x02\x02\x9C6\x03\x02\x02\x02\x9D\x9E\t\x17\x02\x02\x9E" +
		"8\x03\x02\x02\x02\x9F\xA0\t\x18\x02\x02\xA0:\x03\x02\x02\x02\xA1\xA2\t" +
		"\x19\x02\x02\xA2<\x03\x02\x02\x02\xA3\xA4\t\x1A\x02\x02\xA4>\x03\x02\x02" +
		"\x02\xA5\xA6\t\x1B\x02\x02\xA6@\x03\x02\x02\x02\xA7\xA8\t\x1C\x02\x02" +
		"\xA8B\x03\x02\x02\x02\xA9\xAA\t\x1D\x02\x02\xAAD\x03\x02\x02\x02\xAB\xAC" +
		"\t\x1E\x02\x02\xACF\x03\x02\x02\x02\xAD\xAE\t\x1F\x02\x02\xAEH\x03\x02" +
		"\x02\x02\xAF\xB0\t \x02\x02\xB0J\x03\x02\x02\x02\xB1\xB2\t!\x02\x02\xB2" +
		"L\x03\x02\x02\x02\x07\x02lqt{\x03\b\x02\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!D6Lexer.__ATN) {
			D6Lexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(D6Lexer._serializedATN));
		}

		return D6Lexer.__ATN;
	}

}

