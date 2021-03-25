import { html } from "../node_modules/lit-html/lit-html.js";
import { login } from "./api/crud.js";

const loginTemplate = (loginFunc) => html`
<h1>Login</h1>
<p class="form-info">Don't have account?
    <a href="/register">Register now</a> and fix that!
</p>
<form @submit=${loginFunc}>
    <div>
        <input type="email" placeholder="Email...">
    </div>

    <div>
        <input type="password" placeholder="Password...">
    </div>
    <div>
        <button>Login</button>
    </div>
</form>`

export function showLogin(context) {
    context.render(loginTemplate(loginFunc));

    async function loginFunc(e){
        e.preventDefault();

        let email = document.querySelector("input[placeholder='Email...']").value;
        let password = document.querySelector("input[placeholder='Password...']").value;

        
        await login(email, password);
        context.page.redirect("/");

        document.querySelector("input[placeholder='Email...']").value = "";
        document.querySelector("input[placeholder='Password...']").value = "";
        
    }
}