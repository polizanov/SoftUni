function negativeOrPositiveNumbers(input) {
    let newArray = []
    let ifFindZero = false;

    for (element of input) {
        if (element < 0) {
            newArray.unshift(element)
        } else {
            newArray.push(element);
        }
    }

    if (newArray.length > 0) {
        console.log(newArray.join("\n"));
    }

}

negativeOrPositiveNumbers([3, -2, 0, -1])