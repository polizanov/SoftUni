import { html } from "../node_modules/lit-html/lit-html.js";
import { createItem } from "./api/crud.js"

const crreateTemplate = (createFunc) => html`
<div class="background-spotify">
    <div class="song-container">
        <h1>Create new song</h1>
        <form @submit=${createFunc}>
            <div class="form-group">
                <label for="title" class="white-labels">Title</label>
                <input id="title" type="text" name="title" class="form-control" placeholder="Title">
            </div>
            <div class="form-group">
                <label for="artist" class="white-labels">Artist</label>
                <input id="artist" type="text" name="artist" class="form-control" placeholder="Artist">
            </div>
            <div class="form-group">
                <label for="imageURL" class="white-labels">imageURL</label>
                <input id="imageURL" type="text" name="imageURL" class="form-control" placeholder="imageURL">
            </div>
            <button type="submit" class="btn btn-primary">Create</button>
        </form>
    </div>
`

export function showAddSong(context) {
    context.render(crreateTemplate(createFunc))

    async function createFunc(e) {
        e.preventDefault();

        let title = document.querySelector("#title").value;
        let artist = document.querySelector("#artist").value;
        let image = document.querySelector("#imageURL").value;

        if (title.length < 6) {
            alert("The title should be at least 6 characters long");
            return;
        }

        if (artist.length < 3) {
            alert("The artist should be at least 3 characters long");
            return;
        }

        if (!image.startsWith("http://") && !image.startsWith("https://")) {
            alert('The image should start with "http://" or "https://"');
            return;
        }

        await createItem({ title, artist, image });
        document.querySelector("#title").value = "";
        document.querySelector("#artist").value = "";
        document.querySelector("#imageURL").value = "";
        context.page.redirect("/all-songs");

    }
}