import { PageTemplate } from "../../template/PageTemplate.js";

export class Page404 extends PageTemplate {
  constructor(req) {
    super(req);
    this.pageType = 'shortPage';
    this.asideVisible = false; // No aside for 404 page
  }
  main() {
    return `<h1>404 error</h1>
            <p> puslapis "${this.req.url}"  neegzistuoja</p>
            <img src="/img/404.jpg" width=20% alt="404 error image">
            <a href="/">back home</a>`;
  }
}