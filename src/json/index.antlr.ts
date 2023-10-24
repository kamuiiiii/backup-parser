import JSONLexer from "./antlr4-lib/JSONLexer";
import JSONParser from "./antlr4-lib/JSONParser";
import { CharStream, CommonTokenStream } from "antlr4";
import { Visitor } from "./antlr4-lib/visitor";

const input = '[{"a":{"e":  [44,11,"apple"]}},{"b":true},{"c":null}, {}]';
const chars = new CharStream(input);
const lexer = new JSONLexer(chars);
const tokens = new CommonTokenStream(lexer);
const parser = new JSONParser(tokens);
const tree = parser.prog();
const visitor = new Visitor();
const res = tree.accept(visitor);
console.log("res:", JSON.stringify(res));
