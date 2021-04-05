import { html } from "../node_modules/lit-html/lit-html.js"
import { getItemsDetails, updateItem } from "./api/crud.js"

const editTemplate = (data, editFunc) => html`
<!-- Edit -->
<section id="edit-page" class="content">
    <h1>Edit Article</h1>

    <form @submit=${editFunc} id="edit">
        <fieldset>
            <p class="field title">
                <label for="title">Title:</label>
                <input type="text" name="title" id="title" placeholder="Enter article title" >
            </p>

            <p class="field category">
                <label for="category">Category:</label>
                <input type="text" name="category" id="category" placeholder="Enter article category" >
            </p>
            <p class="field">
                <label for="content">Content:</label>
                <textarea name="content" id="content"></textarea >
            </p>

            <p class="field submit">
                <input class="btn submit" type="submit" value="Save Changes">
            </p>

        </fieldset>
    </form>
</section>
`

export async function showEdit(context) {
    let categoryId = context.params.id;
    console.log(categoryId)
    let data = await getItemsDetails(categoryId);
    
    context.render(editTemplate(data, editFunc));
    document.getElementById("title").value = data.title;
    document.getElementById("category").value = data.category;
    document.getElementById("content").value = data.content;

    async function editFunc(e){
        e.preventDefault()

        let categories = ["JavaScript", "C#", "Java", "Python"]

        let title = document.querySelector("#title").value;
        let category = document.querySelector("#category").value;
        let content = document.querySelector("#content").value;

        if (title == "" || category == "" || content == "") {
            alert("All fields are required!");
            return;
        }

        if (!categories.includes(category)) {
            alert("Category must be one of these: JavaScript, C#, Java, or Python!");
            return;
        }

        await updateItem(categoryId, {title, category, content});
        document.querySelector("#title").value = "";
        document.querySelector("#category").value = "";
        document.querySelector("#content").value = "";
        context.page.redirect(`/details/${categoryId}`);
    }
}