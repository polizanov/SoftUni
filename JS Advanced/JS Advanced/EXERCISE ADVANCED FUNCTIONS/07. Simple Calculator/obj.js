function calc(){
    let firsElement;
    let secondElement;
    let result;
    return {
        init: (selector1, selector2, resultSelector) => {
            firsElement = document.querySelector(selector1);
            secondElement = document.querySelector(selector2);
            result = document.querySelector(resultSelector);
        }, 
        add: () => {
            result.value = Number(firsElement.value) + Number(secondElement.value);
        },
        subtract: () => {
            result.value = Number(firsElement.value) - Number(secondElement.value);
        }
    }

}

obj = calc();
obj.init("#num1", "#num2", "#result");