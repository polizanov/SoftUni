function processOddNumbers(input) {
    let result = input.filter((x, y) => y % 2 == 1)
        .map(x => x * 2)
        .reverse()
        .join(" ");

    console.log(result);
}

processOddNumbers([3, 0, 10, 4, 7, 3])