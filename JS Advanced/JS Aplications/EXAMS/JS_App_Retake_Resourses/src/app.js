import page from "../node_modules/page/page.mjs";
import { html, render } from "../node_modules/lit-html/lit-html.js"

import * as crud from "./api/crud.js";

import { showCreate } from "./create.js";
import { showDeatails } from "./detailsPage.js";
import { showEdit } from "./edit.js";
import { showHome } from "./homePage.js";
import { showLogin } from "./login.js";
import { showRegister } from "./register.js";

page('/', renderVue, showHome);
page('/create', renderVue, showCreate);
page('/details/:id', renderVue, showDeatails);
page('/edit/:id', renderVue, showEdit);
page('/login', renderVue, showLogin);
page('/register', renderVue, showRegister);

page.start("/")
updateUserNav()

function renderVue(context, next) {
    context.render = (content) => render(content, document.querySelector("main"))
    context.updateUserNav = updateUserNav;
    next()
}

export function updateUserNav() {
    let token = sessionStorage.getItem("token");
    let header = document.querySelector("body header");

    const guest = html`
    <nav>
        <ul>
            <li class="site-logo">Shoe</li>
            <li>
                <a href="/">
                    <img src="../public/sneakers.png" alt="">
                </a>
            </li>
            <li class="site-logo">Shelf</li>
        </ul>
    </nav>`

    const user = (email) => html`
    <nav>
        <ul>
            <li>
                <a href="/create">Create new offer</a>
            </li>
            <li class="site-logo">Shoe</li>
            <li>
                <a href="/">
                    <img src="../public/sneakers.png" alt="">
                </a>
            </li>
            <li class="site-logo">Shelf</li>
            <li id="regard">Welcome, ${email} |
                <a id="logoutBtn">Logout</a>
            </li>
        </ul>
    </nav>`

    if (token == null) {
        render(guest, header);
    } else {
        let email = sessionStorage.getItem("email");
        render(user(email), header);
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

