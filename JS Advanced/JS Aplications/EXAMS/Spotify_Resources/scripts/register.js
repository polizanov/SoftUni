import { html } from "../node_modules/lit-html/lit-html.js";
import { register } from "./api/crud.js"

const registerTemplate = (regFunc) => html`
<section id="registerView">
    <div class="background-spotify">
        <div class="song-container">
            <h1>Register</h1>
            <form @submit=${regFunc}>
                <div class="form-group">
                    <label for="username" class="white-labels">Username</label>
                    <input type="text" name="username" class="form-control" placeholder="Enter username">
                </div>
                <div class="form-group">
                    <label for="password" class="white-labels">Password</label>
                    <input type="password" name="password" class="form-control" placeholder="Password">
                </div>
                <button type="submit" class="btn btn-primary">Register</button>
            </form>
            <h4 class="mt-3 text-white">Already have an account? <a href="#" class="add-link">Login</a></h4>
        </div>
    </div>
</section>`

export function showRegister(context) {
    context.render(registerTemplate(regFunc));

    async function regFunc(e) {
        e.preventDefault();

        let email = document.querySelector("input[name='username']").value;
        let password = document.querySelector("input[name='password']").value;

        if (email == "" || password == "") {
            alert("Email and password must be filled!");
            return;
        }

        await register(email, password);
        context.page.redirect("/");
        document.querySelector("input[name='username']").value = "";
        document.querySelector("input[name='password']").value = "";


    }
}