function calc() {
    let getInputElements = document.querySelectorAll("input[type='text']");
    let sum = Number(getInputElements[0].value) + Number(getInputElements[1].value);
    getInputElements[2].value = sum;
   
}
