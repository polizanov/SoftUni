import { html } from "../node_modules/lit-html/lit-html.js"
import { register } from "./api/crud.js"

const registerTempalte = (regFunc) => html`
<!-- Register -->
<section id="register-page" class="content auth">
    <h1>Register</h1>

    <form @submit=${regFunc} id="register">
        <fieldset>
            <blockquote>Knowledge is not simply another commodity. On the contrary. Knowledge is never used up.
                It
                increases by diffusion and grows by dispersion.</blockquote>
            <p class="field email">
                <label for="register-email">Email:</label>
                <input type="email" id="register-email" name="email" placeholder="maria@email.com">
            </p>
            <p class="field password">
                <label for="register-pass">Password:</label>
                <input type="password" name="password" id="register-pass">
            </p>
            <p class="field password">
                <label for="register-rep-pass">Repeat password:</label>
                <input type="password" name="rep-pass" id="register-rep-pass">
            </p>
            <p class="field submit">
                <input class="btn submit" type="submit" value="Register">
            </p>
            <p class="field">
                <span>If you already have profile click <a href="/login">here</a></span>
            </p>
        </fieldset>
    </form>
</section>`

export async function showRegister(context) {
    context.render(registerTempalte(regFunc));

    async function regFunc(e) {
        e.preventDefault();
        
        let email = document.querySelector("#register-email").value;
        let password = document.querySelector("#register-pass").value;
        let rePass = document.querySelector("#register-rep-pass").value;

        if(email == "" || password == ""){
            alert("All fields are required!");
            return;
        }

        if(password !== rePass){
            alert("Passwords must be identical!");
            return;
        }

        console.log(email, password)

        await register(email, password);
        document.querySelector("#register-email").value = "";
        document.querySelector("#register-pass").value = "";
        document.querySelector("#register-rep-pass").value = "";
        context.page.redirect("/");
    }
}