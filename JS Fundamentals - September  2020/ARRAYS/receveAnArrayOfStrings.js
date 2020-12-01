function receveAnArrayOfStrings(arrayOfStrings) {
    let revercedArray = [];
    let neededRotates = Math.ceil(arrayOfStrings.length / 2);
    let output = '';


    for (let i = 0; i < neededRotates; i++) {
        revercedArray[arrayOfStrings.length - 1 - i] = arrayOfStrings[i];
        revercedArray[i] = arrayOfStrings[arrayOfStrings.length - 1 - i];
    }

    for (let i = 0; i < revercedArray.length; i++) {
        output += revercedArray[i] + ' '
    }

    console.log(output);

}

receveAnArrayOfStrings(['33', '123', '0', 'dd']);