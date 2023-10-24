import { JSONLexer } from "./my-lib/lexer";
import { JSONParser } from "./my-lib/parser";
import { Visitor } from "./my-lib/visitor";

const input = '[{"a":{"e":  [44,11,44]}},{"b":true},{"c":null}, {}]';
const lexer = new JSONLexer(input);
// while (lexer.c !== "EOF") {
//   console.log(lexer.nextToken());
// }
const parser = new JSONParser(lexer);
const tree = parser.value();
const visitor = new Visitor();
const res = tree.accept(visitor);
console.log("res:", JSON.stringify(res));
