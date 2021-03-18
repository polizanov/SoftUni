import page from "../node_modules/page/page.mjs"
import { render } from "../node_modules/lit-html/lit-html.js"

import { showDashboard } from "./dashboard.js";
import { showCreate } from "./create.js";
import { showDetails } from "./details.js";
import { showEditPage } from "./edit.js";
import { showLogIn } from "./logIn.js";
import { showMyFurniture } from "./myFurniture.js";
import { showRegister } from "./register.js";
import { logout } from "./api/api.js"

import * as api from "./api/api.js"
import * as crud from "./api/crud.js"


window.api = api

window.crud = crud;

//!!!
const main = document.querySelector(".container")

page("/", renderVue, showDashboard)
page("/dashboard", renderVue, showDashboard);
page("/create", renderVue, showCreate);
page("/my-furniture", renderVue, showMyFurniture);
page("/login", renderVue, showLogIn);
page("/register", renderVue, showRegister);
page("/edit/:id", renderVue, showEditPage);
page("/details/:id", renderVue, showDetails);

page.start();
updateUserNav();

function renderVue(context, next) {
    context.render = (content) => render(content, main)
    next()
}

function updateUserNav() {
    let token = sessionStorage.getItem("token");

    if (token == null) {
        document.querySelector("#user").style.display = "none";
        document.querySelector("#guest").style.display = "inline-block";
    } else {
        document.querySelector("#user").style.display = "inline-block";
        document.querySelector("#guest").style.display = "none";
    }

}

document.querySelector("body")
    .addEventListener("click", async (e) => {
        if (e.target.id == "logoutBtn") {
            e.preventDefault();
            await logout();
            page.redirect("/");

        }
    })

