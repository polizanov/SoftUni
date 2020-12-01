function revrceNumbers(inputNum, inputArray) {
    let cropedArray = [];
    let output = '';


    for (let curElement = 0; curElement < inputNum; curElement++) {
        cropedArray[curElement] = inputArray[curElement];
    }

    for (let i = inputNum - 1; i >= 0; i--) {
        output += cropedArray[i] + ' '
    }

    console.log(output);
}

revrceNumbers(4, [-1, 20, 99, 5]);