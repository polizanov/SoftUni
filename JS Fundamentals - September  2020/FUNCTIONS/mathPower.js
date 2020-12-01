function pow(number, powNumber) {
    let result = 1;

    for (let i = 0; i < powNumber; i++) {
        result *= number;
    }

    return result;
}

console.log(pow(3, 4));


