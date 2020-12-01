function sumOddNum(N) {
    N = Number(N);
    let printedNumbers = 0
    let sumNumbers = 0;

    for (let i = 1; i < 100; i++) {

        if (printedNumbers >= N) {
            break;
        }

        if (i % 2 != 0) {
            console.log(i);
            printedNumbers++
            sumNumbers += i;

        }
    }

    console.log(`Sum: ${sumNumbers}`);
}

sumOddNum(3)