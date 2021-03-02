function registerFunctionality() {
    document.querySelector("main article form")
        .addEventListener("submit", (e) => {
            e.preventDefault();

            let email = document.querySelector("input[name='email']");
            let password = document.querySelector("input[name='password']");
            let repeatPassword = document.querySelector("input[name='rePass']");

            // console.log(email);
            // console.log(password);
            // console.log(repeatPassword)

            if(email.value == "" || password.value == ""){
                alert("Invalid E-mail amd Password!");
                return
            } else if(password.value !== repeatPassword.value){
                alert("The Password and Repeat must be indential!");
                return;
            }

            sentRegister(email.value, password.value)
        })

        async function sentRegister(email, password){
            let data = {
                email,
                password
            }

            let request = await fetch("http://localhost:3030/users/register", {
                method: 'post',
                headers: {'Content-type': 'application/json'},
                body: JSON.stringify(data)
            })
            
            if(request.ok){
                let response = await request.json();
                sessionStorage.setItem("authToken", response.accessToken);
                window.location.pathname = 'index.html';
            } else {
                alert(`Error: ${request.statusText}`);
                return;
            }
        }
}

window.addEventListener("load", registerFunctionality());