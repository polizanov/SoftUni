function attachGradientEvents() {
    let gradientElement = document.getElementById("gradient");
    let resultElement = document.getElementById("result");

    gradientElement.addEventListener("mousemove", (e) => {
        let position = e.offsetX / (e.target.clientWidth - 1)
        let pursent = Math.trunc(position * 100);
        resultElement.textContent = `${pursent}%`
    })

    gradientElement.addEventListener("mouseout", () => {
        resultElement.textContent = "";
    })

}