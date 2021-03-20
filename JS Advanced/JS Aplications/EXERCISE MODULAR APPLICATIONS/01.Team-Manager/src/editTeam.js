import { html } from "../node_modules/lit-html/lit-html.js"
import { editTeam } from "./api/crud.js"

const editTemplate = (editHandler) => html`
<article class="narrow">
    <header class="pad-med">
        <h1>Edit Team</h1>
    </header>
    <form @submit=${editHandler} id="edit-form" class="main-form pad-large">
        <div class="error"></div>
        <label>Team name: <input type="text" name="name"></label>
        <label>Logo URL: <input type="text" name="logoUrl"></label>
        <label>Description: <textarea name="description"></textarea></label>
        <input class="action cta" type="submit" value="Save Changes">
    </form>
</article>`

export function showEdit(context) {
    console.log("edit func")
    context.updateUserNav()
    let teamId = context.params.id
    context.render(editTemplate(editHandler))

    async function editHandler(e) {
        e.preventDefault();

        let name = document.querySelector("input[name='name']").value;
        let logoUrl = document.querySelector("input[name='logoUrl']").value;
        let description = document.querySelector("textarea[name='description']").value;
        let errMsg = document.querySelector(".error");

        if (name == "" || logoUrl == "" || description == "") {
            errMsg.textContent = "All fields are required!"
            return;
        }

        if (name.length < 4) {
            errMsg.textContent = "Team name required, at least 4 characters!"
            return;
        }

        if (logoUrl.length < 4) {
            errMsg.textContent = "Logo URL required, at least 4 characters!"
            return;
        }

        if (description.length < 10) {
            errMsg.textContent = "Description required, at least 10 characters!"
            return;
        }

        try {
            await editTeam(teamId, { name, logoUrl, description });
            document.querySelector("input[name='name']").value;
            document.querySelector("input[name='logoUrl']").value;
            document.querySelector("textarea[name='description']").value;
            document.querySelector(".error").textContent = "";
            context.page.redirect(`/deatails/${teamId}`);
        } catch (err) {
            errMsg.textContent = err.message;
        }
    }

}