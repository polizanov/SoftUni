import { html } from "../node_modules/lit-html/lit-html.js"
import { getItemsDetails, deleteItem } from "./api/crud.js";

const detailsTemplate = (data, deleteCar) => html`
<section id="listing-details">
    <h1>Details</h1>
    <div class="details-info">
        <img src="${data.imageUrl}">
        <hr>
        <ul class="listing-props">
            <li><span>Brand:</span>${data.brand}</li>
            <li><span>Model:</span>${data.model}</li>
            <li><span>Year:</span>${data.year}</li>
            <li><span>Price:</span>${data.price}$</li>
        </ul>

        <p class="description-para">${data.description}</p>
        ${sessionStorage.getItem("personId") == data._ownerId ? html`
        <div class="listings-buttons">
            <a href="/edit/${data._id}" class="button-list">Edit</a>
            <a @click=${deleteCar} href="javascript:void(0)" class="button-list">Delete</a>
        </div>
        ` : ""}

    </div>
</section>`

export async function showDetails(context) {
    let carId = context.params.id;
    let data = await getItemsDetails(carId);
    context.render(detailsTemplate(data, deleteCar));

    async function deleteCar(e){
        e.preventDefault();
        
        let conf = confirm("Are you sure to delete this car?");

        if(conf){
            await deleteItem(carId);
            context.page.redirect("/all-listings");

        }
    }
}