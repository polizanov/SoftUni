import { showHome } from "./homePage.js";


let main;
let section;
export function setUpAddMovie(mainElement, sectionElement){
    main = mainElement;
    section = sectionElement;
    let addButton = section.querySelector("button");
  
    addButton.addEventListener("click", async (e) => {
        e.preventDefault();

            let title = main.querySelector("input[name='title']").value;
            let description = main.querySelector("textarea[name='description']").value;
            let img = main.querySelector("input[name='imageUrl']").value;
            let token = sessionStorage.getItem("token")

            if(title == "" || description == "" || img == ""){
                alert("The title, description and image shouldn’t be empty.");
                return
            }

            let request = await fetch('http://localhost:3030/data/movies', {
                method: 'post', 
                headers: {
                    "Content-Type": "application/json",
                    "X-Authorization": token
                },
                body: JSON.stringify({title, description, img})       
            })

            if(request.ok){
                clearFields(main);
                showHome();
            } else {
                alert("Something went wrong");
                return;
            }
    })
}

export function showAddMovie(){
    main.innerHTML = "";
    main.appendChild(section);
    //addMovie()
}

// async function addMovie(){
//     let token = sessionStorage.getItem("token")
//     main.querySelector("button")
//         .addEventListener("click", async (e) => {
//             e.preventDefault();

//             let title = main.querySelector("input[name='title']").value;
//             let description = main.querySelector("textarea[name='description']").value;
//             let img = main.querySelector("input[name='imageUrl']").value;

//             if(title == "" || description == "" || img == ""){
//                 alert("The title, description and image shouldn’t be empty.");
//                 return
//             }

//             let request = await fetch('http://localhost:3030/data/movies', {
//                 method: 'post', 
//                 headers: {
//                     "Content-Type": "application/json",
//                     "X-Authorization": token
//                 },
//                 body: JSON.stringify({title, description, img})       
//             })

//             if(request.ok){
//                 clearFields(main);
//                 showHome();
//             } else {
//                 alert("Something went wrong");
//                 return;
//             }
//         })

// }

function clearFields(main){
    main.querySelector("input[name='title']").value = "";
    main.querySelector("textarea[name='description']").value = "";
    main.querySelector("input[name='imageUrl']").value = "";

}