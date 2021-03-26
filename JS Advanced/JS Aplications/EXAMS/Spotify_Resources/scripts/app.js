import page from "../node_modules/page/page.mjs";
import { render } from "../node_modules/lit-html/lit-html.js"

import * as crud from "./api/crud.js";
window.crud = crud;

import { showHome } from "./home.js";
import { showLogin } from "./login.js";
import { showRegister } from "./register.js";
import { showMySongs } from "./mySongs.js";
import { showAddSong } from "./addSong.js";
import { allSongs } from "./allSongs.js";

page("/", renderVue, showHome);
page("/login", renderVue, showLogin);
page("/register", renderVue, showRegister);
page("/my-songs", renderVue, showMySongs);
page("/add-song", renderVue, showAddSong);
page("/all-songs", renderVue, allSongs);

page.start("/")
updateUserNav()

function renderVue(context, next) {
    context.render = (content) => render(content, document.querySelector("main"))
    context.updateUserNav = updateUserNav;
    next()
}


export function updateUserNav() {
    let token = sessionStorage.getItem("token");

    let guestBtn = document.querySelectorAll(".guest");
    let userBtn = document.querySelectorAll(".user");
    let regardsElement = document.getElementById("regards");


    if (token == null) {
        [...guestBtn].forEach(e => e.style.display = "block");
        [...userBtn].forEach(e => e.style.display = "none");
    } else {
        let username = sessionStorage.getItem("email");
        regardsElement.textContent = `Welcome, ${username}`;
        [...guestBtn].forEach(e => e.style.display = "none");
        [...userBtn].forEach(e => e.style.display = "block");
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

document.querySelector("main")
    .addEventListener("click", async (e) => {
        if (e.target.tagName == "BUTTON" && e.target.textContent == "Remove") {
            let conf = confirm("Are you sure to delete!");
            if (conf) {
                await crud.deleteItem(e.target.id);
                page.redirect("/all-songs");
            }
        }
    })

