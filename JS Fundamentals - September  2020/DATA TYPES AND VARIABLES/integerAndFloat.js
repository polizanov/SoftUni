function integerAndFloat(num1, num2, num3) {
    let isFloat = false;

    let sumOfNumbers = num1 + num2 + num3;
    sumOfNumbers = sumOfNumbers + '';

    for (let i = 0; i < sumOfNumbers.length; i++) {
        if (sumOfNumbers[i] == '.') {
            isFloat = true;
            break;
        }
    }

    if (isFloat) {
        console.log(`${sumOfNumbers} - Float`);
    } else {
        console.log(`${sumOfNumbers} - Integer`);
    }
}

integerAndFloat(100, 200, 303);