import { UrlContext } from "./URLParser";
import URLVisitor from "./URLVisitor";

export class Visitor extends URLVisitor<string> {
  visitUrl = (ctx: UrlContext) => {
    console.log("scheme:", ctx.scheme().getText());
    console.log("host:", ctx.host().getText());
    console.log("port:", ctx.port().getText());
    console.log("path:", ctx.path().getText());
    console.log("query:", ctx.query().getText());
    console.log("frag:", ctx.frag().getText());
    return ctx.getText();
  };
}
