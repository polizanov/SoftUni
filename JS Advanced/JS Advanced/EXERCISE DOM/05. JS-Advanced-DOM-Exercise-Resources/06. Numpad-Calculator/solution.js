function solve() {
    let expression = document.getElementById("expressionOutput");
    let result = document.getElementById("resultOutput");

    document.getElementsByClassName("clear")[0].addEventListener("click", () => {
        expression.textContent = "";
        result.textContent = ""
    })

    document.getElementsByClassName("keys")[0]
        .addEventListener("click", (event) => {
        let curButton = event.target.value;

        switch (curButton) {
            case "*":
            case "/":
            case "+":
            case "-":
                expression.textContent += ` ${curButton} `;
                break;
            case "=":
                let [firstNum, operand, secondNum] = expression.textContent.split(" ");
                

                if(!firstNum || !operand || !secondNum){
                    result.textContent = "NaN";
                } else {
                    firstNum = Number(firstNum);
                    secondNum = Number(secondNum);
                    switch(operand){
                        case "*" :
                            result.textContent = firstNum * secondNum;
                            break;
                        case "/" :
                            result.textContent = firstNum / secondNum;
                            break;
                        case "+" :
                            result.textContent = firstNum + secondNum;
                            break;
                        case "-" :
                            result.textContent = firstNum - secondNum;
                            break;
                    }
                }
                
               

                break;
            default:
                expression.textContent += curButton;

        }

    })

}