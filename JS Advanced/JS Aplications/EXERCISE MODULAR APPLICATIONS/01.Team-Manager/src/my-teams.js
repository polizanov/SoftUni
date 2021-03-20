import { html } from "../node_modules/lit-html/lit-html.js";
import { until } from "../node_modules/lit-html/directives/until.js"
import { getAllTeamsCreated, getAllTeamsMember, getMemberCount } from "./api/crud.js";

const noDataTemplate = html`
<section id="my-teams">

    <article class="pad-med">
        <h1>My Teams</h1>
    </article>

    <article class="layout narrow">
        <div class="pad-med">
            <p>You are not a member of any team yet.</p>
            <p><a href="/browse">Browse all teams</a> to join one, or use the button bellow to cerate your own
                team.</p>
        </div>
        <div class="pad-med"><a href="/create" class="action cta">Create Team</a></div>
    </article>
</section>`

const dataTemplate = (data) => html`
<section id="my-teams">

    <article class="pad-med">
        <h1>My Teams</h1>
    </article>

    <article class="layout narrow">
        <div class="pad-med"><a href="/create" class="action cta">Create Team</a></div>
    </article>
    ${data.map(nestedTemplate)}
</section>`

const nestedTemplate = (e) => html`
<article class="layout">
    <img src="${e.logoUrl}" class="team-logo left-col">
    <div class="tm-preview">
        <h2>${e.name}</h2>
        <p>${e.description}</p>
        <span class="details">${until(getMemberCount(e._id))} Members</span>
        <div><a href="/deatails/${e._id}" class="action">See details</a></div>
    </div>
</article>`




export function showMyTeams(context) {
    console.log("home page")

    let personId = sessionStorage.getItem("personId");
    context.updateUserNav()
    renderMyTeams(personId);


    async function renderMyTeams(personId) {

        let [cratedTeams, memberTeams] = await Promise.all([
            getAllTeamsCreated(personId),
            getAllTeamsMember(personId),
        ])

        let allData = cratedTeams.concat(memberTeams)

        if (allData.length == 0) {
            context.render(noDataTemplate);
            return;
        }

        context.render(dataTemplate(allData))

        console.log(allData)
        //render created
        // render membersteam


        // console.log(cratedTeams);
        // console.log(memberTeams);

    }
}
