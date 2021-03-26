import { html } from "../node_modules/lit-html/lit-html.js";
import { login } from "./api/crud.js"

const logInTemplate = (logInFunc) => html`
<div class="background-spotify">
    <div class="song-container">
        <h1>Login</h1>
        <form @submit=${logInFunc}>
            <div class="form-group">
                <label for="username" class="white-labels">Username</label>
                <input id="username" type="text" name="username" class="form-control" placeholder="Enter username">
            </div>
            <div class="form-group">
                <label for="password" class="white-labels">Password</label>
                <input id="password" type="password" name="password" class="form-control" placeholder="Password">
            </div>
            <button type="submit" class="btn btn-primary">Login</button>
        </form>

        <h4 class="mt-3 text-white">No account yet? <a href="/register" class="add-link">Register</a></h4>
    </div>
</div>`

export function showLogin(context) {
    context.render(logInTemplate(logInFunc));

    async function logInFunc(e) {
        e.preventDefault();
       
        let email = document.querySelector("#username").value;
        let password = document.querySelector("#password").value;

        if (email == "" || password == "") {
            alert("Email and password must be filled!");
            return;
        }

        await login(email, password);
        context.page.redirect("/");
        document.querySelector("#username").value = "";
        document.querySelector("#password").value = "";


    }

}