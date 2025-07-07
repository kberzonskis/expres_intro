import { PageTemplate } from "../template/PageTemplate.js";

export class PageHome extends PageTemplate {  
constructor(req) {
    super(req);
    this.pageJS = 'main'
    this.asideVisible = false;
  }
  main() { return  `<h1><i class="fa fa-home"></i>HOME PAGE</h1>`
                    


  }}