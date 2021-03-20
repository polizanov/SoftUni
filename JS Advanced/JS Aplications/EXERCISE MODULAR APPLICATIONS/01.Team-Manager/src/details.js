import { html } from "../node_modules/lit-html/lit-html.js"
import { until } from "../node_modules/lit-html/directives/until.js"
import { getTeamDetails,
         getMemberCount, 
         getMemberList, 
         getListPendingMembership,
         acceptMembership,
         rejectMembership,
         requestToJoinTeam} from "./api/crud.js"

const detailsTemplate = (data) => html`
<article class="layout">
    <img src="${data.logoUrl}" class="team-logo left-col">
    <div class="tm-preview">
        <h2>${data.name}</h2>
        <p>${data.description}</p>
        <span class="details">${until(getMemberCount(data._id))} Members</span>
        <div>
            ${sessionStorage.getItem("personId") == data._ownerId ? html`
            <a href="/edit/${data._id}" class="action">Edit team</a>
            ` : ""}

            ${sessionStorage.getItem("personId") !== data._ownerId && 
            sessionStorage.getItem("personId") !== null ? html`
            <a href="javascript:void(0)" class="action">Join team</a>
            `: ""}
            
            <!-- <a href="" class="action">Edit team</a>
            <a href="javascript:void(0)" class="action">Join team</a>
            <a href="javascript:void(0)" class="action invert">Leave team</a>
            Membership pending. <a href="#">Cancel request</a> -->
        </div>
    </div>
    <div class="pad-large">
        <h3>Members</h3>
        <ul class="tm-members">
            <li>My Username</li>
            <li>James<a href="#" class="tm-control action">Remove from team</a></li>
            <li>Meowth<a href="#" class="tm-control action">Remove from team</a></li>
        </ul>
    </div>
    <div class="pad-large">
        <h3>Membership Requests</h3>
        <ul class="tm-members">
            <li>John<a href="#" class="tm-control action">Approve</a><a href="#" class="tm-control action">Decline</a>
            </li>
            <li>Preya<a href="#" class="tm-control action">Approve</a><a href="#" class="tm-control action">Decline</a>
            </li>
        </ul>
    </div>
</article>`

export async  function showDetails(context) {
    console.log("details page")
    context.updateUserNav()
    let detailId = context.params.id;
    let teamData = await getTeamDetails(detailId);
    context.render(detailsTemplate(teamData))
    console.log(teamData)
    //TODO GENERATE MEMBERS FUNCTIONALITY!!!

}