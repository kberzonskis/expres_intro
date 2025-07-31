import { AdminTemplate } from "../../../template/AdminTemplate.js";
import {COOKIE_MAX_AGE} from "../../../env.js"



export class AllProducts extends AdminTemplate {
    
    
    constructor(req) {
        super(req);

this.pageType = '';
this.asideVisible = false;
this.pageHeader ='';
       
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
}
        return `
            <main>
<a href="/admin">Dasboard</a>
<p class="display-6">Likęs sesijos laikas: ${minutes}:${seconds}</p>
<table class="redTable">
  <thead>
    <tr>
      <th>Product-Title</th>
      <th>Url slug</th>
      <th>Product-Description</th>
      <th>Action</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>cell1_1</td>
      <td>cell2_1</td>
      <td>cell3_1</td>
      <td class="">
              <button class="bg-blue1">Edit</button>
              <button class="bg-red1">Delete</button>
            </td>
      
    </tr>
    <tr>
      <td>cell1_2</td>
      <td>cell2_2</td>
      <td>cell3_2</td>
      <td class="relative p-2 md:p-4 flex justify-center space-x-2">
              <button class="bg-blue1">Edit</button>
              <button class="bg-red1">Delete</button>
            </td>
      

    
  </tbody>
 
</table>
                     
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