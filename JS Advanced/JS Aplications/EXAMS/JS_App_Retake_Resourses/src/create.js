import { html } from "../node_modules/lit-html/lit-html.js";
import { createItem } from "./api/crud.js";

const createTemplate = (createFun) => html`
<h1>Create New Offer</h1>
<p class="message"></p>
<form @submit=${createFun}>
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
        <button>Create</button>
    </div>
</form>`

export function showCreate(context) {
    context.render(createTemplate(createFun));

    async function createFun(e) {
        e.preventDefault();

        let name = document.querySelector("input[placeholder='Name...']").value;
        let price = document.querySelector("input[placeholder='Price...']").value;
        let imageUrl = document.querySelector("input[placeholder='Image url...']").value;
        let description = document.querySelector("textarea[placeholder='Give us some description about this offer...']").value;
        let brand = document.querySelector("input[placeholder='Brand...']").value;
        let creator = sessionStorage.getItem("email");

        if (name == "" || price == "" || imageUrl == "" || description == "" || brand == "") {
            context.render(createTemplate(createFun));
            return;
        }

        await createItem({ name, price, imageUrl, description, brand, creator });
        document.querySelector("input[placeholder='Name...']").value = "";
        document.querySelector("input[placeholder='Price...']").value = "";
        document.querySelector("input[placeholder='Image url...']").value = "";
        document.querySelector("textarea[placeholder='Give us some description about this offer...']").value = "";
        document.querySelector("input[placeholder='Brand...']").value = "";
        context.page.redirect("/");
    }
}