import { AdminTemplate } from "../../../template/AdminTemplate.js";
import {COOKIE_MAX_AGE} from "../../../env.js"
import { getAllProducts_SQL_edit } from "../../../db/get_Product_By_UrlSlug_TO_EDIT.js";


export class AllProductsEdit extends AdminTemplate {

constructor(req) {
super(req);

this.pageType = '';
this.asideVisible = false;
this.pageHeader ='';
this.pageJS= 'new-product'; 

}

    
async main() {

const edit_SQLdata = await getAllProducts_SQL_edit(this.req.params.urlSlug);

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
<main class="newProducts"> 
    <img class="logo1" src="/img/miniold.webp" alt="logo" />
    
   
    <p class="displays-1">Likęs sesijos laikas: ${minutes}:${seconds}</p>
    <div>
        </form>
        <h1>EDIT PRODUCT</h1>

        <form class="">
          
            <div class="title">
                <label for="title" class="title">Product-Title</label>
                <input value="${edit_SQLdata[0].title}"  id="title" required>
            </div>
            <div class="url">
                <label for="url" class="url">Url slug</label>
                <input value="${edit_SQLdata[0].url_slug}" id="url" required>
            </div>
            <div class="decription">
                <label for="description" class="decription">Product-Description</label>
                <textarea class="decription1" id="description" required>${edit_SQLdata[0].description}</textarea>
            </div>

            <button type="submit" class="button">Update</button>
            <button type="reset" class="button">Reset</button>
        </form>
    </div>

</main>`;

} }