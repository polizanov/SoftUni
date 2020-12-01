function lastShop(input) {
    let paintingNumbers = input.shift().split(" ").map(Number);

    let command = input.shift();

    while (command !== 'END') {
        let typeCommand = command.split(" ")[0];

        switch (typeCommand) {
            case 'Change':
                let paintingNumberChangeCase = Number(command.split(" ")[1]);
                let changedNumberChangeCase = Number(command.split(" ")[2]);
                paintingNumbers = changeCase(paintingNumbers, paintingNumberChangeCase, changedNumberChangeCase);
                break;
            case 'Hide':
                let paintingNumberHideCase = Number(command.split(" ")[1]);
                paintingNumbers = hideCase(paintingNumbers, paintingNumberHideCase);
                break;
            case 'Switch':
                let firstPaintingNumberSwitchCase = Number(command.split(" ")[1]);
                let secondPaintingNumberSwitchCase = Number(command.split(" ")[2]);
                paintingNumbers = switchCase(paintingNumbers, firstPaintingNumberSwitchCase, secondPaintingNumberSwitchCase);
                break;
            case 'Insert':
                let indexOfInsert = Number(command.split(" ")[1]);
                let paintingNumberInsertCase = Number(command.split(" ")[2]);
                paintingNumbers = insertCase(paintingNumbers, indexOfInsert, paintingNumberInsertCase);
                break;
            case 'Reverse':
                paintingNumbers = paintingNumbers.reverse();
                break;
        }
        command = input.shift()
    }

    console.log(paintingNumbers.join(" "));

    function changeCase(arr, paintingNumber, changedNumber) {
        if (!arr.includes(paintingNumber)) {
            return arr;
        }

        for (let i = 0; i < arr.length; i++) {
            if (paintingNumber == arr[i]) {
                arr[i] = changedNumber;
            }
        }
        return arr;
    }

    function hideCase(arr, paintingNumber) {
        if (!arr.includes(paintingNumber)) {
            return arr;
        }

        arr = arr.filter(x => x != paintingNumber);
        return arr;
    }

    function switchCase(arr, firstPaintingNumber, secondPaintingNumber) {
        let firstNumber = secondPaintingNumber;
        let secondNumber = firstPaintingNumber;

        if (!arr.includes(firstPaintingNumber) || !arr.includes(secondPaintingNumber)) {
            return arr;
        }

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == firstPaintingNumber) {
                arr[i] = firstNumber
            } else if (arr[i] == secondPaintingNumber) {
                arr[i] = secondNumber;
            }
        }

        return arr;
    }

    function insertCase(arr, index, number) {

        if (index + 1 > 0 && index + 1 < arr.length) {
            arr.splice(index + 1, 0, number);
        }
        return arr;
    }
}

lastShop(
    [
        '77 120 115 101 101 97 78 88 112 111 108 101 111 110',
        'Insert 14 32',
        'END'
    ]

);