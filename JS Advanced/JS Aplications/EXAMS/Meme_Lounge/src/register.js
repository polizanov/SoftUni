import { html } from "../node_modules/lit-html/lit-html.js"
import { register } from "./api/crud.js"

const registerTemplate = (registerFunc, changeGender) => html`
<section id="register">
<form @submit=${registerFunc} id="register-form">
    <div class="container">
        <h1>Register</h1>
        <label for="username">Username</label>
        <input id="username" type="text" placeholder="Enter Username" name="username">
        <label for="email">Email</label>
        <input id="email" type="text" placeholder="Enter Email" name="email">
        <label for="password">Password</label>
        <input id="password" type="password" placeholder="Enter Password" name="password">
        <label for="repeatPass">Repeat Password</label>
        <input id="repeatPass" type="password" placeholder="Repeat Password" name="repeatPass">
        <div @click=${changeGender} class="gender">
            <input type="radio" name="gender" id="female" value="female">
            <label for="female">Female</label>
            <input type="radio" name="gender" id="male" value="male" checked>
            <label for="male">Male</label>
        </div>
        <input type="submit" class="registerbtn button" value="Register">
        <div class="container signin">
            <p>Already have an account?<a href="login">Sign in</a>.</p>
        </div>
    </div>
</form>
</section>`

export function showRegister(context) {
    context.render(registerTemplate(registerFunc, changeGender));

    let gender = "male"
    function changeGender(e){
        if(e.target.id == "female"){
            gender = "female"
        }

        if(e.target.id == "male"){
            gender = "male"
        }
    }

    async function registerFunc(e){
        e.preventDefault();

        let username = document.getElementById("username").value;
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;
        let rePass = document.getElementById("repeatPass").value;

        if(username == "" || email == "" || password == ""){
            alert("All fields are reuired!");
            return;
        }

        if(password !== rePass){
            alert("Passwords must be idenecal");
            return;
        }

        await register(username, email, password, gender);
        context.page.redirect("/all-memes");
        document.getElementById("username").value = "";
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
        document.getElementById("repeatPass").value = "";
        gender = "male";
    }

}