function maxNumber(inputArray) {
    let isFindAtopInteger = false;
    let topIntegers = [];
    let output = '';
    let index = 0;

    for (let i = 0; i < inputArray.length; i++) {
        for (let j = 0; j < inputArray.length; j++) {
            if (Number(inputArray[i]) >= Number(inputArray[j + i])) {
                isFindAtopInteger = true;
                continue;
            } else if (Number(inputArray[i]) < Number(inputArray[j + i])) {
                isFindAtopInteger = false;
                break;
            }
        }

        if (isFindAtopInteger) {
            topIntegers[index++] = Number(inputArray[i]);
            isFindAtopInteger = false;
            continue;
        }
    }

    for (let k = 0; k <= topIntegers.length; k++) {
        if (k < topIntegers.length) {
            if (Number(topIntegers[k]) !== Number(topIntegers[k - 1])) {
                output += topIntegers[k] + ' ';
            }
        }

    }
    
    console.log(output);
}

maxNumber([1, 4, 3, 2])