function palindromeIntegers(inputArray) {
    isAPalindrome(inputArray);

    function isAPalindrome(inputArray) {
        for (let i = 0; i < inputArray.length; i++) {
            let swapNum = returnCurNumToPalindrome(inputArray[i]);
            if (Number(inputArray[i]) == swapNum) {
                console.log('true');
            } else {
                console.log('false');
            }
        }
    }

    function returnCurNumToPalindrome(number) {
        let numberPalindrome = '';

        number = number + '';
        for (let i = 0; i < number.length; i++) {
            numberPalindrome += number[number.length - 1 - i];
        }

        return Number(numberPalindrome);
    }
}

palindromeIntegers([32, 2, 232, 1010]);