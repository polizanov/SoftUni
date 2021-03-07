import { showHome } from "./homePage.js"

let main;
let section;
export function setUpCreate(mainElement, sectionElement) {
    main = mainElement;
    section = sectionElement;

    let postButton = document.querySelector(".new-topic-buttons")
    post(postButton)
}

export function showCreate() {
    main.innerHTML = "";
    main.appendChild(section);
}

function post(button) {
    button.addEventListener("click", async (e) => {
        let form = e.target.parentElement.parentElement;
        if (e.target.className == "public") {
            let title = form.querySelector("#topicName").value;
            let username = form.querySelector("#username").value;
            let post = form.querySelector("#postText").value;

            if (title == "" || username == "" || post == "") {
                alert("Fields connot be empty!");
                return;
            }

            let request = await fetch('http://localhost:3030/jsonstore/collections/myboard/posts', {
                method: "post",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ title, username, post }),
            });

            if (request.ok) {
                clearFields()
                showHome();
            } else {
                alert("Something went wrong!")
            }
        } else if (e.target.className == "cancel") {
            clearFields();
        }

        function clearFields() {
            form.querySelector("#topicName").value = "";
            form.querySelector("#username").value = "";
            form.querySelector("#postText").value = "";
        }
    })
}