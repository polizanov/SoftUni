function diagonalSums(input) {
    let firstDiagonal = 0;
    let secondDiagonal = 0;
    let curElement = 0;

    for (let i = 0; i < input.length; i++) {
        firstDiagonal += input[i][i];
        continue;
    }

    for (let i = input.length - 1; i >= 0; i--) {
        secondDiagonal += input[i][curElement];
        curElement++
        continue
    }

    console.log(`${firstDiagonal} ${secondDiagonal}`);
}

diagonalSums(
    [[20, 40],
 [10, 60]]

)