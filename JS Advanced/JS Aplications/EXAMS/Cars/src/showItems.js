import { html } from "../node_modules/lit-html/lit-html.js"
import { getAllItems } from "./api/crud.js";

const allListingsTemplate = (data) => html`
<section id="car-listings">
    <h1>Car Listings</h1>
    <div class="listings">
        ${data.length > 0 ? data.map(curCarTemplate) : html`
        <p class="no-cars">No cars in database.</p>
        `}
    </div>
</section>`

const curCarTemplate = (e) => html`
<div class="listing">
    <div class="preview">
        <img src="${e.imageUrl}">
    </div>
    <h2>${e.brand} ${e.model}</h2>
    <div class="info">
        <div class="data-info">
            <h3>Year: ${e.year}</h3>
            <h3>Price: ${e.price} $</h3>
        </div>
        <div class="data-buttons">
            <a href="/details/${e._id}" class="button-carDetails">Details</a>
        </div>
    </div>
</div>`


export async function showItems(context) {
    let data = await getAllItems();
    context.render(allListingsTemplate(data))
}