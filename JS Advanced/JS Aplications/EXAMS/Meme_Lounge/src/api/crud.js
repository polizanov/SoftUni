import * as api from "./api.js"
import {updateUserNav} from "../app.js"

const host = "http://localhost:3030"


export async function createItem(data) {
    return await api.post(host + "/data/memes", data);
}

export async function getAllItems() {
    return await api.get(host + "/data/memes?sortBy=_createdOn%20desc");
}

export async function getItemsDetails(id) {
    return await api.get(host + `/data/memes/${id}`);
}

export async function updateItem(id, data) {
    return await api.put(host + `/data/memes/${id}`, data);
}

export async function deleteItem(id) {
    return await api.del(host + `/data/memes/${id}`);
}

export async function getMyItems(){
    let userId = sessionStorage.getItem("personId");
    return await api.get(host + `/data/memes?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
}

export async function login(email, password) {
    const result = await api.post(host + "/users/login", { email, password });
    sessionStorage.setItem("token", result.accessToken);
    sessionStorage.setItem("personId", result._id);
    sessionStorage.setItem("email", result.email);
    sessionStorage.setItem("username", result.username);
    sessionStorage.setItem("gender", result.gender);
    updateUserNav();
}

export async function register(username, email, password, gender) {
    const result = await api.post(host + "/users/register", { username, email, password, gender });
    sessionStorage.setItem("token", result.accessToken);
    sessionStorage.setItem("personId", result._id);
    sessionStorage.setItem("email", result.email);
    sessionStorage.setItem("username", result.username);
    sessionStorage.setItem("gender", result.gender);
    updateUserNav()
}

export async function logout() {
    await api.get(host + "/users/logout");
    sessionStorage.clear();
    updateUserNav();
}

