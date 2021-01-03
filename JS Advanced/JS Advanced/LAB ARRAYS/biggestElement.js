function biggestElement(input) {
    let smallestNumber = Number.MIN_SAFE_INTEGER;

    for (let line of input) {
        for (let element of line) {
            if (element > smallestNumber) {
                smallestNumber = element
            }
        }
    }

    console.log(smallestNumber);
}

biggestElement(
    [[20, 50, 10],
    [8, 33, 145]]

);