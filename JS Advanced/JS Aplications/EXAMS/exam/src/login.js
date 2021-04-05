import { html } from "../node_modules/lit-html/lit-html.js"
import { login } from "./api/crud.js"


const loginTemplate = (loginFun) => html`
<section id="login-page" class="content auth">
    <h1>Login</h1>

    <form @submit=${loginFun} id="login">
        <fieldset>
            <blockquote>Knowledge is like money: to be of value it must circulate, and in circulating it can
                increase in quantity and, hopefully, in value</blockquote>
            <p class="field email">
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" placeholder="maria@email.com">
            </p>
            <p class="field password">
                <label for="login-pass">Password:</label>
                <input type="password" id="login-pass" name="password">
            </p>
            <p class="field submit">
                <input class="btn submit" type="submit" value="Log in">
            </p>
            <p class="field">
                <span>If you don't have profile click <a href="/register">here</a></span>
            </p>
        </fieldset>
    </form>
</section>`

export async function showLogin(context) {
    context.render(loginTemplate(loginFun));

    async function loginFun(e){
        e.preventDefault();
        
        let email = document.querySelector("#email").value;
        let password = document.querySelector("#login-pass").value;

        if(email == "" || password == ""){
            alert("All fields are required!");
            return;
        }

        await login(email, password);
        document.querySelector("#email").value = "";
        document.querySelector("#login-pass").value = "";
        context.page.redirect("/");
    }

}