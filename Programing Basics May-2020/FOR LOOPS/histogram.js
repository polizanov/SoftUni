function histogram(inputData) {
    let numberSize = Number(inputData.shift());
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;

    for (let curNum = 1; curNum <= numberSize; curNum++) {
        let num = Number(inputData.shift());

        if (num < 200) {
            p1++;
        } else if (num >= 200 && num < 400) {
            p2++;
        } else if (num >= 400 && num < 600) {
            p3++;
        } else if (num >= 600 && num < 800) {
            p4++;
        } else if (num >= 800) {
            p5++;
        }

    }

    pSum = p1 + p2 + p3 + p4 + p5;
    p1Pur = p1 / numberSize * 100;
    p2Pur = p2 / numberSize * 100;
    p3Pur = p3 / numberSize * 100;
    p4Pur = p4 / numberSize * 100;
    p5Pur = p5 / numberSize * 100;

    console.log(`${p1Pur.toFixed(2)}%`);
    console.log(`${p2Pur.toFixed(2)}%`);
    console.log(`${p3Pur.toFixed(2)}%`);
    console.log(`${p4Pur.toFixed(2)}%`);
    console.log(`${p5Pur.toFixed(2)}%`);

}

histogram(["3",
    "1",
    "2",
    "999"])
