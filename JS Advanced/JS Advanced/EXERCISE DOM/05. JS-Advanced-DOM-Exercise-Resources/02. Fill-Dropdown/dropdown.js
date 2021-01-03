function addItem() {
    let input = document.getElementById("newItemText").value;
    let value = document.getElementById("newItemValue").value;

    let curDropDown = document.createElement("option");
    curDropDown.setAttribute("value", value);
    curDropDown.innerText = input;
    document.getElementById("menu")
        .appendChild(curDropDown);

    document.getElementById("newItemText").value = "";
    document.getElementById("newItemValue").value = "";
}