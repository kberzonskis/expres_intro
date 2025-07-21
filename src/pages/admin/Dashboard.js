import { PageTemplate } from "../../template/PageTemplate.js";

export class PageDashboard extends PageTemplate {  
constructor(req) {
    super(req);
    this.pageJS = 'main'
    this.asideVisible = false;
  }
  main() {
    
    return  `<h1>DASHBOARD!!!</h1>
    <img class="logo" src="/img/foto13.jpg" alt="logo" />`
                    


  }}