import { AdminTemplate } from "../../../template/AdminTemplate.js";
import {COOKIE_MAX_AGE} from "../../../env.js"


export class NewProducts extends AdminTemplate {

constructor(req) {
super(req);

this.pageType = '';
this.asideVisible = false;
this.pageHeader ='';
this.pageJS= 'new-product'; 

}

main() {

const cookie = this.req.user.login_token_created_at.getTime();
const secondsLeft = Math.floor(COOKIE_MAX_AGE - (Date.now() - cookie) / 1000);
const seconds = secondsLeft % 60;
const minutes = (secondsLeft - seconds) / 60;

if (!this.req.user.isLoggedIn) {

return `
<p>403- reikia prisijungti</p>
<a href="/">back home</a>
<a href="/register">Register</a>
<a href="/login">Login</a>
`
}return `
<main>
    <a href="/admin">Dasboard</a <p class="display-6">Likęs sesijos laikas: ${minutes}:${seconds}</p>

    <div>
        </form>
        <h1>NEW PRODUCT</h1>

        <form class="">
          
            <div class="title">
                <label for="title" class="title">Product-Title</label>
                <input type="text" class="" id="title" required>
            </div>
            <div class="url">
                <label for="url" class="url">Url slug</label>
                <input type="text" class="" id="url" required>
            </div>
            <div class="decription">
                <label for="description" class="decription">Product-Description</label>
                <textarea class="decription1" id="description"></required>
            </div>

            <button type="submit" class="button">Create</button>
        </form>
    </div>

</main>`;
}
}