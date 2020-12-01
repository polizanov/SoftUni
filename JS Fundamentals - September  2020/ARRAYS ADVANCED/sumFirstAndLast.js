function sumFirstAndLast(inputArray) {
    let firstNum = Number(inputArray[0]);
    let lastNum = Number(inputArray.pop());

    let result = firstNum + lastNum;

    return result;
}

console.log(sumFirstAndLast(['20', '30', '40']))