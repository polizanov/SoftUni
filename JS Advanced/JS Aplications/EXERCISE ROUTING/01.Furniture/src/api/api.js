const host = "http://localhost:3030"

async function request(url, options) {
    try {
        let request = await fetch(url, options);
        if (!request.ok) {
            let err = await request.json()
            throw new Error(err.message)
        }

        try{
            let data = await request.json();
            return data;
        } catch (err){
            return request
        }
        
    } catch (err) {
        alert(err.message);
        throw err;
    }

}

function getOptions(method = "get", body){
    let options = {
        method,
        headers: {}
    }

    let token = sessionStorage.getItem("token");
    
    if(token !== null){
        options.headers['X-Authorization'] = token;
    }

    if(body){
        options.headers['Content-Type'] = "application/json";
        options.body = JSON.stringify(body);
    }

    return options;
}

export async function get(url){
    return await request(url, getOptions());
}

export async function post(url, data){
    return await request(url, getOptions('post', data));
}

export async function put(url, data){
    return await request(url, getOptions('put', data));
}

export async function del(url){
    return await request(url, getOptions('delete'));
}

export async function login(email, password){
    const result = await post(host + "/users/login", {email, password});
    sessionStorage.setItem("token", result.accessToken);
    sessionStorage.setItem("personId", result._id);
    sessionStorage.setItem("email", result.email);
    updateUserNav();
}

export async function register(email, password){
    const result = await post(host + "/users/register", {email, password});
    sessionStorage.setItem("token", result.accessToken);
    sessionStorage.setItem("personId", result._id);
    sessionStorage.setItem("email", result.email);
    updateUserNav()
}

export async function logout(){
    await get(host + "/users/logout");
    sessionStorage.clear();
    updateUserNav();
}

function updateUserNav() {
    let token = sessionStorage.getItem("token");

    if (token == null) {
        document.querySelector("#user").style.display = "none";
        document.querySelector("#guest").style.display = "inline-block";
    } else {
        document.querySelector("#user").style.display = "inline-block";
        document.querySelector("#guest").style.display = "none";
    }

}

