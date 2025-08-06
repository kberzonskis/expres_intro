import { AdminTemplate } from "../../../template/AdminTemplate.js";
import {COOKIE_MAX_AGE} from "../../../env.js"
import { AllsProducts } from "../../../ui/tables/tableAllProducts.js";



export class AllProducts extends AdminTemplate {
    
    
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
 <main>
<p class="display-6">Likęs sesijos laikas: ${minutes}:${seconds}</p>

${AllsProducts()}

</main>`;
}




}







/*
export function tableProducts() {
    let HTML = '';
    let nr = 1;

    for (const category of data) {
        HTML += `
            <tr>
                <th scope="row">${nr++}</th>
                <td><a href="/admin/categories/${category.url_slug}">${category.title}</a></td>
                <td>${category.url_slug}</td>
                <td>${category.description}</td>
                <td>${category.moviesCount}</td>
                <td>${category.statusName === 'published'
                ? '<span class="badge text-bg-success">Published</span>'
                : '<span class="badge text-bg-warning">Draft</span>'}</td>
                <td class="d-flex gap-3">
                    <a class="btn btn-primary btn-sm" href="/admin/categories/${category.url_slug}/edit">Edit</a>
                    <button data-url="${category.url_slug}" class="btn btn-danger btn-sm">Delete</button>
                </td>
            </tr>`;
    }

    return ` <div class="table-responsive">
            <table class="table table-striped">
                <thead>
                    <tr>
                        
                        <th scope="col">Title</th>
                        <th scope="col">Url</th>
                        <th scope="col">Description</th>
                    
                    </tr>
                </thead>
                <tbody>${HTML}</tbody>
            </table>
        </div>
       `;
}


*/