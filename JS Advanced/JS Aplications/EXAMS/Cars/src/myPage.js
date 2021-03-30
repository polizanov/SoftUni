import { html } from "../node_modules/lit-html/lit-html.js"
import { getMyItems } from "./api/crud.js";

const myCarsTemplate = (data) => html`
<section id="my-listings">
    <h1>My car listings</h1>
    <div class="listings">
        ${data.length > 0 ? data.map(curCarTemplate) : html`
        <p class="no-cars"> You haven't listed any cars yet.</p>
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

export async function showMyPage(context) {
    let data = await getMyItems();
    context.render(myCarsTemplate(data));
}