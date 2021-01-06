function addItem() {
    let input = document.getElementById("newText").value;
    document.getElementById("newText").value = "";

    let ulElements = document.getElementById("items");
    let newLiElement = document.createElement("li");
    let newAElement = document.createElement("a");
    newAElement.textContent = "[Delete]";
    newAElement.setAttribute("href", "#")
    newLiElement.textContent = input;

    ulElements.appendChild(newLiElement);
    newLiElement.appendChild(newAElement);
    


    newAElement.addEventListener("click", (e) => {
        let parent = e.target.parentElement;
        parent.remove();
    })

}