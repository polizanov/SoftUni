import { html } from "../node_modules/lit-html/lit-html.js";
import { getFurnitureDetails, deleteFurniture} from "./api/crud.js"


const htmlTemplate = (data, acsses, removeFurniture) => html`
<div class="row space-top">
    <div class="col-md-12">
        <h1>Furniture Details</h1>
    </div>
</div>
<div class="row space-top">
    <div class="col-md-4">
        <div class="card text-white bg-primary">
            <div class="card-body">
                <img src="${data.img}" />
            </div>
        </div>
    </div>
    <div class="col-md-4">
        <p>Make: <span>${data.make}</span></p>
        <p>Model: <span>${data.model}</span></p>
        <p>Year: <span>${data.year}</span></p>
        <p>Description: <span>${data.description}</span></p>
        <p>Price: <span>${data.price}</span></p>
        <p>Material: <span>${data.material}</span></p>
        ${acsses ? html`
        <div>
            <a href="/edit/${data._id}" class="btn btn-info">Edit</a>
            <a @click=${removeFurniture} href="javascript:void(0)" class="btn btn-red">Delete</a>
        </div>`: ""}
    </div>
</div>`

export async function showDetails(context) {
    let id = context.params.id;
    let data = await getFurnitureDetails(id)

    let userId = sessionStorage.getItem("personId");
    let productUserId = data._ownerId

    context.render(htmlTemplate(data, userId == productUserId, removeFurniture));

    async function removeFurniture(){
        let conf = confirm("Are you sure to delete!")
        if(conf){
            await deleteFurniture(data._id);
            context.page.redirect("/");
        }
    }
}
