function sameNumbers(number) {
    number = number + ''
    let arrOfNumbers = number.split("").map(Number);
    let sumOfDights = arrOfNumbers.reduce((acc, a) => acc + a, 0);
    let firstDigit = arrOfNumbers[0];

    for (let digit of arrOfNumbers) {
        if (digit !== firstDigit) {
            console.log('false');
            console.log(sumOfDights);
            return;
        }
    }

    console.log('true');
    console.log(sumOfDights);

}

sameNumbers(1234);