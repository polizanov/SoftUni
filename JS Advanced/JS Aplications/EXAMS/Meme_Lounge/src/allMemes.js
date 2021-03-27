import { html } from "../node_modules/lit-html/lit-html.js"
import { getAllItems } from "./api/crud.js"

const allMemesTemplate = (data) => html`
<section id="meme-feed">
<h1>All Memes</h1>
<div id="memes">
    ${data.length == 0 ? html`
    <p class="no-memes">No memes in database.</p>` : data.map(currentMeme)}
</div>`

const currentMeme = (e) => html`
<div class="meme">
    <div class="card">
        <div class="info">
            <p class="meme-title">${e.title}</p>
            <img class="meme-image" alt="meme-img" src="${e.imageUrl}">
        </div>
        <div id="data-buttons">
            <a class="button" href="/details/${e._id}">Details</a>
        </div>
    </div>
</div>
</section>`

export async function showAllMemes(context) {
    let data = await getAllItems();
    context.render(allMemesTemplate(data));
}