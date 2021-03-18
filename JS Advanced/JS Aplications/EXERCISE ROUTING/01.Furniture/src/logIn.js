import { html } from "../node_modules/lit-html/lit-html.js";
import {login} from "./api/api.js";

const htmlTemplate = (logIn, email, pass) => html`
<div class="row space-top">
    <div class="col-md-12">
        <h1>Login User</h1>
        <p id="logInMsg">Please fill all fields.</p>
    </div>
</div>
<form @submit=${logIn}>
    <div class="row space-top">
        <div class="col-md-4">
            <div class="form-group">
                <label class="form-control-label" for="email">Email</label>
                <input class=${"form-control" + (email ? " is-invalid" : "" )} id="email" type="text" name="email">
            </div>
            <div class="form-group">
                <label class="form-control-label" for="password">Password</label>
                <input class=${"form-control" + (pass ? " is-invalid" : "" )} id="password" type="password"
                    name="password">
            </div>
            <input type="submit" class="btn btn-primary" value="Login" />
        </div>
    </div>
</form>
`

export function showLogIn(context) {
    context.render(htmlTemplate(logIn));
    console.log('login page')

    async function logIn(e) {
        e.preventDefault();

        let email = document.querySelector("#email").value;
        let password = document.querySelector("#password").value;
        let message = document.querySelector("#logInMsg");

        if (email == "") {
            context.render(htmlTemplate(logIn, email == "", password == ""));
            message.textContent = "Email connot be empty!";
            message.style.color = "red";
            return;
        }

        if (password == "") {
            context.render(htmlTemplate(logIn, email == "", password == ""));
            message.textContent = "Password connot be empty!";
            message.style.color = "red";
            return;
        }

        
        context.render(htmlTemplate(logIn, false, false));
        login(email, password);

        message.textContent = "Please fill all fields.";
        message.style.color = "black";

        document.querySelector("#email").value = "";
        document.querySelector("#password").value = "";
        document.querySelector("#logInMsg").value = "";

        context.page.redirect("/")
    }
}