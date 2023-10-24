// Generated from URL.g4 by ANTLR 4.13.0
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols
import {
	ATN,
	ATNDeserializer,
	CharStream,
	DecisionState, DFA,
	Lexer,
	LexerATNSimulator,
	RuleContext,
	PredictionContextCache,
	Token
} from "antlr4";
export default class URLLexer extends Lexer {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly STRING = 11;
	public static readonly DIGITS = 12;
	public static readonly EOF = Token.EOF;

	public static readonly channelNames: string[] = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	public static readonly literalNames: (string | null)[] = [ null, "'://'", 
                                                            "':'", "'/'", 
                                                            "'http'", "'https'", 
                                                            "'.'", "'?'", 
                                                            "'#'", "'&'", 
                                                            "'='" ];
	public static readonly symbolicNames: (string | null)[] = [ null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, "STRING", 
                                                             "DIGITS" ];
	public static readonly modeNames: string[] = [ "DEFAULT_MODE", ];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "T__8", 
		"T__9", "STRING", "DIGITS",
	];


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(this, URLLexer._ATN, URLLexer.DecisionsToDFA, new PredictionContextCache());
	}

	public get grammarFileName(): string { return "URL.g4"; }

	public get literalNames(): (string | null)[] { return URLLexer.literalNames; }
	public get symbolicNames(): (string | null)[] { return URLLexer.symbolicNames; }
	public get ruleNames(): string[] { return URLLexer.ruleNames; }

	public get serializedATN(): number[] { return URLLexer._serializedATN; }

	public get channelNames(): string[] { return URLLexer.channelNames; }

	public get modeNames(): string[] { return URLLexer.modeNames; }

	public static readonly _serializedATN: number[] = [4,0,12,70,6,-1,2,0,7,
	0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,
	9,2,10,7,10,2,11,7,11,1,0,1,0,1,0,1,0,1,1,1,1,1,2,1,2,1,3,1,3,1,3,1,3,1,
	3,1,4,1,4,1,4,1,4,1,4,1,4,1,5,1,5,1,6,1,6,1,7,1,7,1,8,1,8,1,9,1,9,1,10,
	4,10,56,8,10,11,10,12,10,57,1,10,5,10,61,8,10,10,10,12,10,64,9,10,1,11,
	4,11,67,8,11,11,11,12,11,68,0,0,12,1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,
	9,19,10,21,11,23,12,1,0,2,2,0,65,90,97,122,1,0,48,57,72,0,1,1,0,0,0,0,3,
	1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,
	15,1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,1,0,0,0,0,23,1,0,0,0,1,25,1,0,
	0,0,3,29,1,0,0,0,5,31,1,0,0,0,7,33,1,0,0,0,9,38,1,0,0,0,11,44,1,0,0,0,13,
	46,1,0,0,0,15,48,1,0,0,0,17,50,1,0,0,0,19,52,1,0,0,0,21,55,1,0,0,0,23,66,
	1,0,0,0,25,26,5,58,0,0,26,27,5,47,0,0,27,28,5,47,0,0,28,2,1,0,0,0,29,30,
	5,58,0,0,30,4,1,0,0,0,31,32,5,47,0,0,32,6,1,0,0,0,33,34,5,104,0,0,34,35,
	5,116,0,0,35,36,5,116,0,0,36,37,5,112,0,0,37,8,1,0,0,0,38,39,5,104,0,0,
	39,40,5,116,0,0,40,41,5,116,0,0,41,42,5,112,0,0,42,43,5,115,0,0,43,10,1,
	0,0,0,44,45,5,46,0,0,45,12,1,0,0,0,46,47,5,63,0,0,47,14,1,0,0,0,48,49,5,
	35,0,0,49,16,1,0,0,0,50,51,5,38,0,0,51,18,1,0,0,0,52,53,5,61,0,0,53,20,
	1,0,0,0,54,56,7,0,0,0,55,54,1,0,0,0,56,57,1,0,0,0,57,55,1,0,0,0,57,58,1,
	0,0,0,58,62,1,0,0,0,59,61,7,1,0,0,60,59,1,0,0,0,61,64,1,0,0,0,62,60,1,0,
	0,0,62,63,1,0,0,0,63,22,1,0,0,0,64,62,1,0,0,0,65,67,7,1,0,0,66,65,1,0,0,
	0,67,68,1,0,0,0,68,66,1,0,0,0,68,69,1,0,0,0,69,24,1,0,0,0,4,0,57,62,68,
	0];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!URLLexer.__ATN) {
			URLLexer.__ATN = new ATNDeserializer().deserialize(URLLexer._serializedATN);
		}

		return URLLexer.__ATN;
	}


	static DecisionsToDFA = URLLexer._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );
}