function validate() {
    let input = document.getElementById("email");
    let pattern = /[a-z]+@[a-z]+.[a-z+]+/;
    
    input.addEventListener("change", (e) => {
        let currentEmail = e.target.value;
        if(!pattern.test(currentEmail)){
            input.className = "error"
        } else {
            input.className = "none"
        }
    })
}