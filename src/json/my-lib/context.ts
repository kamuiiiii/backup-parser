import {CTX, RuleCTX} from "./types";
import {Token} from "./lexer";

export abstract class RuleContext {
  parentCtx: RuleCTX;
  children: Array<CTX> | null;

  abstract accept(visitor): void;

  protected constructor(parent: RuleCTX) {
    this.parentCtx = parent;
    this.children = null;
  }

  getText() {
    if (this.getChildCount() === 0) {
      return "";
    } else {
      return this.children.map((child) => child.getText()).join("");
    }
  }

  getChildCount() {
    if (this.children === null) {
      return 0;
    } else {
      return this.children.length;
    }
  }

  addChild(child) {
    if (this.children === null) {
      this.children = [];
    }
    this.children.push(child);
    return child;
  }

  removeLastChild() {
    if (this.children !== null) {
      this.children.pop();
    }
  }
}

const return_helper = (res: Array<CTX>, i: number) => {
  if (i !== undefined) {
    return res[i] || null;
  }
  return res;
};

export class ObjContext extends RuleContext {
  ruleIndex: number;

  constructor(parent: RuleCTX) {
    super(parent);
    this.ruleIndex = 1;
  }

  // accept 接收一个 visitor，调用访问者具体的 visitXxx 方法
  accept(visitor) {
    if (visitor) {
      return visitor.visitObj(this);
    } else {
      return visitor.visitChildren(this);
    }
  }

  // 对于 ObjContext，允许有多个 STRING 词法单元
  pair(i: number) {
    return return_helper(
      this.children.filter((child) => child instanceof PairContext),
      i
    );
  }
}

export class PairContext extends RuleContext {
  ruleIndex: number;

  constructor(parent) {
    super(parent);
    this.ruleIndex = 4;
  }

  accept(visitor) {
    if (visitor) {
      return visitor.visitPair(this);
    } else {
      return visitor.visitChildren(this);
    }
  }

  STRING() {
    return return_helper(this.children, 0);
  }

  value() {
    return return_helper(this.children, 2);
  }
}

export class ArrContext extends RuleContext {
  ruleIndex: number;

  constructor(parent: RuleCTX) {
    super(parent);
    this.ruleIndex = 2;
  }

  accept(visitor) {
    if (visitor) {
      return visitor.visitArr(this);
    } else {
      return visitor.visitChildren(this);
    }
  }

  value(i: number) {
    return return_helper(
      this.children.filter((child) => child instanceof ValueContext),
      i
    );
  }
}

export class ValueContext extends RuleContext {
  ruleIndex: number;

  constructor(parent: RuleCTX) {
    super(parent);
    this.ruleIndex = 3;
  }

  accept(visitor) {
    if (visitor) {
      return visitor.visitValue(this);
    } else {
      return visitor.visitChildren(this);
    }
  }

  obj() {
    return this.children[0] instanceof ObjContext ? this.children[0] : null;
  }

  arr() {
    return this.children[0] instanceof ArrContext ? this.children[0] : null;
  }

  value() {
    return this.children[0] instanceof ValueContext ? this.children[0] : null;
  }

  // 对于 ValueContext，有且只允许有一个 STRING 词法单元
  STRING() {
    return this.children[0] instanceof TerminalNodeImpl &&
    this.children[0].symbol.type === 10
      ? this.children[0]
      : null;
  }

  NUMBER() {
    return this.children[0] instanceof TerminalNodeImpl &&
    this.children[0].symbol.type === 11
      ? this.children[0]
      : null;
  }
}

// 终端节点，不再有子节点
export class TerminalNodeImpl {
  symbol: Token;
  parentCtx: RuleContext;

  constructor(symbol: Token) {
    this.symbol = symbol;
  }

  getText() {
    return this.symbol.text;
  }
}
