import { html } from "../node_modules/lit-html/lit-html.js";
import { getAllItems } from "./api/crud.js"

const allSongsTemplate = (data) => html`
<div class="background-spotify">
    <div class="song-container">
        <h1>All Songs</h1>
        <a href="/add-song">
            <button type="button" class="btn-lg btn-block new-song-btn">Add a new song</button>
        </a>
        ${data.map(currentSongTemplate)}
    </div>
</div>`

const currentSongTemplate = (e) => html`
<div class="song">
    <h5>Title: ${e.title}</h5>
    <h5>Artist: ${e.artist}</h5>
    <img class="cover" src="${e.image}" />
    ${e._ownerId == sessionStorage.getItem("personId") ? html`
    <p>Likes: 1234; Listened 5000 times</p>
    <a href="#"><button id="${e._id}" type="button" class="btn btn-danger mt-4">Remove</button></a>
    <a href="#"><button type="button" class="btn btn-success mt-4">Listen</button></a>
    ` : html`
    <p>Likes: 1234</p>
    <a href="#"><button type="button" class="btn btn-primary mt-4">Like</button></a>
    `}
</div>`

export async function allSongs(context) {
    let data = await getAllItems();
    let myId = sessionStorage.getItem("personId")
    let mySongs = data.filter(x => x._ownerId == myId);
    let anotherSongs = data.filter(x => x._ownerId !== myId);
    let sortedSongs = [...mySongs, ...anotherSongs]
    context.render(allSongsTemplate(sortedSongs));
}