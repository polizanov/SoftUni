import { html } from "../node_modules/lit-html/lit-html.js";
import { getAllFurniture } from "./api/crud.js"

const nestedTemplate = (e) => html`
<div class="row space-top">
    <div class="col-md-4">
        <div class="card text-white bg-primary">
            <div class="card-body">
                <img src="${e.img}" />
                <p>${e.desciption}</p>
                <footer>
                    <p>Price: <span>${e.price}</span></p>
                </footer>
                <div>
                    <a href="/details/${e._id}" class="btn btn-info">Details</a>
                </div>
            </div>
        </div>
    </div>
</div>
`

const dashboardTemplate = (data) => html`
<div class="row space-top">
    <div class="col-md-12">
        <h1>Welcome to Furniture System</h1>
        <p>Select furniture from the catalog to view details.</p>
    </div>
</div>
${data.map(nestedTemplate)}`

export async function showDashboard(context) {
    let data = await getAllFurniture();
    context.render(dashboardTemplate(data));
}