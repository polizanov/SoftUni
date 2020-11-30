function divide(inputData) {
    let numSize = Number(inputData.shift());
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;

    for (curNum = 1; curNum <= numSize; curNum++) {
        let nextNum = Number(inputData.shift());

        if (nextNum % 2 == 0) {
            p1++;
        }
        if (nextNum % 3 == 0) {
            p2++;
        }
        if (nextNum % 4 == 0) {
            p3++;
        }

    }

    p1Pur = (p1 / numSize) * 100;
    p2Pur = (p2 / numSize) * 100;
    p3Pur = (p3 / numSize) * 100;

    console.log(`${p1Pur.toFixed(2)}%`);
    console.log(`${p2Pur.toFixed(2)}%`);
    console.log(`${p3Pur.toFixed(2)}%`);

}

divide(["10",
    "680",
    "2",
    "600",
    "200",
    "800",
    "799",
    "199",
    "46",
    "128",
    "65"]
)