function greatestDivisor(firstNumber, secondNumber) {
    let maxNum = Math.max(firstNumber, secondNumber);

    for (let i = 2; i < maxNum; i++) {
        if (firstNumber < 0 || secondNumber < 0) {
            break;
        }

        if (firstNumber % i == 0 && secondNumber % i == 0) {
            console.log(i);
        }
    }
}

greatestDivisor(-2154, 458);