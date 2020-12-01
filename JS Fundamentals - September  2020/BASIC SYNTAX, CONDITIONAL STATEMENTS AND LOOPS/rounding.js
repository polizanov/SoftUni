function rounding(roundedNum, precision) {
    if (precision < 15) {
        roundedNum = roundedNum.toFixed(precision);
        roundedNum = Number(roundedNum);
        console.log(roundedNum);
    } else {
        roundedNum = roundedNum.toFixed(15);
        roundedNum = Number(roundedNum);
        console.log(roundedNum);
    }

}

rounding(3.1415926535897932384626433832795, 2);