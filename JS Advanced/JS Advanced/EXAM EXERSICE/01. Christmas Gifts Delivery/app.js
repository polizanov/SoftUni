function solution() {
    let inputNameElement = document.querySelector("input[placeholder='Gift name']");
    let liElemments = []
    let ulElements = document.querySelectorAll("section[class='card'] ul");

    sectionElement = document
        .getElementsByClassName("container")[0]
        .addEventListener("click", (e) => {
            e.preventDefault();
            if (e.target.tagName == "BUTTON" && e.target.textContent == "Add gift") {
                let curLi = document.createElement("li");
                curLi.setAttribute("class", "gift");
                curLi.textContent = inputNameElement.value;

                let curSentBtn = document.createElement("button");
                curSentBtn.setAttribute("id", "sendButton");
                curSentBtn.textContent = "Send";

                let curDiscardBtn = document.createElement("button");
                curDiscardBtn.setAttribute("id", "discardButton");
                curDiscardBtn.textContent = "Discard";

                curLi.appendChild(curSentBtn);
                curLi.appendChild(curDiscardBtn);

                liElemments.push(curLi);
                inputNameElement.value = "";

                liElemments
                    .sort((a, b) => a.textContent.localeCompare(b.textContent))
                    .forEach(li => {
                        document.querySelector("section[class='card'] ul")
                            .appendChild(li);
                    })
            }

            if (e.target.tagName == "BUTTON" && e.target.textContent == "Send") {
                let curLi = e.target.parentElement;
                Array.from(curLi.children).map(btn => btn.remove());
                ulElements[1].appendChild(curLi)
                liElemments = liElemments.filter(x => x.textContent !== curLi.textContent);
            }

            if (e.target.tagName == "BUTTON" && e.target.textContent == "Discard") {
                let curLi = e.target.parentElement;
                Array.from(curLi.children).map(btn => btn.remove());
                ulElements[2].appendChild(curLi)
                liElemments = liElemments.filter(x => x.textContent !== curLi.textContent);
            }
        })

}