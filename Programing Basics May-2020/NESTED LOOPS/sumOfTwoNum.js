function magicNum(inputData) {
    let index = 0;
    let start = Number(inputData[index++]);
    let end = Number(inputData[index++]);
    let magicNum = Number(inputData[index++]);
    let numCombination = 0
    let isFind = false;
    let num1 = 0;
    let num2 = 0;
    for (num1 = start; num1 <= end; num1++) {
        for (num2 = start; num2 <= end; num2++) {
            numCombination++;
            if (num1 + num2 == magicNum) {
                isFind = true;
                break;
            }
        }
        if (isFind) {
            ; break;
        }
    }

    if (isFind) {
        console.log(`Combination N:${numCombination} (${num1} + ${num2} = ${magicNum})`);
    } else {
        console.log(`${numCombination} combinations - neither equals ${magicNum}`);
    }

}

magicNum(["88",
    "888",
    "1000"])




