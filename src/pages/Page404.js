import { PageTemplate } from "../template/PageTemplate.js";
export class Page404 extends PageTemplate {
  main() {
    return `<h1>404 error</h1>
            <p>Šis puslapis neegzistuoja</p>
            <a href="/">back home</a>`;
  }
}