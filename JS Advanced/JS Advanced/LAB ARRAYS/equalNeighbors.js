function equalNeighbors(input) {
    let matches = 0;

    for (let i = 1; i < input.length; i++) {
        let length = input[i].length;
        let array = input[i];
        let previousArray = input[i - 1];

        for (let j = 0; j < length; j++) {
            if (array[j] == previousArray[j]) {
                matches++
            }
        }
    }

    for (let arr of input) {
        let length = arr.length;
        let array = arr;
        for (let i = 1; i < length; i++) {
            if (array[i] == array[i - 1]) {
                matches++
            }
        }
    }

    return matches;
}

equalNeighbors(
    [['test', 'yes', 'yo', 'ho'],
    ['well', 'done', 'yo', '6'],
    ['not', 'done', 'yet', '5']]


)