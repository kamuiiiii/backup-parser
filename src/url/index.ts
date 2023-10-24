import { CharStream, CommonTokenStream } from "antlr4";
import URLLexer from "./antlr4-lib/URLLexer";
import URLParser from "./antlr4-lib/URLParser";
import { Visitor } from "./antlr4-lib/visitor";

const input = 'http://www.example.com:80/path/to/resource?key1=value1&key2=value2#section1';
const chars = new CharStream(input);
const lexer = new URLLexer(chars);
const tokens = new CommonTokenStream(lexer);
const parser = new URLParser(tokens);
const tree = parser.url();
const visitor = new Visitor();
const res = tree.accept(visitor);
console.log("res:", res);
