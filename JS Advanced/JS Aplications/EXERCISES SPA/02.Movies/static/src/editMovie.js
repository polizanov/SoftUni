import {showHome} from "./homePage.js"

let main;
let section;
let movieToken;

export function setUpEdit(mainElement, sectionElement){
    main = mainElement;
    section = sectionElement;
    let editButton = section.querySelector("button");
    editButton.addEventListener("click", async (e) => {
        e.preventDefault();

            let title = main.querySelector("input[name='title']").value;
            let description = main.querySelector("textarea[name='description']").value;
            let img = main.querySelector("input[name='imageUrl']").value;
            let token = sessionStorage.getItem("token")

            if(title == "" || description == "" || img == ""){
                alert("The title, description and image shouldn’t be empty.");
                return
            }

            let request = await fetch(`http://localhost:3030/data/movies/${movieToken}`, {
                method: 'put', 
                headers: {
                    "Content-Type": "application/json",
                    "X-Authorization": token
                },
                body: JSON.stringify({title, description, img})       
            })

            if(request.ok){
                clearFields();
                showHome();
            } else {
                alert("Something went wrong");
                return;
            }
    })
}

export function showEdit(movieId){
    main.innerHTML = "";
    main.appendChild(section);
    movieToken = movieId;
}

function clearFields(){
    main.querySelector("input[name='title']").value = "";
    main.querySelector("textarea[name='description']").value = "";
    main.querySelector("input[name='imageUrl']").value = "";
}
