import {showHome} from "./homePage.js"

let main;
let section;
export function setUpRegister(mainElement, sectionElement) {
    main = mainElement;
    section = sectionElement;
    let registerButton = section.querySelector("button");
    registerButton.addEventListener("click", async (e) => {
        e.preventDefault();

            let email = main.querySelector("input[name='email']").value;
            let password = main.querySelector("input[name='password']").value;
            let repass = main.querySelector("input[name='repeatPassword']").value;

            if (email == "") {
                alert('The email input must be filled');
                clearFields();
                return;
            }

            if (password != repass) {
                alert("The repeat password should be equal to the password");
                clearFields();
                return;
            }

            if(password.length < 6){
                alert('The password should be at least 6 characters long');
            }
            

            let request = await fetch(`http://localhost:3030/users/register`, {
                method: 'post',
                headers: {"Content-type": "application.json"},
                body: JSON.stringify({email, password}),
            })

            if(request.ok){
                let response = await request.json();
                sessionStorage.setItem("token", `${response.accessToken}`);
                sessionStorage.setItem("personId", `${response._id}`);
                sessionStorage.setItem("name", `${response.email}`);
                showHome();
            } else {
                alert("Something went wrong!");
                return
            }
    })
}

export function showRegister() {
    main.innerHTML = "";
    main.appendChild(section);
}

function clearFields() {
    main.querySelector("input[name='email']").value = "";
    main.querySelector("input[name='password']").value = "";
    main.querySelector("input[name='repeatPassword']").value = "";
}