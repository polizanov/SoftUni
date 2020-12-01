function arrayModifier(inputData) {
    let input = inputData.slice();
    let initialArray = input.shift().split(" ").map(Number);

    while (input.length > 0) {
        let curCommand = input.shift();

        if (curCommand == 'end') {
            break;
        } else {
            curCommand = curCommand.split(" ");
        }

        let command = curCommand.shift();

        switch (command) {
            case 'swap':
                let returnSwapArray = swapCase(initialArray, curCommand);
                initialArray = saveModifiedArray(returnSwapArray);
                break;
            case 'multiply':
                let returnMultiplyArray = multiplyCase(initialArray, curCommand);
                initialArray = saveModifiedArray(returnMultiplyArray);
                break;
            case 'decrease':
                let returnDecreaseArray = decrease(initialArray);
                initialArray = returnDecreaseArray;
                break;
        }
    }

    function swapCase(initialArr, arrOfCommands) {
        let firstSwapIndex = Number(arrOfCommands.shift());
        let secondSwapIndex = Number(arrOfCommands.shift());
        let firstSwapElement = initialArr[secondSwapIndex];
        let secondSwapElement = initialArr[firstSwapIndex];

        for (let i = 0; i < initialArr.length; i++) {
            if (i == firstSwapIndex) {
                initialArr[i] = firstSwapElement;
            } else if (i == secondSwapIndex) {
                initialArr[i] = secondSwapElement;
            }
        }
        return initialArr;
    }

    function multiplyCase(initialArr, arrOfCommands) {
        let firstMultiplyIndex = Number(arrOfCommands.shift());
        let secondMultiplyIndex = Number(arrOfCommands.shift());
        let firstElement = initialArr[firstMultiplyIndex];
        let secondElement = initialArr[secondMultiplyIndex]

        for (let i = 0; i < initialArr.length; i++) {
            if (i == firstMultiplyIndex) {
                initialArray[i] = firstElement * secondElement;
            }
        }
        return initialArr
    }

    function decrease(initialArr) {
        output = [];
        for (let i = 0; i < initialArr.length; i++) {
            output[i] = initialArr[i] - 1;
        }
        return output;
    }

    function saveModifiedArray(initialArr) {
        let output = [];
        for (let i = 0; i < initialArray.length; i++) {
            output[i] = initialArray[i];
        }
        return output;
    }
    console.log(initialArray.join(", "))
}

arrayModifier(
    [
        '23 -2 321 87 42 90 -123',
        'swap 1 3',
        'swap 3 6',
        'swap 1 0',
        'multiply 1 2',
        'multiply 2 1',
        'decrease',
        'end'
    ]

)