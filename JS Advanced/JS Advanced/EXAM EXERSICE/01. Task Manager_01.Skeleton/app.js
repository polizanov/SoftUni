function solve() {
    let taskInputElement = document.getElementById("task");
    let descriptionInpuElement = document.getElementById("description");
    let dateInputElement = document.getElementById("date");
    let downOrangeDiv = document
        .querySelector("h1[class='orange']").parentElement.parentElement.lastElementChild;

    document.getElementById("add")
        .addEventListener("click", (e) => {
            e.preventDefault();
            if (taskInputElement.value == "" || descriptionInpuElement.value == "" || dateInputElement.value == "") {
                taskInputElement.value = ""
                descriptionInpuElement.value = "";
                dateInputElement.value = ""
                return;
            }

            let openHTMLString = `<article>
            <h3>${taskInputElement.value}</h3>
            <p>Description: ${descriptionInpuElement.value}</p>
            <p>Due Date: ${dateInputElement.value}</p>
            <div class="flex">
                <button class="green">Start</button>
                <button class="red">Delete</button>
            </div>
        </article>`;

            taskInputElement.value = ""
            descriptionInpuElement.value = "";
            dateInputElement.value = ""



            downOrangeDiv.insertAdjacentHTML("beforeend", openHTMLString)
        })

    downOrangeDiv.addEventListener("click", (e) => {
        if (e.target.tagName == "BUTTON") {
            let curArticle = e.target.parentElement.parentElement;
            if (e.target.textContent == "Delete") {
                curArticle.remove()
            } else if (e.target.textContent == "Start") {
                let curElement = curArticle.querySelector("div[class='flex']");

                curElement.lastElementChild.textContent = "Finish";
                curElement.lastElementChild.setAttribute("class", "orange");

                curElement.firstElementChild.textContent = "Delete";
                curElement.firstElementChild.setAttribute("class", "red");

                document.getElementById("in-progress").appendChild(curArticle);
            }
        }
    })

    document.getElementById("in-progress").addEventListener("click", (e) => {
        let curArticle = e.target.parentElement.parentElement;
        if (e.target.tagName == "BUTTON") {
            if (e.target.textContent == "Delete") {
                curArticle.remove();
            } else if (e.target.textContent == "Finish") {
                curArticle.querySelector("div[class='flex']").remove();
                document.querySelector("h1[class='green']").parentElement
                    .parentElement
                    .lastElementChild.appendChild(curArticle)
            }
            return;
        }
    })
}