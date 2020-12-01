function sorting(inputArray) {
    let firstCopyOfInput = inputArray.slice();
    let secondCopyOfInput = inputArray.slice();
    let sortedElementByBiggest = firstCopyOfInput.sort((a, b) => b - a);
    let sortedElementBySmallest = secondCopyOfInput.sort((a, b) => a - b);
    let output = [];

    let indexOfSmallestElements = 0;
    let indexOfBiggestElements = 0;
    for (let i = 0; i < inputArray.length; i++) {
        if (i % 2 == 0) {
            output.push(sortedElementByBiggest[indexOfBiggestElements++]);
        } else {
            output.push(sortedElementBySmallest[indexOfSmallestElements++])
        }
    }

    console.log(output.join(' '));
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])