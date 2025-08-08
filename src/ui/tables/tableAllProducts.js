export function AllProductsFor(SQL_data) {
let HTML = '';
let nr = 1;

for (const Products of SQL_data)

{
HTML += `

<tr>
    <td>${nr++}</td>
    <td>${Products.title}</td>
    <td>${Products.url_slug}</td>
    <td>${Products.description}</td>
    <td>
        <a class="bg-blue1" href="/admin/products/${Products.url_slug}/edit">Edit</a>
        <button class="bg-red1" data-url="${Products.url_slug}">Delete</button>
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

    `
    }