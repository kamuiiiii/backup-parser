import {
  ArrContext,
  ObjContext,
  TerminalNodeImpl,
  ValueContext,
} from "./context";

type TokenName =
  | "{"
  | ":"
  | ","
  | "}"
  | "["
  | "]"
  | "true"
  | "false"
  | "null"
  | "STRING"
  | "NUMBER"
  | "EOF";

type TokenType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | -1;

type RuleCTX = ObjContext | ArrContext | ValueContext;
type CTX = ObjContext | ArrContext | ValueContext | TerminalNodeImpl;

export type { TokenName, TokenType, RuleCTX, CTX };
