function amazingNumbers(number) {
    number = number + '';
    sumOfDight = 0;
    let isAmazing = false;
    let output = '';

    for (let i = 0; i < number.length; i++) {
        sumOfDight += Number(number[i]);
    }

    sumOfDight += ''

    for (let i = 0; i < sumOfDight.length; i++) {
        if (sumOfDight[i] == 9) {
            isAmazing = true;
            output = 'True'
        } else {
            output = 'False';
        }
    }

    console.log(`${number} Amazing? ${output}`);
}

amazingNumbers(999)