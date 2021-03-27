import { html } from "../node_modules/lit-html/lit-html.js"
import { updateItem, getItemsDetails } from "./api/crud.js"

const editTemplate = (editFnc) => html`
 <section id="edit-meme">
<form @submit=${editFnc} id="edit-form">
    <h1>Edit Meme</h1>
    <div class="container">
        <label for="title">Title</label>
        <input id="title" type="text" placeholder="Enter Title" name="title">
        <label for="description">Description</label>
        <textarea id="description" placeholder="Enter Description" name="description"></textarea>
        <label for="imageUrl">Image Url</label>
        <input id="imageUrl" type="text" placeholder="Enter Meme ImageUrl" name="imageUrl">
        <input type="submit" class="registerbtn button" value="Edit Meme">
    </div>
</form>
</section>`

export async function showEdit(context) {
    let detailsId = context.params.id;
    let data = await getItemsDetails(detailsId);
    context.render(editTemplate(editFnc));

    document.getElementById("title").value = data.title;
    document.getElementById("description").value = data.description;
    document.getElementById("imageUrl").value = data.imageUrl;

    async function editFnc(e) {
        e.preventDefault();

        let title = document.getElementById("title").value;
        let description = document.getElementById("description").value;
        let imageUrl = document.getElementById("imageUrl").value;

        if (title == "" || description == "" || imageUrl == "") {
            alert("All fields are required!");
            return;
        }

        await updateItem(detailsId, { title, description, imageUrl });
        document.getElementById("title").value = "";
        document.getElementById("description").value = "";
        document.getElementById("imageUrl").value = "";
        context.page.redirect(`/details/${detailsId}`);
    }
}