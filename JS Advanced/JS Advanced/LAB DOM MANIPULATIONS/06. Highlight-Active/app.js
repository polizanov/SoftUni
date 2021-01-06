function focus() {
    let firstInputElement = document.getElementsByTagName("input")[0];
    let secondInputElement = document.getElementsByTagName("input")[1];
    let thirdInputElement = document.getElementsByTagName("input")[2];
    let forthInputElement = document.getElementsByTagName("input")[3];

    firstInputElement.addEventListener("focus", () => {
        let parent = firstInputElement.parentElement;
        parent.setAttribute("class", "focused")
    });

    firstInputElement.addEventListener("blur", () => {
        let parent = firstInputElement.parentElement;
        parent.removeAttribute("class")
    });

    secondInputElement.addEventListener("focus", () => {
        let parent = secondInputElement.parentElement;
        parent.setAttribute("class", "focused")
    });

    secondInputElement.addEventListener("blur", () => {
        let parent = secondInputElement.parentElement;
        parent.removeAttribute("class")
    });

    thirdInputElement.addEventListener("focus", () => {
        let parent = thirdInputElement.parentElement;
        parent.setAttribute("class", "focused")
    });

    thirdInputElement.addEventListener("blur", () => {
        let parent = thirdInputElement.parentElement;
        parent.removeAttribute("class")
    });

    forthInputElement.addEventListener("focus", () => {
        let parent = forthInputElement.parentElement;
        parent.setAttribute("class", "focused")
    });

    forthInputElement.addEventListener("blur", () => {
        let parent = forthInputElement.parentElement;
        parent.removeAttribute("class")
    });


    
}