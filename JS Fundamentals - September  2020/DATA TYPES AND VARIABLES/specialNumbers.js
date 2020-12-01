function specialNumber(num) {
    let output = 'False';

    for (let curNum = 1; curNum <= num; curNum++) {
        sumOfDight = 0
        curNum = curNum + '';
        for (let curDight = 0; curDight < curNum.length; curDight++) {
            sumOfDight += Number(curNum[curDight]);
        }
        if (sumOfDight == 5 || sumOfDight == 7 || sumOfDight == 11) {
            output = 'True';
        }

        console.log(`${curNum} -> ${output}`);
        output = 'False';
    }

}

specialNumber(15)