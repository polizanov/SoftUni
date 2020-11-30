function sumNum(n) {
    let curSum = 0;

    for (i = 0; i < n.length; i++) {
        let num = n[i];
        num = Number(num);
        curSum += num;

    }

    console.log(`The sum of the digits is:${curSum}`)

}

sumNum("564891")