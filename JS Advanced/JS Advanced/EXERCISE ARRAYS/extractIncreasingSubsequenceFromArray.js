function extractArray(input) {
    let biggestNumber = Number.MIN_SAFE_INTEGER;
    let outputArray = [];

    for (const number of input) {
        if (number >= biggestNumber) {
            biggestNumber = number;
            outputArray.push(number);
        }
    }

    console.log(outputArray.join("\n"));
}

extractArray([20,
    3,
    2,
    15,
    6,
    1]


)