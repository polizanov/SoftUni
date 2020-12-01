function mergeArrays(firstArray, secondArray) {
    let outputArray = [];

    for (let i = 0; i < firstArray.length; i++) {
        if (i % 2 == 0) {
            let firstNumber = Number(firstArray[i]);
            let secondNumber = Number(secondArray[i]);
            outputArray.push(firstNumber + secondNumber);
        } else {
            let firstElement = firstArray[i];
            let secondElement = secondArray[i]
            outputArray.push(firstElement + secondElement);
        }
    }
    
    console.log(outputArray.join(" - "));
}





mergeArrays(['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11']


)