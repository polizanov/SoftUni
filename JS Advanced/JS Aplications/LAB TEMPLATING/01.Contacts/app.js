import { html, render } from "../node_modules/lit-html/lit-html.js";
import { contacts } from "./contacts.js"

const contactTemplate = (data) => html`
<div class="contact card">
    <div>
        <i class="far fa-user-circle gravatar"></i>
    </div>
    <div class="info">
        <h2>Name: ${data.name}</h2>
        <button class="detailsBtn">Details</button>
        <div class="details" id="2" style="display: none;">
            <p>Phone number: ${data.phoneNumber}</p>
            <p>Email: ${data.email}</p>
        </div>
    </div>
</div>`

render(contacts.map(contactTemplate), document.querySelector("#contacts"));
showDetails()

function showDetails() {
    document.querySelector("body")
        .addEventListener("click", (e) => {
            if(e.target.tagName == "BUTTON" && e.target.className == "detailsBtn"){
                let curDiv = e.target.parentElement.querySelector(".details");
                showOrHide(curDiv)
            }
        })

    function showOrHide(element){
        if(element.style.display == "block"){
            element.style.display = "none";
        } else {
            element.style.display = "block";
        }
    }
}