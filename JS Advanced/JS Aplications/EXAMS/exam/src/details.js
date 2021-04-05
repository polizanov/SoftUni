import { html } from "../node_modules/lit-html/lit-html.js"
import { getItemsDetails, deleteItem } from "./api/crud.js"

const detailsTemplate = (data, deleteFunc) => html`
<!-- Details -->
<section id="details-page" class="content details">
    <h1>${data.title}</h1>

    <div class="details-content">
        <strong>Published in category ${data.category}</strong>
        <p>${data.content}</p>

        <div class="buttons">
            ${sessionStorage.getItem("personId") == data._ownerId ? html`
            <a @click=${deleteFunc} href="javascript:void(0)" class="btn delete">Delete</a>
            <a href="/edit/${data._id}" class="btn edit">Edit</a>
            <a href="/" class="btn edit">Back</a>
            ` : html`
            <a href="/" class="btn edit">Back</a>
            `}


        </div>
    </div>
</section>`

export async function showDetails(context) {
    let categoryId = context.params.id;
    let data = await getItemsDetails(categoryId);
    context.render(detailsTemplate(data, deleteFunc));

    async function deleteFunc(e){
        e.preventDefault();
        let conf = confirm("Are you sure to delete?");

        if(conf){
            await deleteItem(categoryId);
            context.page.redirect("/");
        }
    }
}