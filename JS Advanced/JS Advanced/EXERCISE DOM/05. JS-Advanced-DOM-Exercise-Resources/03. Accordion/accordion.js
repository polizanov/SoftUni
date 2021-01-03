function toggle() {
    let buttonData = document.getElementsByClassName("button")[0].textContent;
    let content = document.getElementById("extra");

    if(buttonData == "More"){
        document.getElementsByClassName("button")[0].textContent = "Less";
        content.style.display = "block";
    } else if(buttonData == "Less"){
        document.getElementsByClassName("button")[0].textContent = "More";
        content.style.display = "none";
    }
}