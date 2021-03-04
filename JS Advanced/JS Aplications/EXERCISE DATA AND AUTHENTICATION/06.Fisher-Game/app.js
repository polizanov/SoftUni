function attachEvents() {
    let token = sessionStorage.token;
    if (token == undefined) {
        logOutUser();
    } else {
        logInUser(token);
    }

    document.querySelector("body")
        .addEventListener("click", (e) => {
            if (e.target.tagName == "BUTTON" && e.target.textContent == "Load") {
                displayCatches();
            }

            if (e.target.tagName == "BUTTON" && e.target.textContent == "Add") {
                if (token == undefined) {
                    alert("Access denied");
                    return;
                }

                let form = document.getElementById("addForm");

                let anglerValue = form.querySelector(".angler").value;
                let weigthValue = form.querySelector(".weight").value;
                let speciesValue = form.querySelector(".species").value;
                let locationValue = form.querySelector(".location").value;
                let baitValue = form.querySelector(".bait").value;
                let captureValue = form.querySelector(".captureTime").value;

                addData(anglerValue, baitValue, captureValue, locationValue, speciesValue, weigthValue, token);
            }

            if (e.target.tagName == "BUTTON" && e.target.textContent == "Update"){
                if (token == undefined) {
                    alert("Access denied");
                    return;
                }

                let parentDiv = e.target.parentElement;

                let postId = parentDiv.querySelector("#curPost").textContent;

                let anglerValue = parentDiv.querySelector(".angler").value;
                let weigthValue = parentDiv.querySelector(".weight").value;
                let speciesValue = parentDiv.querySelector(".species").value;
                let locationValue = parentDiv.querySelector(".location").value;
                let baitValue = parentDiv.querySelector(".bait").value;
                let captureValue = parentDiv.querySelector(".captureTime").value;

            
                editData(anglerValue, baitValue, captureValue, locationValue, speciesValue, weigthValue, postId)
            }

            if (e.target.tagName == "BUTTON" && e.target.textContent == "Delete"){
                if (token == undefined) {
                    alert("Access denied");
                    return;
                }

                let parentDiv = e.target.parentElement;

                let postId = parentDiv.querySelector("#curPost").textContent;

                deleteData(postId);
            }

        })

    async function displayCatches() {
        clearFields();
        let request = await fetch('http://localhost:3030/data/catches');

        if (request.ok) {
            document.getElementById("catches").innerHTML = ""
        } else {
            alert("Something went wrong.");
            return;
        }

        let data = await request.json();

        data.forEach(curObj => {
            renderCatch(curObj);
        });
    }

    function renderCatch(data) {
        let catchDiv = document.createElement("div");

        let anglerLabel = document.createElement("label");
        anglerLabel.textContent = "Angler";
        catchDiv.appendChild(anglerLabel);

        let anglerInput = document.createElement("input");
        anglerInput.setAttribute("type", "text");
        anglerInput.setAttribute("class", "angler");
        anglerInput.setAttribute("value", `${data.angler}`);
        catchDiv.appendChild(anglerInput);

        let firstHr = document.createElement("hr");
        catchDiv.appendChild(firstHr);

        let weightLabel = document.createElement("label");
        weightLabel.textContent = "Weight";
        catchDiv.appendChild(weightLabel);

        let weightInput = document.createElement("input");
        weightInput.setAttribute("type", "number");
        weightInput.setAttribute("class", "weight");
        weightInput.setAttribute("value", `${data.weight}`);
        catchDiv.appendChild(weightInput);

        let secondHr = document.createElement("hr");
        catchDiv.appendChild(secondHr);

        let speceiesLabel = document.createElement("label");
        speceiesLabel.textContent = "Species";
        catchDiv.appendChild(speceiesLabel);

        let speceiesInput = document.createElement("input");
        speceiesInput.setAttribute("type", "text");
        speceiesInput.setAttribute("class", "species");
        speceiesInput.setAttribute("value", `${data.species}`);
        catchDiv.appendChild(speceiesInput);

        let thirdHr = document.createElement("hr");
        catchDiv.appendChild(thirdHr);

        let locationLabel = document.createElement("label");
        locationLabel.textContent = "Location";
        catchDiv.appendChild(locationLabel);

        let locationInput = document.createElement("input");
        locationInput.setAttribute("type", "text");
        locationInput.setAttribute("class", "location");
        locationInput.setAttribute("value", `${data.location}`);
        catchDiv.appendChild(locationInput);

        let forthHr = document.createElement("hr");
        catchDiv.appendChild(forthHr);

        let baitLabel = document.createElement("label");
        baitLabel.textContent = "Bait";
        catchDiv.appendChild(baitLabel);

        let baitInput = document.createElement("input");
        baitInput.setAttribute("type", "text");
        baitInput.setAttribute("class", "bait");
        baitInput.setAttribute("value", `${data.bait}`);
        catchDiv.appendChild(baitInput);

        let fifthHr = document.createElement("hr");
        catchDiv.appendChild(fifthHr);

        let captureLabel = document.createElement("label");
        captureLabel.textContent = "Capture Time";
        catchDiv.appendChild(captureLabel);

        let captureInput = document.createElement("input");
        captureInput.setAttribute("type", "number");
        captureInput.setAttribute("class", "captureTime");
        captureInput.setAttribute("value", `${data["captureTime "]}`);
        catchDiv.appendChild(captureInput);
        console.log(captureInput)

        let sixthHr = document.createElement("hr");
        catchDiv.appendChild(sixthHr);

        let updateBtn = document.createElement("button");
        updateBtn.style.disabled = true;
        updateBtn.setAttribute("class", "update");
        updateBtn.textContent = "Update";
        catchDiv.appendChild(updateBtn);

        let deleteBtn = document.createElement("button");
        deleteBtn.style.disabled = true;
        deleteBtn.setAttribute("class", "delete");
        deleteBtn.textContent = "Delete";
        catchDiv.appendChild(deleteBtn);

        let hiddenDiv = document.createElement("div");
        hiddenDiv.textContent = data._id;
        hiddenDiv.style.display = "none";
        hiddenDiv.setAttribute("id", "curPost")
        catchDiv.appendChild(hiddenDiv);

        catchDiv.setAttribute("class", "catch");
        document.getElementById("catches")
            .appendChild(catchDiv);

    }

    async function addData(angler, bait, captureTime, location, species, weight) {
        let request = await fetch('http://localhost:3030/data/catches', {
            method: 'post',
            headers: {
                "Content-type": "application/json",
                "X-Authorization": `${token}`,
            },
            body: JSON.stringify({ angler, weight, species, location, bait, "captureTime ": captureTime }),
        })

        if (request.ok) {
            alert("Your catch was sent");
            displayCatches();
            return;
        } else {
            alert("Your catch wasn't sent");
            return;
        }
    }

    async function editData(angler, bait, captureTime, location, species, weight, id){
        let request = await fetch(`http://localhost:3030/data/catches/${id}`, {
            method: 'put',
            headers: {
                "Content-type": "application/json",
                "X-Authorization": `${token}`
            },
            body: JSON.stringify({ angler, weight, species, location, bait, "captureTime ": captureTime }),
        })

        if (request.ok) {
            alert("Your catch was updated");
            displayCatches();
            return;
        } else {
            console.log(request)
            alert("Your catch wasn't updated");
            return;
        }
    }

    async function deleteData(id){
        let request = await fetch(`http://localhost:3030/data/catches/${id}`, {
            method: 'delete',
            headers: {
                "X-Authorization": `${token}`
            },
        })

        if (request.ok) {
            alert("Your catch was deleted");
            displayCatches();
            return;
        } else {
            console.log(request)
            alert("Your catch wasn't deleted");
            return;
        }
    }
    

    function logOutUser() {
        let addButton = document.querySelector(".add");
        let updateButtonsArr = [...document.querySelectorAll(".catch .update")];
        let deleteButttonArr = [...document.querySelectorAll(".catch .delete")];
        addButton.style.disabled = true;
        addButton.style.color = "gray";

        updateButtonsArr.forEach(btn => {
            btn.style.disabled = true;
            btn.style.color = "gray";
        })

        deleteButttonArr.forEach(btn => {
            btn.style.disabled = true;
            btn.style.color = "gray";
        })

        console.log(document.getElementById('guest'))
        document.getElementById('guest').innerHTML = ' <a href="login.html">Login</a>'
    }

    function logInUser() {
        let logOutButton = document.getElementById('guest');
        let addButton = document.querySelector(".add");
        let updateButtonsArr = [...document.querySelectorAll(".catch .update")];
        let deleteButttonArr = [...document.querySelectorAll(".catch .delete")];

        addButton.removeAttribute("disabled");
        addButton.style.color = "black";


        updateButtonsArr.forEach(btn => {
            btn.removeAttribute("disabled");
            btn.style.color = "black";
        })

        deleteButttonArr.forEach(btn => {
            btn.removeAttribute("disabled");
            btn.style.color = "black";
        })

        logOutButton.innerHTML = ' <a>Log out</a>'
        logOutButton.addEventListener("click", () => {
            sessionStorage.clear();
            logOutButton.innerHTML = '<a href="login.html">Login</a>'
            window.location.pathname = 'index.html';
        })

    }

    function clearFields() {
        let form = document.getElementById("addForm");
        form.querySelector(".angler").value = "";
        form.querySelector(".weight").value = "";
        form.querySelector(".species").value = "";
        form.querySelector(".location").value = ""
        form.querySelector(".bait").value = ""
        form.querySelector(".captureTime").value = ""
    }
}

attachEvents();

