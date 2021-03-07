let main;
let section;
export function setUpHome(mainElement, sectionElement) {
    main = mainElement;
    section = sectionElement;
}

export function showHome() {
    main.innerHTML = "";
    main.appendChild(section);
    uppdateNavBar();
    getHomeMovies();
}

async function getHomeMovies() {
    let moviesDiv = document.getElementById("moviesElement");
    moviesDiv.innerHTML = "";

    let request = await fetch('http://localhost:3030/data/movies')
    if (request.ok) {
        let data = await request.json();
        renderMovies(data, moviesDiv);
    } else {
        alert('Something went wrong!')
    }

}


function renderMovies(data, moviesDiv) {
    data.forEach(movie => {
        let cardDiv = document.createElement("div");
        cardDiv.setAttribute("class", "card mb-4");

        cardDiv.innerHTML = `
    <img class="card-img-top" src=${movie.img}
        alt="Card image cap" width="400">
    <div class="card-body">
        <h4 class="card-title">${movie.title}</h4>
    </div>
    <div class="card-footer">
        <a href="#/details/6lOxMFSMkML09wux6sAF">
            <button type="button" class="btn btn-info" id="${movie._id}">Details</button>
        </a>
    </div>`

        moviesDiv.appendChild(cardDiv);
    });
}

function uppdateNavBar() {
    let emailName = sessionStorage.getItem("name");
    let emailToken = sessionStorage.getItem("token");


    if (emailToken == null) {
        document.getElementById("happyPath").style.display = "none";
        document.getElementById("logout").style.display = "none";
        document.getElementById("login").style.display = "block";
        document.getElementById("register").style.display = "block";
        document.getElementById("addMovieButton").style.display = "none"
    } else {
        document.getElementById("happyPath").style.display = "block";
        document.getElementById("happyPath").textContent = `Wellcome ${emailName}`;
        document.getElementById("logout").style.display = "block";
        document.getElementById("login").style.display = "none";
        document.getElementById("register").style.display = "none";
        document.getElementById("addMovieButton").style.display = "block"
    }
}