import { html } from "../node_modules/lit-html/lit-html.js";
import { register } from "./api/crud.js";

const registerTamplate = (registerFunc) => html`
<h1>Register</h1>
<p class="form-info">Already registered?
    <a href="/login">Login now</a> and have some fun!
</p>

<form @submit=${registerFunc}>
    <div>
        <input type="email" placeholder="Email...">
    </div>
    <div>
        <input type="password" placeholder="Password">
    </div>
    <div>
        <input type="password" placeholder="Re-password">
    </div>
    <div>
        <p class="message"></p>
        <button>Register</button>
    </div>
</form>`

export function showRegister(context) {
    context.render(registerTamplate(registerFunc));

    async function registerFunc(e) {
        e.preventDefault();

        let email = document.querySelector("input[placeholder='Email...']").value;
        let password = document.querySelector("input[placeholder='Password']").value;
        let rePass = document.querySelector("input[placeholder='Re-password']").value;

        if (email == "") {
            context.render(registerTamplate(registerFunc));
            return;
        }

        if (password.length < 6) {
            context.render(registerTamplate(registerFunc));
            return;
        }

        if (password !== rePass) {
            context.render(registerTamplate(registerFunc));
            return;
        }

        await register(email, password);
        context.page.redirect("/");

        document.querySelector("input[placeholder='Email...']").value = "";
        document.querySelector("input[placeholder='Password']").value = "";
        document.querySelector("input[placeholder='Re-password']").value = "";
    }
}