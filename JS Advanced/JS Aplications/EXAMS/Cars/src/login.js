import { html } from "../node_modules/lit-html/lit-html.js"
import { login } from "./api/crud.js";

const loginTemplate = (loginFunc) => html`
<section id="login">
    <div class="container">
        <form @submit=${loginFunc} id="login-form">
            <h1>Login</h1>
            <p>Please enter your credentials.</p>
            <hr>

            <p>Username</p>
            <input placeholder="Enter Username" name="username" id="username" type="text">

            <p>Password</p>
            <input type="password" placeholder="Enter Password" id="password" name="password">
            <input type="submit" class="registerbtn" value="Login">
        </form>
        <div class="signin">
            <p>Dont have an account?
                <a href="/register">Sign up</a>.
            </p>
        </div>
    </div>
</section>`

export async function showLogin(context) {
    context.render(loginTemplate(loginFunc));

    async function loginFunc(e) {
        e.preventDefault();
        
        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;

        if(username == "" || password == ""){
            alert('All fields are required!');
            return;
        }

        await login(username, password);
        context.page.redirect("/all-listings");
        document.getElementById("username").value = "";
        document.getElementById("password").value = "";

    }
}