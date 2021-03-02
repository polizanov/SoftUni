function logInFunctionality(){
    document.querySelector("article form")
        .addEventListener("submit", (e) => {
            e.preventDefault();

            let emailElement = document.querySelector("input[name='email']");
            let passwordElement = document.querySelector("input[name='password']");
            
            logIn(emailElement.value, passwordElement.value);
        })

    async function logIn(email, password){
        let request = await fetch(`http://localhost:3030/users/login`, {
            method: 'post',
            headers: { 'Content-type': "application/json" },
            body: JSON.stringify({email, password})
        }) 

        if(request.status == 200){
            let response = await request.json();
            sessionStorage.setItem("authToken", response.accessToken)
            window.location.pathname = 'index.html';
            return;
        } 

        alert("Access denied!");
        document.querySelector("input[name='password']").value = "";
        return;

        // let response = await request.json();
        // console.log(response)
    }
}

window.addEventListener("load", logInFunctionality())