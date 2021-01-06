function addItem() {
    let input = document.getElementById("newItemText").value;
    document.getElementById("newItemText").value = "";


    let newLiElement = document.createElement("li");
    newLiElement.textContent = input;
    document.getElementById("items")
        .appendChild(newLiElement);

}