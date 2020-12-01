function magicSum(integers, magicNum) {
    let printNumbers = [];

    for (let i = 0; i < integers.length; i++) {
        for (let j = 0; j < integers.length; j++) {
            if (integers[i] + integers[j] == magicNum) {
                if (printNumbers.includes(integers[i]) && printNumbers.includes(integers[j])) {
                    break;
                } else if (!printNumbers.includes(integers[i]) && !printNumbers.includes(integers[j])) {
                    if (i == j) {
                        break;
                    }
                    printNumbers.push(integers[i], integers[j]);
                    console.log(`${integers[i]} ${integers[j]}`);
                    break;
                } else {
                    break;
                }
            }
        }
    }
}

magicSum([1, 2, 3, 4, 5, 6],
    6



)