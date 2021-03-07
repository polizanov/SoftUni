import {showEdit} from "./editMovie.js"
import {showHome} from "./homePage.js"

let main;
let section;
export function setUpDetails(mainElement, sectionElement) {
    main = mainElement;
    section = sectionElement;
}

export function showDetails(id) {
    main.innerHTML = "";
    section.innerHTML = "";
    getMovieDetails(section, id)
    main.appendChild(section);
}

async function getMovieDetails(section, id) {
    let request = await fetch(`http://localhost:3030/data/movies/${id}`);

    if (request.ok) {
        let data = await request.json();
        renderMovie(data, section);
        generateButtons();
    } else {
        alert("Something went wrong!");
    }
}

function renderMovie(data, section) {
    let containerDiv = document.createElement("div");
    containerDiv.setAttribute("class", "container");

    containerDiv.innerHTML = `
    <div class="row bg-light text-dark">
    <h1>Movie title: ${data.title}</h1>

    <div class="col-md-8">
        <img class="img-thumbnail" src="${data.img}"
            alt="Movie">
    </div>
    <div class="col-md-4 text-center">
        <h3 class="my-3 ">Movie Description</h3>
        <p>${data.description}</p>
        <a class="btn btn-danger" id="deleteDetailsButton" href="#">Delete</a>
        <a class="btn btn-warning" id="editDeatilsButton" href="#">Edit</a>
        <a class="btn btn-primary" id="likeButton" href="#">Like</a>
        <span id="hiddenId">${data._ownerId}</span>
        <span id="hiddenIdMovie">${data._id}</span>
        <span class="enrolled-span" id="forLike">Liked 1</span>
    </div>
</div>`
// бутоните с ид -> hiddenId и hiddenIdMovie ca скрити в css-a

    section.appendChild(containerDiv);
}


let userId;
let movieUser;
let movieId;

function generateButtons() {
    movieUser = document.getElementById("hiddenId").textContent;
    userId = sessionStorage.getItem("personId");
    movieId = document.getElementById("hiddenIdMovie").textContent;

    
    if (userId == null) {
        document.getElementById("deleteDetailsButton").style.display = "none";
        document.getElementById("editDeatilsButton").style.display = "none";
        document.getElementById("likeButton").style.display = "none";
    } else if (movieUser == userId) {
        document.getElementById("likeButton").style.display = "none";
    } else {
        document.getElementById("deleteDetailsButton").style.display = "none";
        document.getElementById("editDeatilsButton").style.display = "none";
    }
}


