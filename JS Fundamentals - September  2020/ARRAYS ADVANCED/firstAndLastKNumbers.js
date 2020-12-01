function furstAndLastKNumbers(inputArray) {
    let numK = inputArray.shift();
    let firstKElements = inputArray.slice(0, numK);
    let lastKElements = inputArray.slice(inputArray.length - numK);

    console.log(firstKElements.join(' '));
    console.log(lastKElements.join(' '));
}

furstAndLastKNumbers([3,
    6, 7, 8, 9]
);