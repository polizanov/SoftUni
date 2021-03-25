import { html } from "../node_modules/lit-html/lit-html.js";
import { updateItem, getItemsDetails } from "./api/crud.js";

const editTemplate = (editFunc) => html`
<h1>Edit Offer</h1>
<p class="message"></p>
<form>
    <div>
        <input type="text" placeholder="Name...">
    </div>
    <div>
        <input type="text" placeholder="Price...">
    </div>
    <div>
        <input type="text" placeholder="Image url...">
    </div>
    <div>
        <textarea placeholder="Give us some description about this offer..."></textarea>
    </div>
    <div>
        <input type="text" placeholder="Brand...">
    </div>
    <div>
        <button @click =${editFunc}>Edit</button>
    </div>
</form>`

export async function showEdit(context) {
    let orderId = context.params.id;
    let data = await getItemsDetails(orderId);
    context.render(editTemplate(editFunc));

    document.querySelector("input[placeholder='Name...']").value = data.name;
    document.querySelector("input[placeholder='Price...']").value = data.price;
    document.querySelector("input[placeholder='Image url...']").value = data.imageUrl;
    document.querySelector("textarea[placeholder='Give us some description about this offer...']").value = data.description;
    document.querySelector("input[placeholder='Brand...']").value = data.brand;

    async function editFunc(e) {
        e.preventDefault();

        let name = document.querySelector("input[placeholder='Name...']").value;
        let price = document.querySelector("input[placeholder='Price...']").value;
        let imageUrl = document.querySelector("input[placeholder='Image url...']").value;
        let description = document.querySelector("textarea[placeholder='Give us some description about this offer...']").value;
        let brand = document.querySelector("input[placeholder='Brand...']").value;
        let creator = sessionStorage.getItem("email");

        if (name == "" || price == "" || imageUrl == "" || description == "" || brand == "") {
            context.render(editTemplate(editFunc));
            return;
        }

        await updateItem(orderId, { name, price, imageUrl, description, brand, creator });
        console.log(name, price, imageUrl, description, brand, creator)
        document.querySelector("input[placeholder='Name...']").value = "";
        document.querySelector("input[placeholder='Price...']").value = "";
        document.querySelector("input[placeholder='Image url...']").value = "";
        document.querySelector("textarea[placeholder='Give us some description about this offer...']").value = "";
        document.querySelector("input[placeholder='Brand...']").value = "";
        context.page.redirect("/");
    }
}