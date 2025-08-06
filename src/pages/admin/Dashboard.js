import { AdminTemplate} from "../../template/AdminTemplate.js";
import { COOKIE_MAX_AGE } from "../../env.js";
import { loginForm } from "../../ui/forms/loginForm.js";
import { NewProducts } from "./products/NewProducts.js";

export class PageDashboard extends AdminTemplate {

constructor(req) {
super(req);

this.pageType = '';
this.asideVisible = false;
this.pageHeader ='';

}

main() {
if (!this.req.user.isLoggedIn) {

return `
<p>403- reikia prisijungti</p>
<a href="/register">Register</a>
<a href="/login">Login</a>
<a href="/">back home</a>
`
}

const cookie = this.req.user.login_token_created_at.getTime();
const secondsLeft = Math.floor(COOKIE_MAX_AGE - (Date.now() - cookie) / 1000);
const seconds = secondsLeft % 60;
const minutes = (secondsLeft - seconds) / 60;

return `

<h1>WLCOME TO DASHBOARD!!!</h1>
<img class="logo1" src="/img/foto13.jpg" alt="logo" />
<p class="dash1">USERNAME : ${this.req.user.username}</p>
<p class="displays-1">Likęs sesijos laikas: ${minutes}:${seconds}</p>

<div class="products">

  <h1 class=""><span>Products</span></h1>

  <ul class="nav nav-pills flex-column">

    <li class="nav-item">
      <a class="" aria-current="page" href="/admin/newproducts/">
        New Product
      </a>
    </li>
    <li class="nav-item">
      <a class="" aria-current="page" href="/admin/products">
        All Products
      </a>

    </li>

</div>`

}}