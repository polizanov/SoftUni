import { html } from "../node_modules/lit-html/lit-html.js"
import { login } from "./api/crud.js"

const loginTemplate = (loginFunc) => html` 
 <section id="login">
<form @submit=${loginFunc} id="login-form">
    <div class="container">
        <h1>Login</h1>
        <label for="email">Email</label>
        <input id="email" placeholder="Enter Email" name="email" type="text">
        <label for="password">Password</label>
        <input id="password" type="password" placeholder="Enter Password" name="password">
        <input type="submit" class="registerbtn button" value="Login">
        <div class="container signin">
            <p>Dont have an account?<a href="/register">Sign up</a>.</p>
        </div>
    </div>
</form>
</section>  `

export function showLogin(context) {
    context.render(loginTemplate(loginFunc));

    async function loginFunc(e) {
        e.preventDefault();
        
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;

        if(email == "" || password == ""){
            alert("All fields are required!");
            return;
        }

        await login(email, password);
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
        context.page.redirect("/all-memes");

    }
}