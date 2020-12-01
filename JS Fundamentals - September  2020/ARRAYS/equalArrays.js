function equalArrays(firstArray, secondArray) {
    let sum = 0;
    let isArraysAreNotEqual = false;
    let notEqualIndex = undefined;
    let index = undefined;
    for (let i = 0; i < firstArray.length; i++) {
        if (Number(firstArray[i]) === Number(secondArray[i])) {
            sum += Number(firstArray[i]);
        } else {
            isArraysAreNotEqual = true;
            notEqualIndex = i;
            index = i;
            break;
        }
    }

    if (!isArraysAreNotEqual) {
        console.log(`Arrays are identical. Sum: ${sum}`);
    } else {
        console.log(`Arrays are not identical. Found difference at ${index} index`)
    }
}

equalArrays(['10', '20', '30'], ['10', '20', '30'])

