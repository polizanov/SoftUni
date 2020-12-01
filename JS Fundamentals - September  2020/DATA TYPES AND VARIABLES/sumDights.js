function sumDights(num) {
    let sumOfDight = 0;
    num += '';
    for (let curDight = 0; curDight < num.length; curDight++) {
        sumOfDight += Number(num[curDight]);
    }

    console.log(sumOfDight);
}

sumDights(245678)