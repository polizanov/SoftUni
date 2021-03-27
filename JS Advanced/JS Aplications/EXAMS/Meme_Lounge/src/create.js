import { html } from "../node_modules/lit-html/lit-html.js"
import { createItem } from "./api/crud.js"

const createTemplate = (createFunc) => html`
<section id="create-meme">
<form @submit=${createFunc} id="create-form">
    <div class="container">
        <h1>Create Meme</h1>
        <label for="title">Title</label>
        <input id="title" type="text" placeholder="Enter Title" name="title">
        <label for="description">Description</label>
        <textarea id="description" placeholder="Enter Description" name="description"></textarea>
        <label for="imageUrl">Meme Image</label>
        <input id="imageUrl" type="text" placeholder="Enter meme ImageUrl" name="imageUrl">
        <input type="submit" class="registerbtn button" value="Create Meme">
    </div>
</form>
</section>`

export function showCreate(context) {
    context.render(createTemplate(createFunc));

    async function createFunc(e){
        e.preventDefault();
        
        let title = document.getElementById("title").value;
        let description = document.getElementById("description").value;
        let imageUrl = document.getElementById("imageUrl").value;

        if(title == "" || description == "" || imageUrl == ""){
            alert("All fields are required!");
            return;
        }

        await createItem({title, description, imageUrl});
        document.getElementById("title").value = "";
        document.getElementById("description").value = "";
        document.getElementById("imageUrl").value = "";
        context.page.redirect("/all-memes");
    }
}