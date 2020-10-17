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
	public static readonly USE_EDGE = 1;
	public static readonly ASSIGNMENT = 2;
	public static readonly OPERATOR = 3;
	public static readonly NUMBER = 4;
	public static readonly ID = 5;
	public static readonly NEW_LINE = 6;
	public static readonly WS = 7;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"USE_EDGE", "ASSIGNMENT", "OPERATOR", "NUMBER", "ID", "NEW_LINE", "WS", 
		"A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", 
		"O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, "'='",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "USE_EDGE", "ASSIGNMENT", "OPERATOR", "NUMBER", "ID", "NEW_LINE", 
		"WS",
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\t\x9B\b\x01\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
		"\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12" +
		"\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17" +
		"\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C" +
		"\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x03" +
		"\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x03\x03" +
		"\x03\x03\x04\x03\x04\x03\x05\x06\x05S\n\x05\r\x05\x0E\x05T\x03\x06\x06" +
		"\x06X\n\x06\r\x06\x0E\x06Y\x03\x07\x05\x07]\n\x07\x03\x07\x03\x07\x03" +
		"\b\x06\bb\n\b\r\b\x0E\bc\x03\b\x03\b\x03\t\x03\t\x03\n\x03\n\x03\v\x03" +
		"\v\x03\f\x03\f\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x10\x03" +
		"\x10\x03\x11\x03\x11\x03\x12\x03\x12\x03\x13\x03\x13\x03\x14\x03\x14\x03" +
		"\x15\x03\x15\x03\x16\x03\x16\x03\x17\x03\x17\x03\x18\x03\x18\x03\x19\x03" +
		"\x19\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03" +
		"\x1E\x03\x1E\x03\x1F\x03\x1F\x03 \x03 \x03!\x03!\x03\"\x03\"\x02\x02\x02" +
		"#\x03\x02\x03\x05\x02\x04\x07\x02\x05\t\x02\x06\v\x02\x07\r\x02\b\x0F" +
		"\x02\t\x11\x02\x02\x13\x02\x02\x15\x02\x02\x17\x02\x02\x19\x02\x02\x1B" +
		"\x02\x02\x1D\x02\x02\x1F\x02\x02!\x02\x02#\x02\x02%\x02\x02\'\x02\x02" +
		")\x02\x02+\x02\x02-\x02\x02/\x02\x021\x02\x023\x02\x025\x02\x027\x02\x02" +
		"9\x02\x02;\x02\x02=\x02\x02?\x02\x02A\x02\x02C\x02\x02\x03\x02\"\x04\x02" +
		"--//\x03\x022;\x04\x02C\\c|\x03\x02\x0F\x0F\x03\x02\f\f\x04\x02\v\v\"" +
		"\"\x04\x02CCcc\x04\x02DDdd\x04\x02EEee\x04\x02FFff\x04\x02GGgg\x04\x02" +
		"HHhh\x04\x02IIii\x04\x02JJjj\x04\x02KKkk\x04\x02LLll\x04\x02MMmm\x04\x02" +
		"NNnn\x04\x02OOoo\x04\x02PPpp\x04\x02QQqq\x04\x02RRrr\x04\x02SSss\x04\x02" +
		"TTtt\x04\x02UUuu\x04\x02VVvv\x04\x02WWww\x04\x02XXxx\x04\x02YYyy\x04\x02" +
		"ZZzz\x04\x02[[{{\x04\x02\\\\||\x02\x84\x02\x03\x03\x02\x02\x02\x02\x05" +
		"\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02\x02\v\x03" +
		"\x02\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02\x02\x03E\x03\x02" +
		"\x02\x02\x05M\x03\x02\x02\x02\x07O\x03\x02\x02\x02\tR\x03\x02\x02\x02" +
		"\vW\x03\x02\x02\x02\r\\\x03\x02\x02\x02\x0Fa\x03\x02\x02\x02\x11g\x03" +
		"\x02\x02\x02\x13i\x03\x02\x02\x02\x15k\x03\x02\x02\x02\x17m\x03\x02\x02" +
		"\x02\x19o\x03\x02\x02\x02\x1Bq\x03\x02\x02\x02\x1Ds\x03\x02\x02\x02\x1F" +
		"u\x03\x02\x02\x02!w\x03\x02\x02\x02#y\x03\x02\x02\x02%{\x03\x02\x02\x02" +
		"\'}\x03\x02\x02\x02)\x7F\x03\x02\x02\x02+\x81\x03\x02\x02\x02-\x83\x03" +
		"\x02\x02\x02/\x85\x03\x02\x02\x021\x87\x03\x02\x02\x023\x89\x03\x02\x02" +
		"\x025\x8B\x03\x02\x02\x027\x8D\x03\x02\x02\x029\x8F\x03\x02\x02\x02;\x91" +
		"\x03\x02\x02\x02=\x93\x03\x02\x02\x02?\x95\x03\x02\x02\x02A\x97\x03\x02" +
		"\x02\x02C\x99\x03\x02\x02\x02EF\x059\x1D\x02FG\x055\x1B\x02GH\x05\x19" +
		"\r\x02HI\x05\x19\r\x02IJ\x05\x17\f\x02JK\x05\x1D\x0F\x02KL\x05\x19\r\x02" +
		"L\x04\x03\x02\x02\x02MN\x07?\x02\x02N\x06\x03\x02\x02\x02OP\t\x02\x02" +
		"\x02P\b\x03\x02\x02\x02QS\t\x03\x02\x02RQ\x03\x02\x02\x02ST\x03\x02\x02" +
		"\x02TR\x03\x02\x02\x02TU\x03\x02\x02\x02U\n\x03\x02\x02\x02VX\t\x04\x02" +
		"\x02WV\x03\x02\x02\x02XY\x03\x02\x02\x02YW\x03\x02\x02\x02YZ\x03\x02\x02" +
		"\x02Z\f\x03\x02\x02\x02[]\t\x05\x02\x02\\[\x03\x02\x02\x02\\]\x03\x02" +
		"\x02\x02]^\x03\x02\x02\x02^_\t\x06\x02\x02_\x0E\x03\x02\x02\x02`b\t\x07" +
		"\x02\x02a`\x03\x02\x02\x02bc\x03\x02\x02\x02ca\x03\x02\x02\x02cd\x03\x02" +
		"\x02\x02de\x03\x02\x02\x02ef\b\b\x02\x02f\x10\x03\x02\x02\x02gh\t\b\x02" +
		"\x02h\x12\x03\x02\x02\x02ij\t\t\x02\x02j\x14\x03\x02\x02\x02kl\t\n\x02" +
		"\x02l\x16\x03\x02\x02\x02mn\t\v\x02\x02n\x18\x03\x02\x02\x02op\t\f\x02" +
		"\x02p\x1A\x03\x02\x02\x02qr\t\r\x02\x02r\x1C\x03\x02\x02\x02st\t\x0E\x02" +
		"\x02t\x1E\x03\x02\x02\x02uv\t\x0F\x02\x02v \x03\x02\x02\x02wx\t\x10\x02" +
		"\x02x\"\x03\x02\x02\x02yz\t\x11\x02\x02z$\x03\x02\x02\x02{|\t\x12\x02" +
		"\x02|&\x03\x02\x02\x02}~\t\x13\x02\x02~(\x03\x02\x02\x02\x7F\x80\t\x14" +
		"\x02\x02\x80*\x03\x02\x02\x02\x81\x82\t\x15\x02\x02\x82,\x03\x02\x02\x02" +
		"\x83\x84\t\x16\x02\x02\x84.\x03\x02\x02\x02\x85\x86\t\x17\x02\x02\x86" +
		"0\x03\x02\x02\x02\x87\x88\t\x18\x02\x02\x882\x03\x02\x02\x02\x89\x8A\t" +
		"\x19\x02\x02\x8A4\x03\x02\x02\x02\x8B\x8C\t\x1A\x02\x02\x8C6\x03\x02\x02" +
		"\x02\x8D\x8E\t\x1B\x02\x02\x8E8\x03\x02\x02\x02\x8F\x90\t\x1C\x02\x02" +
		"\x90:\x03\x02\x02\x02\x91\x92\t\x1D\x02\x02\x92<\x03\x02\x02\x02\x93\x94" +
		"\t\x1E\x02\x02\x94>\x03\x02\x02\x02\x95\x96\t\x1F\x02\x02\x96@\x03\x02" +
		"\x02\x02\x97\x98\t \x02\x02\x98B\x03\x02\x02\x02\x99\x9A\t!\x02\x02\x9A" +
		"D\x03\x02\x02\x02\x07\x02TY\\c\x03\b\x02\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!D6Lexer.__ATN) {
			D6Lexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(D6Lexer._serializedATN));
		}

		return D6Lexer.__ATN;
	}

}
