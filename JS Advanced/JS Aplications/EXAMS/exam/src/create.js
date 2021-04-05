import { html } from "../node_modules/lit-html/lit-html.js"
import { createItem } from "./api/crud.js"

const createTemplate = (createFunc) => html`
<!-- Create -->
<section id="create-page" class="content">
    <h1>Create Article</h1>

    <form @submit=${createFunc} id="create" action="#" method="">
        <fieldset>
            <p class="field title">
                <label for="create-title">Title:</label>
                <input type="text" id="create-title" name="title" placeholder="Enter article title">
            </p>

            <p class="field category">
                <label for="create-category">Category:</label>
                <input type="text" id="create-category" name="category" placeholder="Enter article category">
            </p>
            <p class="field">
                <label for="create-content">Content:</label>
                <textarea name="content" id="create-content"></textarea>
            </p>

            <p class="field submit">
                <input class="btn submit" type="submit" value="Create">
            </p>

        </fieldset>
    </form>
</section>
`

export async function showCreate(context) {
    context.render(createTemplate(createFunc));


    async function createFunc(e) {
        e.preventDefault();

        let categories = ["JavaScript", "C#", "Java", "Python"]

        let title = document.querySelector("#create-title").value;
        let category = document.querySelector("#create-category").value;
        let content = document.querySelector("#create-content").value;

        if (title == "" || category == "" || content == "") {
            alert("All fields are required!");
            return;
        }

        if (!categories.includes(category)) {
            alert("Category must be one of these: JavaScript, C#, Java, or Python!");
            return;
        }

        await createItem({title, category, content});
        document.querySelector("#create-title").value = "";
        document.querySelector("#create-category").value = "";
        document.querySelector("#create-content").value = "";
        context.page.redirect("/");
    }
}