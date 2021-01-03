function magicMatrices(input) {
    let sumOfFirstColumn = input[0].reduce((acc, a) => acc + a, 0);
    let sumOfFirstRow = sumRow(0, input);
    let isMagic = true;

    for (const arr of input) {
        let curSum = arr.reduce((acc, a) => acc + a, 0);

        if (curSum !== sumOfFirstColumn) {
            isMagic = false;
        }
    }

    for (let i = 0; i < input[0]; i++) {
        if (sumRow(i, input) !== sumOfFirstRow) {
            isMagic = false;
        }
    }

    console.log(isMagic);

    function sumRow(index, input) {
        let sum = 0
        for (let i = 0; i < input.length; i++) {
            sum += input[i][index];
        }

        return sum;
    }
}

magicMatrices(
    [[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]

)