import { html } from "../node_modules/lit-html/lit-html.js"
import { getItemsDetails, deleteItem } from "./api/crud.js"

const detailsTemplate = (data, deleteMeme) => html`
<section id="meme-details">
<h1>Meme Title: ${data.title}</h1>
<div class="meme-details">
    <div class="meme-img">
        <img alt="meme-alt" src="${data.imageUrl}">
    </div>
    <div class="meme-description">
        <h2>Meme Description</h2>
        <p>
            ${data.description}
        </p>

        ${sessionStorage.getItem("personId") == data._ownerId ? html`
        <a class="button warning" href="/edit/${data._id}">Edit</a>
        <button @click=${deleteMeme} class="button danger">Delete</button>`: 
        ""}
    </div>
</div>
</section>`

export async function showDetails(context) {
    let detailsId = context.params.id;

    let data = await getItemsDetails(detailsId);
    context.render(detailsTemplate(data, deleteMeme));

    async function deleteMeme(){
        let conf = confirm("Are you sure to delete this meme?");

        if(conf){
            await deleteItem(data._id);
            context.page.redirect("/all-memes");
        }
    }
}