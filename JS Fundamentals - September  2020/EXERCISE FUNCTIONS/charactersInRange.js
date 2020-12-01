function charactersInRange(firstChar, lastChar) {
    let convertedChars = [];
    let index = 0;

    let first = firstChar.charCodeAt(0);
    let last = lastChar.charCodeAt(0);

    let min = Math.min(first, last);
    let max = Math.max(first, last);

    allCharsInRange(min, max);
    printArrayOfCharsData(convertedChars);


    function allCharsInRange(first, last) {

        for (let i = first + 1; i <= last - 1; i++) {
            convertedChars[index++] = String.fromCharCode(i);
        }

        return convertedChars;

    }

    function printArrayOfCharsData(array) {
        let output = '';

        for (let i = 0; i < convertedChars.length; i++) {
            output += array[i] + ' ';
        }

        console.log(output);
    }

}

charactersInRange('C',
    '#'
)