grammar JSON;
prog: value EOF;
obj: '{' pair (',' pair)* '}' | '{' '}';
pair: STRING ':' value;
arr: '[' value (',' value)* ']' | '[' ']';
value: STRING | NUMBER | obj | arr | 'true' | 'false' | 'null';

STRING: '"' (ESC | SAFECODEPOINT)* '"';
fragment ESC: '\\' (["\\/bfnrt] | UNICODE);
fragment UNICODE: 'u' HEX HEX HEX HEX;
fragment HEX: [0-9a-fA-F];
// "~" 符号表示取补集，即除了 \u0000-\u001F 之外的所有字符。
fragment SAFECODEPOINT: ~ ["\\\u0000-\u001F];

NUMBER: '-'? INT ('.' [0-9]+)? EXP?;
fragment INT: '0' | [1-9] [0-9]*;
fragment EXP: [Ee] [+\-]? [0-9]+;
WS: [ \t\n\r]+ -> skip;