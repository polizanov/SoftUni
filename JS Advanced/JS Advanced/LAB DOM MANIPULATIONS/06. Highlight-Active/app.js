function focus() {
    [...document.querySelectorAll("div div input[type='text']")]
        .forEach(element => {
            element.addEventListener("focus", (e) => {
                e.target.parentElement.setAttribute("class", "focused");
            })

            element.addEventListener("blur", (e) => {
                e.target.parentElement.removeAttribute("class");
            })
        })
}
