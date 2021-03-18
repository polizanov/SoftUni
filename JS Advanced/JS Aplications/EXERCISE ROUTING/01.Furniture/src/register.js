import { html } from "../node_modules/lit-html/lit-html.js"
import { register } from "./api/api.js"


const htmlTemplate = (registerUser, email, pass, repass) => html`
<div class="row space-top">
    <div class="col-md-12">
        <h1>Register New User</h1>
        <p id="registerMsg">Please fill all fields.</p>
    </div>
</div>
<form @submit=${registerUser}>
    <div class="row space-top">
        <div class="col-md-4">
            <div class="form-group">
                <label class="form-control-label" for="email">Email</label>
                <input class=${"form-control" + (email ? " is-invalid" : "" )} id="email" type="text" name="email">
            </div>
            <div class="form-group">
                <label class="form-control-label" for="password">Password</label>
                <input class=${"form-control" + (pass ? " is-invalid" : "")} id="password" type="password"
                    name="password">
            </div>
            <div class="form-group">
                <label class="form-control-label" for="rePass">Repeat</label>
                <input class=${"form-control" + (repass ? " is-invalid" : "" )} id="rePass" type="password"
                    name="rePass">
            </div>
            <input type="submit" class="btn btn-primary" value="Register" />
        </div>
    </div>
</form>
`

export function showRegister(context) {
    console.log('register page');
    context.render(htmlTemplate(registerUser));

    async function registerUser(e) {
        e.preventDefault();

        let email = document.querySelector("#email").value;
        let password = document.querySelector("#password").value;
        let rePass = document.querySelector("#rePass").value;
        let message = document.querySelector("#registerMsg");

        if (email == "" || password == "" || rePass == "") {
            context.render(htmlTemplate(registerUser, email == "", password == "", rePass == ""));
            message.textContent = "Please fill all fields.";
            message.style.color = "red";
            return;
        }

        if (password !== rePass) {
            context.render(htmlTemplate(registerUser, email == "", password !== rePass, password !== rePass))
            message.textContent = "Password dont match!"
            message.style.color = "red";
            return;
        }


        message.textContent = "Please fill all fields.";
        message.style.color = "black"
        context.render(htmlTemplate(registerUser))
        register(email, password);
        context.page.redirect("/")

        document.querySelector("#email").value = "";
        document.querySelector("#password").value = "";
        document.querySelector("#rePass").value = "";

    }
}