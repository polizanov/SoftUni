import page from "../node_modules/page/page.mjs";
import { render } from "../node_modules/lit-html/lit-html.js"

import * as crud from "./api/crud.js";
window.crud = crud;

import { showHome } from "./homePage.js";
import { showItems } from "./catalog.js";
import { showDetails } from "./details.js";
import { showCreate } from "./create.js";
import { showEdit } from "./edit.js";
import { showLogin } from "./login.js";
import { showRegister } from "./register.js";
import {showSearch} from "./search.js"

page("/", renderVue, showHome);
page("/catalog", renderVue, showItems);
page("/details/:id", renderVue, showDetails);
page("/create", renderVue, showCreate);
page("/edit/:id", renderVue, showEdit);
page("/login", renderVue, showLogin);
page("/register", renderVue, showRegister);
page("/search", renderVue, showSearch)


page.start("/")
updateUserNav()

function renderVue(context, next) {
    context.render = (content) => render(content, document.querySelector("main"))
    context.updateUserNav = updateUserNav;
    next()
}


export function updateUserNav() {
    let token = sessionStorage.getItem("token");
    let guestDiv = document.getElementById("guest");
    let userDiv = document.getElementById("user");
    
    if (token == null) {
        guestDiv.style.display = "block";
        userDiv.style.display = "none"
    } else {
        guestDiv.style.display = "none";
        userDiv.style.display = "block"
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

