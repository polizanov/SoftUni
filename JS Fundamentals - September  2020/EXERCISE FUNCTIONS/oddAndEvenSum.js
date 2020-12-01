function oddAndEvenSum(number) {
    let evenSum = sumOfEven(number);
    let oddSum = sumOfOdd(number);

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);

    function sumOfEven(number) {
        number = number + '';
        let evenSum = 0;
        for (let i = 0; i < number.length; i++) {
            if ((Number(number[i])) % 2 == 0) {
                evenSum += Number(number[i]);
            }

        }
        return evenSum;
    }

    function sumOfOdd(number) {
        number = number + '';
        let oddSum = 0;
        for (let i = 0; i < number.length; i++) {
            if ((Number(number[i]) % 2 !== 0)) {
                oddSum += Number(number[i]);
            }
        }
        return oddSum;
    }
}


oddAndEvenSum(3495892137259234);



