function solution() {
    fetch(`http://localhost:3030/jsonstore/advanced/articles/list`)
        .then(r => r.json())
        .then(headersObj => {
            generateHeaders(headersObj);
        })

    function generateHeaders(headersObj) {
        let mainSection = document.querySelector("#main");
        Object.values(headersObj)
            .forEach(obj => {
                rendrerDom(obj, mainSection);
            });

        mainSection.addEventListener("click", (e) => {
            let currenAcordionElementArr = [...e.target.parentElement.parentElement.children];
            if (e.target.tagName == "BUTTON") {
                if (e.target.textContent == "More") {
                    if(currenAcordionElementArr.length > 1){
                        controlAdditionalInformation(e.target)
                        return;
                    }
                    getAdditionalInformation(e.target.id, e.target);
                } else if(e.target.textContent == "Less"){
                    controlAdditionalInformation(e.target)
                }
            }
        })
    }

    function rendrerDom(obj, mainSection) {
        let acordionDiv = document.createElement("div");
        acordionDiv.setAttribute("class", "accordion");

        let headDiv = document.createElement("div");
        headDiv.setAttribute("class", "head");
        acordionDiv.appendChild(headDiv);

        let spanElement = document.createElement("span");
        spanElement.textContent = obj.title;
        headDiv.appendChild(spanElement);

        let buttonElement = document.createElement("button");
        buttonElement.setAttribute("class", "button");
        buttonElement.setAttribute("id", `${obj._id}`);
        buttonElement.textContent = "More";
        headDiv.appendChild(buttonElement);

        mainSection
            .appendChild(acordionDiv);
    }

    function getAdditionalInformation(id, target) {
        fetch(`http://localhost:3030/jsonstore/advanced/articles/details/${id}`)
            .then(r => r.json())
            .then(obj => {
                let currenAcordionElement = target.parentElement.parentElement;
                renderAdditionalInformation(currenAcordionElement, obj, target);
            })
    }

    function renderAdditionalInformation(currenAcordionElement, obj, target){
        let extraElement = document.createElement("div");
        extraElement.setAttribute("class", "extra");

        let pElement = document.createElement("p");
        pElement.textContent = obj.content;
        extraElement.appendChild(pElement);
        currenAcordionElement.appendChild(extraElement);
        controlAdditionalInformation(target);
    }

    function controlAdditionalInformation(target){
        let extraDiv = target.parentElement.parentElement.querySelector(".extra");
        if(target.textContent == "More"){
            target.textContent = "Less"
            extraDiv.style.display = "block";
        } else if(target.textContent == "Less"){
            target.textContent = "More"
            extraDiv.style.display = "none";
        }
        
    }
}

document.querySelector("body")
    .addEventListener("load", solution())