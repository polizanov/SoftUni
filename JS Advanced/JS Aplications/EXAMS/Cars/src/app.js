import page from "../node_modules/page/page.mjs";
import { render } from "../node_modules/lit-html/lit-html.js"

import * as crud from "./api/crud.js";

window.crud = crud;

import { showHome } from "./homePage.js";
import { showItems } from "./showItems.js";
import { showDetails } from "./details.js";
import { showCreate } from "./create.js";
import { showEdit } from "./edit.js";
import { showLogin } from "./login.js";
import { showRegister } from "./register.js";
import { showMyPage } from "./myPage.js";
import { showByYear } from "./byYearPage.js"

page("/", renderVue, showHome);
page("/all-listings", renderVue, showItems);
page("/by-year", renderVue, showByYear);
page("/login", renderVue, showLogin);
page("/register", renderVue, showRegister);
page("/my-listings", renderVue, showMyPage);
page("/create", renderVue, showCreate);
page("/edit/:id", renderVue, showEdit);
page("/details/:id", renderVue, showDetails);

page.start("/")
updateUserNav()

function renderVue(context, next) {
    context.render = (content) => render(content, document.querySelector("#site-content"))
    context.updateUserNav = updateUserNav;
    next()
}


export function updateUserNav() {
    let token = sessionStorage.getItem("token");
    let username = sessionStorage.getItem("username")

    if (token == null) {
        document.querySelector("#guest").style.display = "block";
        document.querySelector("#profile").style.display = "none";
    } else {
        document.querySelector("#greeteng-user").textContent = `Welcome ${username}`
        document.querySelector("#guest").style.display = "none";
        document.querySelector("#profile").style.display = "block";
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

