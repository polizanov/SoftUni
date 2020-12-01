function distinctArray(inputArray) {
    let input = inputArray.slice();
    let outputArray = [];

    for (let element of input) {
        if (!outputArray.includes(element)) {
            outputArray.push(element);
        }
    }

    console.log(outputArray.join(' '));
}

distinctArray([20, 8, 12, 13, 4, 4, 8, 5])