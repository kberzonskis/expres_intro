import { PageTemplate } from "../../template/PageTemplate.js";          

export class PageServices extends PageTemplate {
  constructor(req) {
    super(req);
    this.pageJS = 'main'
  }
  main() { return  `<h1>SERVICES PAGE</h1>
                   <a href="/">back home</a>`
  }
}