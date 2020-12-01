function simpleCalkulator(numOne, numTwo, operator) {

    switch (operator) {
        case 'multiply':
            let multiply = (numOne, numTwo) => numOne * numTwo;
            console.log(multiply(numOne, numTwo));
            break;
        case 'divide':
            let devide = (numOne, numTwo) => numOne / numTwo;
            console.log(devide(numOne, numTwo));
            break;
        case 'add':
            let add = (numOne, numTwo) => numOne + numTwo;
            console.log(add(numOne, numTwo));
            break;
        case 'subtract':
            let subtract = (numOne, numTwo) => numOne - numTwo;
            console.log(subtract(numOne, numTwo));
            break;
    }
}

console.log(simpleCalkulator(5,
    5,
    'multiply'
))