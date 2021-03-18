import { html } from "../node_modules/lit-html/lit-html.js";
import {getMyFurniture} from "./api/crud.js"

const htmlTemplate = (data) => html`
<div class="row space-top">
    <div class="col-md-12">
        <h1>My Furniture</h1>
        <p>This is a list of your publications.</p>
    </div>
</div>
${data.map(nestedTemplate)}
</div>`

const nestedTemplate = (e) => html`
<div class="row space-top">
    <div class="col-md-4">
        <div class="card text-white bg-primary">
            <div class="card-body">
                <img src="${e.img}" />
                <p>${e.description}</p>
                <footer>
                    <p>Price: <span>${e.price}</span></p>
                </footer>
                <div>
                    <a href="/details/${e._id}" class="btn btn-info">Details</a>
                </div>
            </div>
        </div>
    </div>
`

export async function showMyFurniture(context) {
    let data  = await getMyFurniture();
    console.log(data)
    context.render(htmlTemplate(data));
}