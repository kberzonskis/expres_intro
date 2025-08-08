import { AdminTemplate } from "../../../template/AdminTemplate.js";
import {COOKIE_MAX_AGE} from "../../../env.js"
import { AllProductsFor } from "../../../ui/tables/tableAllProducts.js";
import {getAllProductsSQL} from "../../../db/getAllProducts.js";

export class AllProducts extends AdminTemplate {

constructor(req) {
super(req);

this.pageType = '';
this.asideVisible = false;
this.pageHeader ='';
this.pageJS = 'delite-product'

}

async main() {
 const SQL_data = await getAllProductsSQL()

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
<main>
    <p class="display-6">Likęs sesijos laikas: ${minutes}:${seconds}</p>

    ${AllProductsFor(SQL_data)}

</main>`;
}

}