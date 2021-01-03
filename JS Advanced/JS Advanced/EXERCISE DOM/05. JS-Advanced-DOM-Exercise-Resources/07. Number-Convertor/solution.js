function solve() {
    let selectMenu = document.getElementById("selectMenuTo");

    let binaryOpriton = document.createElement("option");
    binaryOpriton.textContent = "Binary";
    binaryOpriton.setAttribute("value", "binary");

    let hexadeicmalOption = document.createElement("option");
    hexadeicmalOption.textContent = "Hexadeicmal";
    hexadeicmalOption.setAttribute("value", "hexadeicmal");



    selectMenu.appendChild(binaryOpriton);
    selectMenu.appendChild(hexadeicmalOption);

    document.getElementsByTagName("button")[0]
        .addEventListener("click", () => {
            let typeSystem = document.getElementById("selectMenuTo").value;
            let getNumber = Number(document.getElementById("input").value);

            let result;
            switch (typeSystem) {
                case 'binary':
                    result = getNumber.toString(2);
                    break;
                case 'hexadeicmal':
                    result = getNumber.toString(16).toLocaleUpperCase();
                    break;
            }

            if (result) {
                let getResult = document.getElementById("result");
                getResult.value = result;
            }
        })
}