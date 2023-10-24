import JSONVisitor from "./JSONVisitor";
import {
  ArrContext,
  ObjContext,
  PairContext,
  ProgContext,
  ValueContext,
} from "./JSONParser";

export class Visitor extends JSONVisitor<Record<string, any>> {
  visitProg = (ctx: ProgContext) => {
    return this.visitValue(ctx.value());
  };

  visitValue = (ctx: ValueContext) => {
    if (ctx.obj()) {
      return this.visitObj(ctx.obj());
    } else if (ctx.arr()) {
      return this.visitArr(ctx.arr());
    } else if (ctx.STRING()) {
      return ctx
        .STRING()
        .getText()
        .replace(/^"(.*)"$/, "$1");
    } else if (ctx.NUMBER()) {
      return parseFloat(ctx.NUMBER().getText());
    } else if (ctx.getText() === "true") {
      return true;
    } else if (ctx.getText() === "false") {
      return false;
    } else if (ctx.getText() === "null") {
      return null;
    }
  };

  visitPair = (ctx: PairContext) => {
    const key: string = ctx
      .STRING()
      .getText()
      .replace(/^"(.*)"$/, "$1");
    const value = this.visitValue(ctx.value());
    return [key, value];
  };

  visitObj = (ctx: ObjContext) => {
    const obj = {};
    for (let i = 0; i < ctx.pair_list().length; i++) {
      const [key, value] = this.visitPair(ctx.pair(i));
      obj[key as string] = value;
    }
    return obj;
  };

  visitArr = (ctx: ArrContext) => {
    const arr = [];
    for (let i = 0; i < ctx.value_list().length; i++) {
      arr.push(this.visitValue(ctx.value(i)));
    }
    return arr;
  };
}
