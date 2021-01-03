function solve() {
    let button = document.getElementsByTagName("button")[0];
    button.addEventListener("click", () => {
        let letters = {};
        let currentInput = document.getElementsByTagName("input")[0].value;
        document.getElementsByTagName("input")[0].value = "";

        let curLetterIndex = 1;
        for (let i = 65; i <= 90; i++) {
            let currentLetter = String.fromCharCode(i);
            letters[currentLetter] = curLetterIndex++;
        }

        let firstInputLetter = currentInput[0].toLocaleUpperCase();

        if (letters[firstInputLetter]) {
            let index = Number(letters[firstInputLetter]);
            let output = firstInputLetter + currentInput.slice(1).toLocaleLowerCase();

            let currentChiled = document.querySelector(`li:nth-child(${index})`);

            if (currentChiled.textContent.length == 0) {
                currentChiled.textContent += output;
            } else {
                currentChiled.textContent += ", " + output;
            }
        }
    })
}