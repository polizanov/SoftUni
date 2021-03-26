import { html } from "../node_modules/lit-html/lit-html.js";

const homeTemplate = html`
<img class="m-auto background-image" width="100%"
    src="https://m.investor.bg/images/photos/0293/0000293507-article3.jpg">`

export function showHome(context) {
    context.render(homeTemplate);
}