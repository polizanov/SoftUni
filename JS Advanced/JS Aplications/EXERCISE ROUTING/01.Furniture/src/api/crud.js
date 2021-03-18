import * as api from "./api.js"

const host = "http://localhost:3030"

export async function createFurniture(data){
    //data = {make, model, year, description, price, img, matereal}
    return await api.post(host + "/data/catalog", data);
}

export async function getAllFurniture(){
    return await api.get(host + "/data/catalog");
}

export async function getFurnitureDetails(id){
    return await api.get(host + `/data/catalog/${id}`);
}

export async function updateFurniture(id, data){
      //data = {make, model, year, description, price, img, matereal}
    return await api.put(host + `/data/catalog/${id}`, data);
}

export async function deleteFurniture(id){
    return await api.del(host + `/data/catalog/${id}`);
}

export async function getMyFurniture(){
    let userId = sessionStorage.getItem("personId");
    return await api.get(host + `/data/catalog?where=_ownerId%3D%22${userId}%22`);
}

