import { html } from "../node_modules/lit-html/lit-html.js";
import { getMyItems } from "./api/crud.js"

const mySongsTemplate = (data) => html`
<div class="background-spotify">
    <div class="song-container">
        <h1>My Songs</h1>
        ${data.map(currentSong)}
    </div>
</div>`

const currentSong = (e) => html`
<div class="song">
    <h5>Title: ${e.title}</h5>
    <h5>Artist: ${e.artist}</h5>
    <img class="cover" src="${e.image}" />
    <p>Likes: 1234; Listened 5000 times</p>
    <a href="#"><button id="${e._id}" type="button" class="btn btn-danger mt-4">Remove</button></a>
    <a href="#"><button type="button" class="btn btn-success mt-4">Listen</button></a>
</div>`

export async function showMySongs(context) {
    let data = await getMyItems(sessionStorage.getItem("personId"));
    context.render(mySongsTemplate(data));
}