import { html } from "../node_modules/lit-html/lit-html.js";
import { login } from "./api/crud.js"

const logInTemplate = (logInUser) => html`
<article class="narrow">
    <header class="pad-med">
        <h1>Login</h1>
    </header>
    <form @submit=${logInUser} id="login-form" class="main-form pad-large">
        <div class="error"></div>
        <label>E-mail: <input type="text" name="email"></label>
        <label>Password: <input type="password" name="password"></label>
        <input class="action cta" type="submit" value="Sign In">
    </form>
    <footer class="pad-small">Don't have an account? <a href="/register" class="invert">Sign up here</a>
    </footer>
</article>
`

export function showLogin(context) {
    console.log("login page")

    context.render(logInTemplate(logInUser))

    async function logInUser(e) {
        e.preventDefault()
        let errMsg = document.querySelector(".error");

        try {
            let email = document.querySelector("input[name='email']").value;
            let password = document.querySelector("input[name='password']").value;

            if (email == "" || password == "") {
                errMsg.textContent = "Email and password must be field!";
                return;
            }
            
            await login(email, password)
            document.querySelector("input[name='email']").value = "";
            document.querySelector("input[name='password']").value = "";
            context.page.redirect("/")
        } catch (err) {
            errMsg.textContent = err.message;
        }
    }

}