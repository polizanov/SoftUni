import { html } from "../node_modules/lit-html/lit-html.js";
import { getAllItems } from "./api/crud.js"

const guestTemplate = html`
<div class="container">
    <div class="about-us">
        <div>
            <img src="../public/shoes.jpg" alt="">
            <img src="../public/shoes2.jpg" alt="">
        </div>
        <p>
            <a href="/register">Register Now</a> and Try it!
        </p>
    </div>
</div>`

const userTemplate = (data) => html`
<div class="shoes">
    ${ data.length > 0 ? data.map(shoeTemplate) : 
        html`<p>No shoes to display. Be first to create a new offer...</p>`}
</div>`

const shoeTemplate = (e) => html`
<div class="shoe">
    <img src="${e.imageUrl}">
    <h3>${e.name}</h3>
    <a href="/details/${e._id}" >Buy it for $${e.price}</a>
</div>`


export async function showHome(context) {
    let token = sessionStorage.getItem("token");

    if (token == null) {
        context.render(guestTemplate)
    } else {
        let data = await getAllItems();
        context.render(userTemplate(data))
    }
}