function extractText() {
    [...document.querySelectorAll("ul li")]
        .map(el => el.textContent)
        .forEach(line => {
            document.getElementById("result").innerHTML += line + "\n";
        })
}