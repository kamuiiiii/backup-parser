// Generated from URL.g4 by ANTLR 4.13.0
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols

import {
	ATN,
	ATNDeserializer, DecisionState, DFA, FailedPredicateException,
	RecognitionException, NoViableAltException, BailErrorStrategy,
	Parser, ParserATNSimulator,
	RuleContext, ParserRuleContext, PredictionMode, PredictionContextCache,
	TerminalNode, RuleNode,
	Token, TokenStream,
	Interval, IntervalSet
} from 'antlr4';
import URLVisitor from "./URLVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class URLParser extends Parser {
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
	public static readonly RULE_url = 0;
	public static readonly RULE_scheme = 1;
	public static readonly RULE_host = 2;
	public static readonly RULE_port = 3;
	public static readonly RULE_path = 4;
	public static readonly RULE_query = 5;
	public static readonly RULE_frag = 6;
	public static readonly RULE_search = 7;
	public static readonly RULE_parameter = 8;
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
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"url", "scheme", "host", "port", "path", "query", "frag", "search", "parameter",
	];
	public get grammarFileName(): string { return "URL.g4"; }
	public get literalNames(): (string | null)[] { return URLParser.literalNames; }
	public get symbolicNames(): (string | null)[] { return URLParser.symbolicNames; }
	public get ruleNames(): string[] { return URLParser.ruleNames; }
	public get serializedATN(): number[] { return URLParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, URLParser._ATN, URLParser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public url(): UrlContext {
		let localctx: UrlContext = new UrlContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, URLParser.RULE_url);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 18;
			this.scheme();
			this.state = 19;
			this.match(URLParser.T__0);
			this.state = 20;
			this.host();
			this.state = 23;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===2) {
				{
				this.state = 21;
				this.match(URLParser.T__1);
				this.state = 22;
				this.port();
				}
			}

			this.state = 29;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===3) {
				{
				this.state = 25;
				this.match(URLParser.T__2);
				this.state = 27;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===11) {
					{
					this.state = 26;
					this.path();
					}
				}

				}
			}

			this.state = 32;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===7) {
				{
				this.state = 31;
				this.query();
				}
			}

			this.state = 35;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===8) {
				{
				this.state = 34;
				this.frag();
				}
			}

			this.state = 37;
			this.match(URLParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public scheme(): SchemeContext {
		let localctx: SchemeContext = new SchemeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, URLParser.RULE_scheme);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 39;
			_la = this._input.LA(1);
			if(!(_la===4 || _la===5)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public host(): HostContext {
		let localctx: HostContext = new HostContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, URLParser.RULE_host);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 41;
			this.match(URLParser.STRING);
			this.state = 46;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===6) {
				{
				{
				this.state = 42;
				this.match(URLParser.T__5);
				this.state = 43;
				this.match(URLParser.STRING);
				}
				}
				this.state = 48;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public port(): PortContext {
		let localctx: PortContext = new PortContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, URLParser.RULE_port);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 49;
			this.match(URLParser.DIGITS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public path(): PathContext {
		let localctx: PathContext = new PathContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, URLParser.RULE_path);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 51;
			this.match(URLParser.STRING);
			this.state = 56;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 6, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 52;
					this.match(URLParser.T__2);
					this.state = 53;
					this.match(URLParser.STRING);
					}
					}
				}
				this.state = 58;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 6, this._ctx);
			}
			this.state = 60;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===3) {
				{
				this.state = 59;
				this.match(URLParser.T__2);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public query(): QueryContext {
		let localctx: QueryContext = new QueryContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, URLParser.RULE_query);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 62;
			this.match(URLParser.T__6);
			this.state = 63;
			this.search();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public frag(): FragContext {
		let localctx: FragContext = new FragContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, URLParser.RULE_frag);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 65;
			this.match(URLParser.T__7);
			this.state = 66;
			_la = this._input.LA(1);
			if(!(_la===11 || _la===12)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public search(): SearchContext {
		let localctx: SearchContext = new SearchContext(this, this._ctx, this.state);
		this.enterRule(localctx, 14, URLParser.RULE_search);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 68;
			this.parameter();
			this.state = 73;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===9) {
				{
				{
				this.state = 69;
				this.match(URLParser.T__8);
				this.state = 70;
				this.parameter();
				}
				}
				this.state = 75;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public parameter(): ParameterContext {
		let localctx: ParameterContext = new ParameterContext(this, this._ctx, this.state);
		this.enterRule(localctx, 16, URLParser.RULE_parameter);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 76;
			this.match(URLParser.STRING);
			this.state = 77;
			this.match(URLParser.T__9);
			this.state = 78;
			_la = this._input.LA(1);
			if(!(_la===11 || _la===12)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public static readonly _serializedATN: number[] = [4,1,12,81,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,1,0,1,0,1,
	0,1,0,1,0,3,0,24,8,0,1,0,1,0,3,0,28,8,0,3,0,30,8,0,1,0,3,0,33,8,0,1,0,3,
	0,36,8,0,1,0,1,0,1,1,1,1,1,2,1,2,1,2,5,2,45,8,2,10,2,12,2,48,9,2,1,3,1,
	3,1,4,1,4,1,4,5,4,55,8,4,10,4,12,4,58,9,4,1,4,3,4,61,8,4,1,5,1,5,1,5,1,
	6,1,6,1,6,1,7,1,7,1,7,5,7,72,8,7,10,7,12,7,75,9,7,1,8,1,8,1,8,1,8,1,8,0,
	0,9,0,2,4,6,8,10,12,14,16,0,2,1,0,4,5,1,0,11,12,80,0,18,1,0,0,0,2,39,1,
	0,0,0,4,41,1,0,0,0,6,49,1,0,0,0,8,51,1,0,0,0,10,62,1,0,0,0,12,65,1,0,0,
	0,14,68,1,0,0,0,16,76,1,0,0,0,18,19,3,2,1,0,19,20,5,1,0,0,20,23,3,4,2,0,
	21,22,5,2,0,0,22,24,3,6,3,0,23,21,1,0,0,0,23,24,1,0,0,0,24,29,1,0,0,0,25,
	27,5,3,0,0,26,28,3,8,4,0,27,26,1,0,0,0,27,28,1,0,0,0,28,30,1,0,0,0,29,25,
	1,0,0,0,29,30,1,0,0,0,30,32,1,0,0,0,31,33,3,10,5,0,32,31,1,0,0,0,32,33,
	1,0,0,0,33,35,1,0,0,0,34,36,3,12,6,0,35,34,1,0,0,0,35,36,1,0,0,0,36,37,
	1,0,0,0,37,38,5,0,0,1,38,1,1,0,0,0,39,40,7,0,0,0,40,3,1,0,0,0,41,46,5,11,
	0,0,42,43,5,6,0,0,43,45,5,11,0,0,44,42,1,0,0,0,45,48,1,0,0,0,46,44,1,0,
	0,0,46,47,1,0,0,0,47,5,1,0,0,0,48,46,1,0,0,0,49,50,5,12,0,0,50,7,1,0,0,
	0,51,56,5,11,0,0,52,53,5,3,0,0,53,55,5,11,0,0,54,52,1,0,0,0,55,58,1,0,0,
	0,56,54,1,0,0,0,56,57,1,0,0,0,57,60,1,0,0,0,58,56,1,0,0,0,59,61,5,3,0,0,
	60,59,1,0,0,0,60,61,1,0,0,0,61,9,1,0,0,0,62,63,5,7,0,0,63,64,3,14,7,0,64,
	11,1,0,0,0,65,66,5,8,0,0,66,67,7,1,0,0,67,13,1,0,0,0,68,73,3,16,8,0,69,
	70,5,9,0,0,70,72,3,16,8,0,71,69,1,0,0,0,72,75,1,0,0,0,73,71,1,0,0,0,73,
	74,1,0,0,0,74,15,1,0,0,0,75,73,1,0,0,0,76,77,5,11,0,0,77,78,5,10,0,0,78,
	79,7,1,0,0,79,17,1,0,0,0,9,23,27,29,32,35,46,56,60,73];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!URLParser.__ATN) {
			URLParser.__ATN = new ATNDeserializer().deserialize(URLParser._serializedATN);
		}

		return URLParser.__ATN;
	}


	static DecisionsToDFA = URLParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class UrlContext extends ParserRuleContext {
	constructor(parser?: URLParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public scheme(): SchemeContext {
		return this.getTypedRuleContext(SchemeContext, 0) as SchemeContext;
	}
	public host(): HostContext {
		return this.getTypedRuleContext(HostContext, 0) as HostContext;
	}
	public EOF(): TerminalNode {
		return this.getToken(URLParser.EOF, 0);
	}
	public port(): PortContext {
		return this.getTypedRuleContext(PortContext, 0) as PortContext;
	}
	public query(): QueryContext {
		return this.getTypedRuleContext(QueryContext, 0) as QueryContext;
	}
	public frag(): FragContext {
		return this.getTypedRuleContext(FragContext, 0) as FragContext;
	}
	public path(): PathContext {
		return this.getTypedRuleContext(PathContext, 0) as PathContext;
	}
    public get ruleIndex(): number {
    	return URLParser.RULE_url;
	}
	// @Override
	public accept<Result>(visitor: URLVisitor<Result>): Result {
		if (visitor.visitUrl) {
			return visitor.visitUrl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SchemeContext extends ParserRuleContext {
	constructor(parser?: URLParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return URLParser.RULE_scheme;
	}
	// @Override
	public accept<Result>(visitor: URLVisitor<Result>): Result {
		if (visitor.visitScheme) {
			return visitor.visitScheme(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class HostContext extends ParserRuleContext {
	constructor(parser?: URLParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public STRING_list(): TerminalNode[] {
	    	return this.getTokens(URLParser.STRING);
	}
	public STRING(i: number): TerminalNode {
		return this.getToken(URLParser.STRING, i);
	}
    public get ruleIndex(): number {
    	return URLParser.RULE_host;
	}
	// @Override
	public accept<Result>(visitor: URLVisitor<Result>): Result {
		if (visitor.visitHost) {
			return visitor.visitHost(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PortContext extends ParserRuleContext {
	constructor(parser?: URLParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DIGITS(): TerminalNode {
		return this.getToken(URLParser.DIGITS, 0);
	}
    public get ruleIndex(): number {
    	return URLParser.RULE_port;
	}
	// @Override
	public accept<Result>(visitor: URLVisitor<Result>): Result {
		if (visitor.visitPort) {
			return visitor.visitPort(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PathContext extends ParserRuleContext {
	constructor(parser?: URLParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public STRING_list(): TerminalNode[] {
	    	return this.getTokens(URLParser.STRING);
	}
	public STRING(i: number): TerminalNode {
		return this.getToken(URLParser.STRING, i);
	}
    public get ruleIndex(): number {
    	return URLParser.RULE_path;
	}
	// @Override
	public accept<Result>(visitor: URLVisitor<Result>): Result {
		if (visitor.visitPath) {
			return visitor.visitPath(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QueryContext extends ParserRuleContext {
	constructor(parser?: URLParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public search(): SearchContext {
		return this.getTypedRuleContext(SearchContext, 0) as SearchContext;
	}
    public get ruleIndex(): number {
    	return URLParser.RULE_query;
	}
	// @Override
	public accept<Result>(visitor: URLVisitor<Result>): Result {
		if (visitor.visitQuery) {
			return visitor.visitQuery(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FragContext extends ParserRuleContext {
	constructor(parser?: URLParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public STRING(): TerminalNode {
		return this.getToken(URLParser.STRING, 0);
	}
	public DIGITS(): TerminalNode {
		return this.getToken(URLParser.DIGITS, 0);
	}
    public get ruleIndex(): number {
    	return URLParser.RULE_frag;
	}
	// @Override
	public accept<Result>(visitor: URLVisitor<Result>): Result {
		if (visitor.visitFrag) {
			return visitor.visitFrag(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SearchContext extends ParserRuleContext {
	constructor(parser?: URLParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public parameter_list(): ParameterContext[] {
		return this.getTypedRuleContexts(ParameterContext) as ParameterContext[];
	}
	public parameter(i: number): ParameterContext {
		return this.getTypedRuleContext(ParameterContext, i) as ParameterContext;
	}
    public get ruleIndex(): number {
    	return URLParser.RULE_search;
	}
	// @Override
	public accept<Result>(visitor: URLVisitor<Result>): Result {
		if (visitor.visitSearch) {
			return visitor.visitSearch(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParameterContext extends ParserRuleContext {
	constructor(parser?: URLParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public STRING_list(): TerminalNode[] {
	    	return this.getTokens(URLParser.STRING);
	}
	public STRING(i: number): TerminalNode {
		return this.getToken(URLParser.STRING, i);
	}
	public DIGITS(): TerminalNode {
		return this.getToken(URLParser.DIGITS, 0);
	}
    public get ruleIndex(): number {
    	return URLParser.RULE_parameter;
	}
	// @Override
	public accept<Result>(visitor: URLVisitor<Result>): Result {
		if (visitor.visitParameter) {
			return visitor.visitParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
