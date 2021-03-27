import page from "../node_modules/page/page.mjs";
import { render } from "../node_modules/lit-html/lit-html.js"

import * as crud from "./api/crud.js";

window.crud = crud;

import {showHome} from "./guestHome.js"
import {showAllMemes} from "./allMemes.js"
import {showCreate} from "./create.js"
import {showDetails} from "./details.js"
import {showEdit} from "./editPage.js"
import {showLogin} from "./login.js"
import {showRegister} from "./register.js"
import {showProfile} from "./profilePage.js"

page('/', renderVue, showHome);
page('/all-memes', renderVue, showAllMemes);
page('/create', renderVue, showCreate);
page('/details/:id', renderVue, showDetails);
page('/edit/:id', renderVue, showEdit);
page('/login', renderVue, showLogin);
page('/register', renderVue, showRegister);
page('/profile', renderVue, showProfile);

if(sessionStorage.getItem("token") == null){
    page.start("/");
} else {
    page.start("/all-memes");
}
updateUserNav()

function renderVue(context, next) {
    context.render = (content) => render(content, document.querySelector("main"))
    context.updateUserNav = updateUserNav;
    next()
}


export function updateUserNav() {
    let token = sessionStorage.getItem("token");
    let userDiv = document.querySelector("nav .user");
    let guestDiv = document.querySelector("nav .guest");
    let emailName = document.querySelector("nav .user span")

    
    if (token == null) {
        userDiv.style.display = "none";
        guestDiv.style.display = "block"
    } else {
        userDiv.style.display = "block";
        guestDiv.style.display = "none"
        let email = sessionStorage.getItem("email");
        emailName.textContent = `Welcome, ${email}`;
        
    }

}

document.querySelector("body")
    .addEventListener("click", async (e) => {
        if (e.target.id == "logoutBtn") {
            e.preventDefault();
            await crud.logout();
            page.redirect("/");

        }
    })

