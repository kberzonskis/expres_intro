import { AllProductsData } from "./AllProductsData.js"
export function AllsProducts()  {
    let HTML = '';
    let nr = 1;

 
 for (const AProducts of AllProductsData) 
    
    {
        HTML += `

  <tr>
    <td>${nr++}</td>
    <td>${AProducts.title}</td>
    <td>${AProducts.url_slug}</td>
    <td>${AProducts.description}</td>
<td>
      <a class="bg-blue1" href="/admin/products/${AProducts.url_slug}/edit">Edit</a>
      <button class="bg-red1" data-url="${AProducts.url_slug}">Delete</button>
  </td>
`
    }
return `

<table class="redTable">
<thead>
  <tr>
    <th>#</th>
    <th>Product-Title</th>
    <th>Url slug</th>
    <th>Product-Description</th>
    <th>Action</th>
  </tr>
</thead>
<tbody>${HTML}</tbody>
</table>

 `}
    
    ;

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

    return `
        <div class="table-responsive">
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
        </div>`;
} */
