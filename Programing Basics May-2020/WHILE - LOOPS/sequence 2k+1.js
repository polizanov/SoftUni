function sequence(inputData) {
    let n = Number(inputData.shift());
    let counter = 1;

    while (counter <= n) {
        console.log(counter);
        counter = 2 * counter + 1;

    }

}

sequence(["31"])