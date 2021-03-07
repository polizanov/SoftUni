import {showHome} from "./homePage.js"

let main;
let section;
export function setUpLogIn(mainElement, sectionElement){
    main = mainElement;
    section = sectionElement;

    let logInButton = section.querySelector("button");
    logInButton.addEventListener("click", async (e) => {
        e.preventDefault();

            let email = main.querySelector("input[name='email']").value;
            let password = main.querySelector("input[name='password']").value;

            if (email == "") {
                alert('The email input must be filled');
                clearFields();
                return;
            }

            if(password.length < 6){
                alert('The password should be at least 6 characters long');
            }
            

            let request = await fetch(`http://localhost:3030/users/login`, {
                method: 'post',
                headers: {"Content-type": "application.json"},
                body: JSON.stringify({email, password}),
            })

            if(request.ok){
                let response = await request.json();
                sessionStorage.setItem("token", `${response.accessToken}`);
                sessionStorage.setItem("personId", `${response._id}`);
                sessionStorage.setItem("name", `${response.email}`);
                clearFields();
                showHome();
            } else {
                alert("Email or Password are incorrect!");
                return;
            }
    })
}

export function showLogIn(){
    main.innerHTML = "";
    main.appendChild(section);
}

function clearFields() {
    main.querySelector("input[name='email']").value = "";
    main.querySelector("input[name='password']").value = "";
}