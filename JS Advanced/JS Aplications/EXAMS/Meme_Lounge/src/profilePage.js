import { html } from "../node_modules/lit-html/lit-html.js"
import { getMyItems } from "./api/crud.js"

const myProfileTemplate = (data) => html`
<section id="user-profile-page" class="user-profile">
    <article class="user-info">
        <img id="user-avatar-url" alt="user-profile" src="/images/female.png">
        <div class="user-content">
            <p>Username: ${sessionStorage.getItem("username")}</p>
            <p>Email: ${sessionStorage.getItem("email")}</p>
            <p>My memes count: ${data.length}</p>
        </div>
    </article>
    <h1 id="user-listings-title">User Memes</h1>
    <div class="user-meme-listings">
        ${data.length > 0 ? data.map(curMeme) : html`
        <p class="no-memes">No memes in database.</p>`
            }
    </div>
</section>`

const curMeme = (e) => html`
<div class="user-meme">
    <p class="user-meme-title">${e.title}</p>
    <img class="userProfileImage" alt="meme-img" src="${e.imageUrl}">
    <a class="button" href="/details/${e._id}">Details</a>
</div>
`

export async function showProfile(context) {
    let myData = await getMyItems();
    context.render(myProfileTemplate(myData))
}