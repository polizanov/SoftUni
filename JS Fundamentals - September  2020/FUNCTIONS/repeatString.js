function repeatString(curString, numOfRepeats) {
    let result = '';

    for (let i = 0; i < numOfRepeats; i++) {
        result += curString;
    }

    return result;
}

console.log(repeatString('String', 2))