function smallerNum(inputData) {
    n = Number(inputData.shift());
    let smallNum = 999999999999999999999;

    for (let curNum = 1; curNum <= n; curNum++) {
        let curN = Number(inputData.shift());

        if (curN < smallNum) {
            smallNum = curN;
        }

    }

    console.log(smallNum);

}

smallerNum(["2",
    "-1",
    "-2"])




