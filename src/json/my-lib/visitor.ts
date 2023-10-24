export class Visitor {
  visitValue = (ctx) => {
    if (ctx.obj()) {
      return this.visitObj(ctx.obj());
    } else if (ctx.arr()) {
      return this.visitArr(ctx.arr());
    } else if (ctx.STRING()) {
      return ctx.STRING().getText();
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

  visitPair = (ctx) => {
    const key = ctx.STRING().getText();
    const value = this.visitValue(ctx.value());
    return [key, value];
  };

  visitObj = (ctx) => {
    const obj = {};
    for (let i = 0; i < ctx.pair().length; i++) {
      const [key, value] = this.visitPair(ctx.pair(i));
      obj[key] = value;
    }
    return obj;
  };

  visitArr = (ctx) => {
    const arr = [];
    for (let i = 0; i < ctx.value().length; i++) {
      arr.push(this.visitValue(ctx.value(i)));
    }
    return arr;
  };
}
