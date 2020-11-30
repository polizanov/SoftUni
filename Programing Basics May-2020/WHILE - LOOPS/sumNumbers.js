function sumNumbers(inputData) {
    let finalNum = Number(inputData.shift());
    let sumNum = Number(inputData.shift());

    while (sumNum < finalNum) {
        newNum = Number(inputData.shift());

        sumNum += newNum;

    }

    console.log(sumNum);

}

sumNumbers(["20",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6"])

