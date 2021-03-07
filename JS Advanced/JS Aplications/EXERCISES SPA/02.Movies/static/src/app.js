import { setUpHome, showHome } from "./homePage.js";
import { setUpDetails, showDetails } from "./details.js";
import { setUpAddMovie, showAddMovie } from "./addMovie.js";
import { setUpEdit, showEdit } from "./editMovie.js";
import { setUpLogIn, showLogIn } from "./logIn.js";
import { setUpRegister, showRegister } from "./register.js";



async function logOut() {
    let token = sessionStorage.getItem("token");

    let request = await fetch('http://localhost:3030/users/logout', {
        method: 'post',
        headers: {
            "Content-Type": "application/json",
            "X-Authorization": token
        }
    })

    if (request.ok) {
        sessionStorage.clear();
        showHome();
    }
}

window.addEventListener("load", () => {

    let main = document.querySelector("main");
    console.log(main)

    setUpHome(main, document.getElementById("home-page"));
    setUpDetails(main, document.getElementById("movie-example"));
    setUpAddMovie(main, document.getElementById("add-movie"));
    setUpEdit(main, document.getElementById("edit-movie"));
    setUpLogIn(main, document.getElementById("form-login"));
    setUpRegister(main, document.getElementById("form-sign-up"))

    let pages = {
        "home": showHome,
        "logout": logOut,
        "login": showLogIn,
        "register": showRegister,
        "addMovieButton": showAddMovie,
    }

    showHome();
    setEventForNavigation(pages);


})

function setEventForNavigation(pages) {
    document.getElementById("container").addEventListener("click", (e) => {
        e.preventDefault();
        if (e.target.tagName == "A") {
            if (e.target.textContent == "Delete") {
                let movieId = document.getElementById("hiddenIdMovie").textContent;
                deleteMovie(movieId);
            }

            if (e.target.textContent == "Edit") {
                let movieId = document.getElementById("hiddenIdMovie").textContent;
                showEdit(movieId);
            }

            if (e.target.textContent == "Like") {
                let movieId = document.getElementById("hiddenIdMovie").textContent;
                likeMovie(movieId, e.target);
            }

            let handler = pages[e.target.id];
            if (typeof handler == "function") {
                handler();
            }
        }

        if (e.target.tagName == "BUTTON" && e.target.textContent == "Details") {
            showDetails(e.target.id)
        }
    })

}

async function deleteMovie(movieId) {
    let token = sessionStorage.getItem("token");
    let request = await fetch(`http://localhost:3030/data/movies/${movieId}`, {
        method: 'delete',
        headers: {
            "Content-Type": "application/json",
            "X-Authorization": token
        },
    })

    if (request.ok) {
        console.log(request)
        showHome();
    } else {
        alert("Something went wrong");
        return;
    }
}

async function likeMovie(movieId, button) {
    
}

