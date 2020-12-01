function findSmallestNumber(firstNum, secondNum, thirdNum) {
    let smallestNum = Number.MAX_SAFE_INTEGER;

    if (firstNum < smallestNum) {
        smallestNum = firstNum;
    }

    if (secondNum < smallestNum) {
        smallestNum = secondNum;
    }

    if (thirdNum < smallestNum) {
        smallestNum = thirdNum;
    }

    return smallestNum;
}

console.log(findSmallestNumber(2, 5, 3));