import * as api from "./api.js"
import {updateUserNav} from "../app.js"

const host = "http://localhost:3030"


export async function createItem(data) {
    return await api.post(host + "/data/cars", data);
}

export async function getAllItems() {
    return await api.get(host + "/data/cars?sortBy=_createdOn%20desc");
}

export async function getItemsDetails(id) {
    return await api.get(host + `/data/cars/${id}`);
}

export async function updateItem(id, data) {
    return await api.put(host + `/data/cars/${id}`, data);
}

export async function deleteItem(id) {
    return await api.del(host + `/data/cars/${id}`);
}

export async function getMyItems(){
    let userId = sessionStorage.getItem("personId");
    return await api.get(host + `/data/cars?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
}

export async function login(username, password) {
    const result = await api.post(host + "/users/login", { username, password });
    sessionStorage.setItem("token", result.accessToken);
    sessionStorage.setItem("personId", result._id);
    sessionStorage.setItem("username", result.username);
    updateUserNav();
}

export async function register(username, password) {
    const result = await api.post(host + "/users/register", { username, password });
    sessionStorage.setItem("token", result.accessToken);
    sessionStorage.setItem("personId", result._id);
    sessionStorage.setItem("username", result.username);
    updateUserNav()
}

export async function logout() {
    await api.get(host + "/users/logout");
    sessionStorage.clear();
    updateUserNav();
}

