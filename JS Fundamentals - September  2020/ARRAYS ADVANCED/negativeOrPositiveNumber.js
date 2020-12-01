function negativeOrPositiveFunctions(inputArray) {
    let resultArray = [];

    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i] >= 0) {
            resultArray.push(inputArray[i]);
        } else {
            resultArray.unshift(inputArray[i]);
        }
    }

    for (let i = 0; i < resultArray.length; i++) {
        console.log(resultArray[i]);
    }
}


negativeOrPositiveFunctions([3, -2, 0, -1])