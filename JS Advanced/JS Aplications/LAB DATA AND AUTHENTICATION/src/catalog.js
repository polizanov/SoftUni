function catalogFunctionality() {
    let guestElement = document.getElementById("guest");
    let userElement = document.getElementById("user");
    
    
    if(sessionStorage.authToken == undefined){
        generateLogInButtons(guestElement, userElement);
    } else {
        generateUserFunctionality(guestElement, userElement)
    }

    function generateLogInButtons(guest, user){
        guest.style.display = "inline-block";
        user.style.display = "none";
    }

    function generateUserFunctionality(guest, user){
        guest.style.display = "none";
        user.style.display = "inline-block";

        user.addEventListener("click", (e) => {
            if(e.target.tagName = "A" && e.target.textContent == "Logout"){
                sessionStorage.clear();
                window.location.pathname = 'index.html';
            }
        })
    }
}


function loadData() {
    let main = document.querySelector("main");

    fetch(`http://localhost:3030/data/recipes?select=_id%2Cname%2Cimg`)
        .then(r => r.json())
        .then(data => {
            main.innerHTML = "";
            Object.values(data)
                .forEach(obj => {
                    let articleElement = document.createElement("article");
                    articleElement.setAttribute("class", "preview")
                    let titleDiv = document.createElement("div");
                    titleDiv.setAttribute("class", "title");
                    let h2Element = document.createElement("h2");
                    h2Element.textContent = obj.name;
                    titleDiv.appendChild(h2Element);
                    articleElement.appendChild(titleDiv);

                    let smallDiv = document.createElement("div");
                    smallDiv.setAttribute("class", "small");
                    let img = document.createElement("img");
                    img.setAttribute("src", `${obj.img}`);
                    smallDiv.appendChild(img);
                    articleElement.appendChild(smallDiv);

                    main.appendChild(articleElement);
                });

            main.addEventListener("click", (e) => {
                console.log(e.target)
                if ( e.target.tagName == "H2") {
                    Object.values(data)
                        .forEach(obj => {
                            if (obj.name == e.target.textContent) {
                                let articleElement = e.target.parentElement.parentElement
                                generateAdditionalInfo(obj._id, articleElement)
                            }
                        })
                }
            })
        })

    function generateAdditionalInfo(id, article) {
        fetch(`http://localhost:3030/data/recipes/${id}`)
            .then(r => r.json())
            .then(data => {
                article.innerHTML = "";
                let htmlString = `
                    <h2>${data.name}</h2>
                    <div class="band">
                        <div class="thumb">
                            <img src="${data.img}">
                        </div>
                        <div class="ingredients">
                            <h3>Ingredients:</h3>
                            <ul>
                            ${data.ingredients.map(x => `<li>${x}</li>`).join("")}
                            </ul>
                        </div>
                    </div>
                    <div class="description">
                        <h3>Preparation:</h3>
                        ${data.steps.map(x => `<p>${x}</p>`).join("")}
                    </div>`

                article.removeAttribute("class")
                article.insertAdjacentHTML("beforeend", htmlString);
            })
    }

}

window.addEventListener("load", () => {
    catalogFunctionality();
    loadData();
})