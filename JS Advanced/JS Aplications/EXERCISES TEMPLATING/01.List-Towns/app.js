import { html, render } from "../node_modules/lit-html/lit-html.js";

attachEvent()

function attachEvent() {
    document.querySelector("#btnLoadTowns")
        .addEventListener("click", (e) => {
            e.preventDefault();
            let inputValue = document.querySelector("#towns").value

            let arr = inputValue.split(", ");

            if (inputValue.length == 0) {
                alert("Input field are empty");
                return;
            }

           
            const renderTemplate = (arr) => html`<ul>${arr.map(nestedTemplate)}</ul>`
            const nestedTemplate = (e) =>  html`<li>${e}</li>`
            render(renderTemplate(arr), document.querySelector("#root"));
        })
}