function solve(inputArray) {
    let sumOfEvenNum = 0;
    let sumOfOddNum = 0;

    for (let i = 0; i < inputArray.length; i++) {
        if (Number(inputArray[i]) % 2 == 0) {
            sumOfEvenNum += Number(inputArray[i]);
        } else {
            sumOfOddNum += Number(inputArray[i]);
        }
    }

    console.log(sumOfEvenNum - sumOfOddNum);
}

solve([3, 5, 7, 9]);
