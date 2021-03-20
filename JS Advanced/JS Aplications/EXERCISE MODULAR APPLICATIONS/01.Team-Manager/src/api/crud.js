import * as api from "./api.js"

const host = "http://localhost:3030";

export async function login(email, password) {
    const result = await api.post(host + "/users/login", { email, password });
    sessionStorage.setItem("token", result.accessToken);
    sessionStorage.setItem("personId", result._id);
    sessionStorage.setItem("username", result.username);
}

export async function register(email, username, password) {
    const result = await api.post(host + "/users/register", { email, username, password });
    sessionStorage.setItem("token", result.accessToken);
    sessionStorage.setItem("personId", result._id);
    sessionStorage.setItem("username", result.username);
}

export async function logout() {
    await api.get(host + "/users/logout");
    sessionStorage.clear();
}

export async function getAllTeams() {
    return await api.get(host + "/data/teams")
}

export async function getAllTeamsCreated(userId) {
    return await api.get(host + `/data/teams?where=_ownerId%3D%22${userId}%22`);
}

export async function getAllTeamsMember(userId) {
    return await api.get(host + `/data/members?where=_ownerId%3D%22${userId}%22%20AND%20status%3D%22member%22&load=team%3DteamId%3Ateams`);
}

export async function getMemberCount(teamId) {
    return await api.get(host + `/data/members?where=teamId%3D%22${teamId}%22%20AND%20status%3D%22member%22&count`);
}

export async function getMemberList(teamId) {
    return await api.get(host + `/data/members?where=teamId%3D%22${teamId}%22%20AND%20status%3D%22member%22 &load=user%3DuserId%3Ausers`);
}

export async function getListPendingMembership(teamId) {
    return await api.get(host + `/data/members?where=teamId%3D%22${teamId}%22%20AND%20status%3D%22pending%22 &load=user%3DuserId%3Ausers`)
}

export async function rejectMembership(requestId) {
    return await api.del(host + `/data/members/${requestId}`);
}

export async function acceptMembership(requestId) {
    return await api.post(host + `/data/members/${requestId}`, { status: "member" });
}

export async function requestToJoinTeam(teamId) {
    return await api.post(host + `/data/members`, teamId);
}

export async function createTeam(data) {
    return await api.post(host + `/data/teams`, data);
}

export async function editTeam(id, data) {
    console.log("in")
    return await api.put(host + `/data/teams/${id}`, data);
}

export async function getTeamDetails(id) {
    return await api.get(host + `/data/teams/${id}`);
}