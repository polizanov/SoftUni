function solve() {
    let nameAddMovieElement = document.querySelector("#container input[placeholder='Name']");
    let hallAddMovieElement = document.querySelector("#container input[placeholder='Hall']");
    let priceAddMovieElement = document.querySelector("#container input[placeholder='Ticket Price']");
    let onScreenBtnElement = document.querySelector("#container button");

    onScreenBtnElement.addEventListener("click", (e) => {
        e.preventDefault()
        if (nameAddMovieElement.value == "" || hallAddMovieElement.value == "" || !Number(priceAddMovieElement.value)) {
            nameAddMovieElement.value = "";
            hallAddMovieElement.value = "";
            priceAddMovieElement.value = ""
            return;
        }

        let price = Number(priceAddMovieElement.value)


        let movieLiElement = document.createElement("li");
        let movieSpanElement = document.createElement("span");
        movieSpanElement.textContent = nameAddMovieElement.value;
        let movieStrongElement = document.createElement("strong");
        movieStrongElement.textContent = `Hall: ${hallAddMovieElement.value}`

        let movieDivElement = document.createElement("div");

        let movieNestedStrongElement = document.createElement("strong");
        movieNestedStrongElement.textContent = `${price.toFixed(2)}`;
        let movieInputElement = document.createElement("input")
        movieInputElement.setAttribute("placeholder", "Tickets Sold");
        let archiveBtn = document.createElement("button");
        archiveBtn.textContent = "Archive"

        movieLiElement.appendChild(movieSpanElement);
        movieLiElement.appendChild(movieStrongElement);
        movieLiElement.appendChild(movieDivElement);

        movieDivElement.appendChild(movieNestedStrongElement);
        movieDivElement.appendChild(movieInputElement);
        movieDivElement.appendChild(archiveBtn);

        document.querySelector("#movies ul").appendChild(movieLiElement);

        archiveBtn.addEventListener("click", (e) => {
            let inputField = e.target.parentElement.querySelector("input").value;
            if (inputField !== "" && Number(inputField)) {
                let name = e.target.parentElement.parentElement.querySelector("span").textContent;
                let price = Number(e.target.parentElement.querySelector("strong").textContent) * Number(inputField);


                let liElement = document.createElement("li");
                let spanElement = document.createElement("span");
                let strongElement = document.createElement("strong");
                let btnDeleteElement = document.createElement("button");

                spanElement.textContent = name;
                strongElement.textContent = `Total amount: ${price.toFixed(2)}`;
                btnDeleteElement.textContent = "Delete";

                liElement.appendChild(spanElement);
                liElement.appendChild(strongElement);
                liElement.appendChild(btnDeleteElement);

                document.querySelector("#archive ul").appendChild(liElement)
                e.target.parentElement.parentElement.remove();

                btnDeleteElement.addEventListener("click", (e) => {
                    e.target.parentElement.remove();
                })

                let archive = liElement.parentElement.parentElement;
                archive.addEventListener("click", (e) => {
                    if(e.target.textContent == "Clear"){
                        Array.from(document.querySelectorAll("#archive ul li"))
                            .forEach(li => li.remove())
                    } 
                })
            }
        })

        nameAddMovieElement.value = "";
        hallAddMovieElement.value = "";
        priceAddMovieElement.value = "";
    })


}


