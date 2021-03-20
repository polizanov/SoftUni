import { html } from "../node_modules/lit-html/lit-html.js"
import {until} from "../node_modules/lit-html/directives/until.js"
import { getAllTeams, getMemberCount} from "./api/crud.js"

const browseTemplate = (personId, data) => html`
<article class="pad-med">
    <h1>Team Browser</h1>
</article>

${personId !== null ? html`
<article class="layout narrow">
    <div class="pad-small"><a href="/create" class="action cta">Create Team</a></div>
</article>
` : ""}

${data.map(teamDetails)}
`

const teamDetails = (e) => html`
<article class="layout">
    <img src="${e.logoUrl}" class="team-logo left-col">
    <div class="tm-preview">
        <h2>${e.name}</h2>
        <p>${e.description}</p>
        <span class="details">${until(getMemberCount(e._id))} Members</span>
        <div><a href="/deatails/${e._id}" class="action">See details</a></div>
    </div>
</article>`


export async function showBrowse(context) {
    console.log(context)
    let personId = sessionStorage.getItem("personId")
    context.updateUserNav()
    let data = await getAllTeams();
    context.render(browseTemplate(personId, data))

}