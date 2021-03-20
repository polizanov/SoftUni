import page from "../node_modules/page/page.mjs";
import { render } from "../node_modules/lit-html/lit-html.js"

import { showBrowse } from "./browse.js"
import { showCreate } from "./create.js"
import { showEdit } from "./editTeam.js"
import { showDetails } from "./details.js"
import { showHome } from "./home.js"
import { showLogin } from "./login.js"
import { showMyTeams } from "./my-teams.js"
import { showRegister } from "./regster.js"
import { logout } from "./api/crud.js"

import * as crud from "./api/crud.js";
import * as api from "./api/api.js"


window.crud = crud;
window.api = api;

page("/", middellware, showHome);
page("/browse", middellware, showBrowse);
page("/create", middellware, showCreate);
page("/edit/:id", middellware, showEdit)
page("/deatails/:id", middellware, showDetails);
page("/login", middellware, showLogin);
page("/my-teams", middellware, showMyTeams);
page("/register", middellware, showRegister);

page.start();
updateUserNav();

function middellware(context, next) {
    context.render = (context) => render(context, document.querySelector("main"))
    context.updateUserNav = updateUserNav
    next()
}

document.getElementById("logoutAncer")
    .addEventListener("click", async (e) => {
        e.preventDefault();
        await logout();
        page.redirect("/")
    })


export function updateUserNav() {
    let token = sessionStorage.getItem("token");

    if (token == null) {
        update(false);
    } else {
        update(true);
    }


    function update(isLoged) {
        if (isLoged) {
            document.getElementById("loginAncer").style.display = "none";
            document.getElementById("regiserAncer").style.display = "none";
            document.getElementById("teamsAncer").style.display = "inline-block";
            document.getElementById("logoutAncer").style.display = "inline-block";
        } else {
            document.getElementById("loginAncer").style.display = "inline-block";
            document.getElementById("regiserAncer").style.display = "inline-block";
            document.getElementById("teamsAncer").style.display = "none";
            document.getElementById("logoutAncer").style.display = "none";
        }
    }
}