// Generated from URL.g4 by ANTLR 4.13.0

import {ParseTreeVisitor} from 'antlr4';


import { UrlContext } from "./URLParser";
import { SchemeContext } from "./URLParser";
import { HostContext } from "./URLParser";
import { PortContext } from "./URLParser";
import { PathContext } from "./URLParser";
import { QueryContext } from "./URLParser";
import { FragContext } from "./URLParser";
import { SearchContext } from "./URLParser";
import { ParameterContext } from "./URLParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `URLParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export default class URLVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `URLParser.url`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUrl?: (ctx: UrlContext) => Result;
	/**
	 * Visit a parse tree produced by `URLParser.scheme`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitScheme?: (ctx: SchemeContext) => Result;
	/**
	 * Visit a parse tree produced by `URLParser.host`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHost?: (ctx: HostContext) => Result;
	/**
	 * Visit a parse tree produced by `URLParser.port`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPort?: (ctx: PortContext) => Result;
	/**
	 * Visit a parse tree produced by `URLParser.path`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPath?: (ctx: PathContext) => Result;
	/**
	 * Visit a parse tree produced by `URLParser.query`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuery?: (ctx: QueryContext) => Result;
	/**
	 * Visit a parse tree produced by `URLParser.frag`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFrag?: (ctx: FragContext) => Result;
	/**
	 * Visit a parse tree produced by `URLParser.search`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSearch?: (ctx: SearchContext) => Result;
	/**
	 * Visit a parse tree produced by `URLParser.parameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameter?: (ctx: ParameterContext) => Result;
}

