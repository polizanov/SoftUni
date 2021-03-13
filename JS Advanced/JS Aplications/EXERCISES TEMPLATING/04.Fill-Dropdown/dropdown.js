import { html, render } from "../node_modules/lit-html/lit-html.js"

window.addEventListener("load", getItems());
addItem();


function addItem() {
    document.querySelector("article form")
        .addEventListener("submit", (e) => {
            e.preventDefault()

            let text = document.querySelector("#itemText").value;
            sentData(text);
            document.querySelector("#itemText").value = "";
        })

}

async function getItems() {
    let request = await fetch("http://localhost:3030/jsonstore/advanced/dropdown");

    if (request.ok) {
        let data = await request.json();
        console.log(data)
        let result = Object
            .values(data)
            .map(e => html`<option value="${e._id}">${e.text}</option>`);

        render(result, document.querySelector("#menu"));
        return;
    }

    alert(request.statusText);
}

async function sentData(text) {
    let request = await fetch("http://localhost:3030/jsonstore/advanced/dropdown", {
        method: 'post',
        headers: { "Content-Type": "applicatioin/json" },
        body: JSON.stringify({ text })
    })

    if (request.ok) {
        getItems();
        return;
    }

    alert(request.statusText);
}