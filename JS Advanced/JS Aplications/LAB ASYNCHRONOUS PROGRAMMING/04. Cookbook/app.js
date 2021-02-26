function loadData() {
    let main = document.querySelector("main");

    fetch(`http://localhost:3030/jsonstore/cookbook/recipes`)
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
                if (e.target.tagName == "ARTICLE") {
                    let titleText = [...e.target.children][0].textContent
                    Object.values(data)
                        .forEach(obj => {
                            if (obj.name == titleText) {
                                generateAdditionalInfo(obj._id, e.target)
                            }
                        })
                }
            })
        })

    function generateAdditionalInfo(id, article) {
        fetch(`http://localhost:3030/jsonstore/cookbook/details/${id}`)
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

window.addEventListener("load", loadData);

