function lockedProfile() {
    let mainElement = document.querySelector("#main")
    fetch(`http://localhost:3030/jsonstore/advanced/profiles`)
    .then(r => r.json())
    .then(data => {
        mainElement.innerHTML = "";
        let curUser = 1;

        Object.values(data)
        .forEach(curObj => {
            appendToDom(curObj, mainElement, curUser);
            curUser++
        })
    })

    mainElement.addEventListener("click", (e) => {
            let profileDiv = e.target.parentElement;
            let unlockButton = profileDiv.querySelector("input[value='unlock']");
            let displayDiv = profileDiv.querySelector("div");

            if (e.target.tagName == "BUTTON") {
                if (unlockButton.checked) {
                    if (e.target.textContent == "Show more") {
                        e.target.textContent = "Hide it";
                        displayDiv.style.display = "block"
                    } else if (e.target.textContent == "Hide it") {
                        e.target.textContent = "Show more"
                        displayDiv.style.display = "none";
                    }
                }
            }
    })

    function appendToDom(dataObj, mainElement, curUser){
        let divProfile = document.createElement("div");
        divProfile.setAttribute("class", "profile");
        mainElement.appendChild(divProfile);

        let imgElement = document.createElement("img");
        imgElement.setAttribute("src", "./iconProfile2.png");
        imgElement.setAttribute("class", "userIcon");
        divProfile.appendChild(imgElement);

        let firstLabelElement = document.createElement("label");
        firstLabelElement.textContent = "Lock";
        divProfile.appendChild(firstLabelElement);

        let firstInputElemment = document.createElement("input");
        firstInputElemment.setAttribute("type", "radio");
        firstInputElemment.setAttribute("name", `user${curUser}Locked`);
        firstInputElemment.setAttribute("value", "lock");
        firstInputElemment.checked = true;
        divProfile.appendChild(firstInputElemment);

        let secondLabelElement = document.createElement("label");
        secondLabelElement.textContent = "Unlock";
        divProfile.appendChild(secondLabelElement);

        let secondInputElemment = document.createElement("input");
        secondInputElemment.setAttribute("type", "radio");
        secondInputElemment.setAttribute("name", `user${curUser}Locked`);
        secondInputElemment.setAttribute("value", "unlock");
        divProfile.appendChild(secondInputElemment);

        let brElemment = document.createElement("br");
        let hrElement = document.createElement("hr");
        divProfile.appendChild(brElemment);
        divProfile.appendChild(hrElement);

        let thirdLabelElement = document.createElement("label");
        thirdLabelElement.textContent = "Username";
        divProfile.appendChild(thirdLabelElement);

        let thirdInputElemment = document.createElement("input");
        thirdInputElemment.setAttribute("type", "text");
        thirdInputElemment.setAttribute("name", `user${curUser}Username`);
        thirdInputElemment.setAttribute("value", `${dataObj.username}`);
        thirdInputElemment.disabled = true;
        thirdInputElemment.readOnly = true;
        divProfile.appendChild(thirdInputElemment);

        let hidenDiv = document.createElement("div");
        hidenDiv.setAttribute("id", `user${curUser}HiddenFields`);
        divProfile.appendChild(hidenDiv);
        hidenDiv.style.width = "100%";
        hidenDiv.style.display = "none"

        let secHrElement = document.createElement("hr");
        hidenDiv.appendChild(secHrElement);

        let firstNestedLabel = document.createElement("label");
        firstNestedLabel.textContent = "Email:";
        hidenDiv.appendChild(firstNestedLabel);

        let firstNestedInput = document.createElement("input");
        firstNestedInput.setAttribute("type", "email");
        firstNestedInput.setAttribute("name", `user${curUser}Email`);
        firstNestedInput.setAttribute("value", `${dataObj.email}`);
        firstNestedInput.disabled = true;
        firstNestedInput.readOnly = true;
        hidenDiv.appendChild(firstNestedInput);

        let secondNestedLabel = document.createElement("label");
        secondNestedLabel.textContent = "Age:";
        hidenDiv.appendChild(secondNestedLabel);

        let secondNestedInput = document.createElement("input");
        secondNestedInput.setAttribute("type", "email");
        secondNestedInput.setAttribute("name", `user${curUser}Age`);
        secondNestedInput.setAttribute("value", `${dataObj.age}`);
        secondNestedInput.disabled = true;
        secondNestedInput.readOnly = true;
        hidenDiv.appendChild(secondNestedInput);

        let buttonElement = document.createElement("button");
        buttonElement.textContent = "Show more";
        divProfile.appendChild(buttonElement);
    }
}