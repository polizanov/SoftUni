import * as api from "./api.js"
import {updateUserNav} from "../app.js"

const host = "http://localhost:3030"


export async function createItem(data) {
    //data = {make, model, year, description, price, img, matereal}
    return await api.post(host + "/data/catalog", data);
}

export async function getAllItems() {
    return await api.get(host + "/data/catalog");
}

export async function getItemsDetails(id) {
    return await api.get(host + `/data/catalog/${id}`);
}

export async function updateItem(id, data) {
    //data = {make, model, year, description, price, img, matereal}
    return await api.put(host + `/data/catalog/${id}`, data);
}

export async function deleteItem(id) {
    return await api.del(host + `/data/catalog/${id}`);
}

// export async function getMyFurniture(){
//     let userId = sessionStorage.getItem("personId");
//     return await api.get(host + `/data/catalog?where=_ownerId%3D%22${userId}%22`);
// }


export async function login(email, password) {
    const result = await api.post(host + "/users/login", { email, password });
    sessionStorage.setItem("token", result.accessToken);
    sessionStorage.setItem("personId", result._id);
    sessionStorage.setItem("email", result.email);
    updateUserNav();
}

export async function register(email, password) {
    const result = await api.post(host + "/users/register", { email, password });
    sessionStorage.setItem("token", result.accessToken);
    sessionStorage.setItem("personId", result._id);
    sessionStorage.setItem("email", result.email);
    updateUserNav()
}

export async function logout() {
    await api.get(host + "/users/logout");
    sessionStorage.clear();
    updateUserNav();
}

