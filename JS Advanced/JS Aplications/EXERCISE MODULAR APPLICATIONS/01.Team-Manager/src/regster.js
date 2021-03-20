import { html } from "../node_modules/lit-html/lit-html.js"
import { register } from "./api/crud.js"

const registerTemplate = (registerHandler) => html`
<section id="register">
    <article class="narrow">
        <header class="pad-med">
            <h1>Register</h1>
        </header>
        <form @submit=${registerHandler} id="register-form" class="main-form pad-large">
            <div class="error"></div>
            <label>E-mail: <input type="text" name="email"></label>
            <label>Username: <input type="text" name="username"></label>
            <label>Password: <input type="password" name="password"></label>
            <label>Repeat: <input type="password" name="repass"></label>
            <input class="action cta" type="submit" value="Create Account">
        </form>
        <footer class="pad-small">Already have an account? <a href="/login" class="invert">Sign in here</a>
        </footer>
    </article>
</section>
`

export function showRegister(context) {
    console.log("register page")
    context.render(registerTemplate(registerHandler));

    async function registerHandler(e) {
        e.preventDefault();
        let errMsg = document.querySelector(".error");

        try {
            let email = document.querySelector("input[name='email']").value;
            let username = document.querySelector("input[name='username']").value;
            let password = document.querySelector("input[name='password']").value;
            let rePass = document.querySelector("input[name='repass']").value;

            if(email == "" || username == "" || password == "" || rePass == ""){
                errMsg.textContent = "All fields are required!"
                return;
            }

            if(password !== rePass){
                errMsg.textContent = "Passwords must be idenecal!"
                return;
            }

            await register(email, username, password);
            document.querySelector("input[name='email']").value = "";
            document.querySelector("input[name='username']").value = "";
            document.querySelector("input[name='password']").value = "";
            document.querySelector("input[name='repass']").value = "";
            context.page.redirect("/")
        } catch (err) {
            errMsg.textContent = err.massage;
        }
    }
}