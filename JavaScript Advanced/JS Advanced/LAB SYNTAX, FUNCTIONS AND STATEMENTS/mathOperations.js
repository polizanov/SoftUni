function mathOperations(firstNum, secondNum, operation) {
    switch (operation) {
        case '+':
            console.log(firstNum + secondNum);
            break;
        case '-':
            console.log(firstNum - secondNum);
            break;
        case '*':
            console.log(firstNum * secondNum);
            break;
        case '/':
            console.log(firstNum / secondNum);
            break;
        case '%':
            console.log(firstNum % secondNum);
            break;
        case '**':
            console.log(firstNum ** secondNum)
            break;


    }

}

mathOperations(3, 5.5, '*');