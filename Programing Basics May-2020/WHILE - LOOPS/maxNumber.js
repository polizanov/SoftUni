function maxNumber(inputData) {
    let index = 0;
    curNum = inputData[index++];
    let smallerNum = 999999999999999;

    while (curNum != 'Stop') {

        curNum = Number(curNum);

        if (curNum < smallerNum) {
            smallerNum = curNum;
        }

        curNum = inputData[index++];
    }

    console.log(smallerNum);

}

maxNumber(["100",
    "99",
    "80",
    "70",
    "Stop"])


