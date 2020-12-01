function sumEvenNumbers(arrayOfData) {
    let sum = 0;

    for (let i = 0; i < arrayOfData.length; i++) {
        if (Number(arrayOfData[i]) % 2 == 0) {
            sum += Number(arrayOfData[i]);
        }
    }
    console.log(sum);

}

sumEvenNumbers(['3', '5', '7', '9'])