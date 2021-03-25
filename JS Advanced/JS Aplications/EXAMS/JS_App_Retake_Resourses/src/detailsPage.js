import { html } from "../node_modules/lit-html/lit-html.js";
import { getItemsDetails, deleteItem } from "./api/crud.js";

const detailsTemplate = (data, isOwner, deleteOrder) => html`
<div class="offer-details">
    <h1>${data.brand} ${data.name}</h1>
    <div class="info">
        <img src="${data.imageUrl}"
            alt="">
        <div class="description">${data.description}
            <br>
            <br>
            <p class="price">$${data.price}</p>
        </div>
    </div>
    ${isOwner ? html`
    <div class="actions">
        <a href="/edit/${data._id}">Edit</a>
        <a @click=${deleteOrder}>Delete</a>
    </div>` : ""}
</div>`

export async function showDeatails(context) {
    let orderId = context.params.id;

    let data = await getItemsDetails(orderId);
    let ownerId = data._ownerId
    console.log(ownerId, " ", sessionStorage.getItem("personId"))
    

    context.render(detailsTemplate(data, ownerId == sessionStorage.getItem("personId"), deleteOrder))

    async function deleteOrder(e){
        e.preventDefault();
        let conf = confirm('Are you sure to delete!');

        if(conf){
            await deleteItem(data._id);
            context.page.redirect("/");
        }
    }
}