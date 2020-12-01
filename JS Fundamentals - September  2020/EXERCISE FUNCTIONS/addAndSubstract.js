function addAndSubstract(firstNumber, secondNumber, thirdNumber) {
    let sumOfTwoNumbers = sum(firstNumber, secondNumber);
    let result = substract(sumOfTwoNumbers, thirdNumber);
    console.log(result);

    function sum(firstNumber, secondNumber) {
        return firstNumber + secondNumber;
    }

    function substract(sum, thirdNumber) {
        return sum - thirdNumber;
    }
}

addAndSubstract(42, 58, 100)
