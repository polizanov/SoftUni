function position(inputData) {
    let firstNum = Number(inputData[0]);
    let finalNum = Number(inputData[1]);
    let output = '';


    for (let i = firstNum; i <= finalNum; i++) {
        let size = i + '';

        let evenSum = 0;
        let oddSum = 0;
        for (let j = 0; j < size.length; j++) {
            let curNum = Number(size.charAt(j));

            if (j % 2 === 0) {
                evenSum += curNum;
            } else {
                oddSum += curNum;
            }
        }
        if (evenSum === oddSum) {
            output += `${i} `
        }

    }
    console.log(output);

}

position(["100000",
    "100050"])
