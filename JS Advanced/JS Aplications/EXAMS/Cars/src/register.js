import { html } from "../node_modules/lit-html/lit-html.js"
import { register } from "./api/crud.js";

const registerTemplate = (regFunc) => html`
<section id="register">
    <div class="container">
        <form @submit=${regFunc} id="register-form">
            <h1>Register</h1>
            <p>Please fill in this form to create an account.</p>
            <hr>

            <p>Username</p>
            <input type="text" placeholder="Enter Username" id="username" name="username">

            <p>Password</p>
            <input type="password" placeholder="Enter Password" id="password" name="password">

            <p>Repeat Password</p>
            <input type="password" placeholder="Repeat Password" id="rePass" name="repeatPass">
            <hr>

            <input type="submit" class="registerbtn" value="Register">
        </form>
        <div class="signin">
            <p>Already have an account?
                <a href="login">Sign in</a>.
            </p>
        </div>
    </div>
</section>
`

export async function showRegister(context) {
    context.render(registerTemplate(regFunc));

    async function regFunc(e) {
        e.preventDefault();
        
        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;
        let rePass = document.getElementById("rePass").value;

        if(username == "" || password == ""){
            alert('All fields are required!');
            return;
        }

        if(password !== rePass){
            alert("Password must be identical!");
            return;
        }



        await register(username, password);
        context.page.redirect("/all-listings");
        document.getElementById("username").value = "";
        document.getElementById("password").value = "";
        document.getElementById("rePass").value = "";
    }
}