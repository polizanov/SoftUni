import { html, render } from "../node_modules/lit-html/lit-html.js";
import { cats } from "./catSeeder.js"

let allArticles = document.querySelector("#allCats")

const template = (catData) => html`
<ul>
    ${catData.map(nestedTemplate)}
</ul>`

const nestedTemplate = (e) =>  html`
<li>
    <img src="./images/${e.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
    <div class="info">
        <button class="showBtn">Show status code</button>
        <div class="status" style="display: none" id="${e.id}">
            <h4>Status Code: ${e.statusCode}</h4>
            <p>${e.statusMessage}</p>
        </div>
    </div>
</li>`

render(template(Object.values(cats)), allArticles);
attachEvent();


function attachEvent(){
    allArticles.addEventListener("click", (e) => {
        if(e.target.tagName == "BUTTON" && e.target.className == "showBtn"){
            showOrHide(e);
        }
    })

    function showOrHide(e){
        let divElemnt = e.target.parentElement.querySelector(".status")
        if(e.target.textContent == "Show status code"){
            e.target.textContent = "Hide status code"
            divElemnt.style.display = "block";
        } else {
            e.target.textContent = "Show status code"
            divElemnt.style.display = "none";
        }
    }
}
