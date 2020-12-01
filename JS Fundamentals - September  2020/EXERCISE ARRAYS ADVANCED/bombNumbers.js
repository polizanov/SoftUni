function bombNumbers(inputArray, bombArray) {
    let input = inputArray.slice();
    let bomb = bombArray[0];
    let range = bombArray[1];
    let output = 0;

    let indexBomb = input.indexOf(bomb);
    while (indexBomb > -1) {
        input.splice(Math.max((indexBomb - range), 0), Math.min(range, indexBomb));
        indexBomb = input.indexOf(bomb);
        input.splice(indexBomb, (range + 1));

        indexBomb = input.indexOf(bomb);
    }

    for (let i = 0; i < input.length; i++) {
        output += Number(input[i]);
    }

    console.log(output);
}

bombNumbers(
    [1, 1, 2, 1, 1, 1, 2, 1, 1, 1],
    [2, 1]









)