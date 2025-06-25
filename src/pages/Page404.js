import { PageTemplate } from "../template/PageTemplate.js";
export class Page404 extends PageTemplate {
  constructor() {
    super();
    this.pageType = 'shortPage';
    this.asideVisible = false; // No aside for 404 page
  }
  main() {
    return `<h1>404 error</h1>
            <p>Šis puslapis neegzistuoja</p>
            <a href="/">back home</a>`;
  }
}