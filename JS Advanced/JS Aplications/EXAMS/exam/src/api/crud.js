import * as api from "./api.js"
import {updateUserNav} from "../app.js"

const host = "http://localhost:3030"


export async function createItem(data) {
    return await api.post(host + "/data/wiki", data);
}

export async function getAllItems() {
    return await api.get(host + "/data/wiki?sortBy=_createdOn%20desc");
}

export async function getMostResentItems() {
    return await api.get(host + "/data/wiki?sortBy=_createdOn%20desc&distinct=category");
}

export async function getItemsDetails(id) {
    return await api.get(host + `/data/wiki/${id}`);
}

export async function updateItem(id, data) {
    return await api.put(host + `/data/wiki/${id}`, data);
}

export async function deleteItem(id) {
    return await api.del(host + `/data/wiki/${id}`);
}


export async function login(email, password) {
    const result = await api.post(host + "/users/login", { email, password });
    sessionStorage.setItem("token", result.accessToken);
    sessionStorage.setItem("personId", result._id);
    updateUserNav();
}

export async function register(email, password) {
    const result = await api.post(host + "/users/register", { email, password });
    sessionStorage.setItem("token", result.accessToken);
    sessionStorage.setItem("personId", result._id);
    updateUserNav()
}

export async function logout() {
    await api.get(host + "/users/logout");
    sessionStorage.clear();
    updateUserNav();
}

