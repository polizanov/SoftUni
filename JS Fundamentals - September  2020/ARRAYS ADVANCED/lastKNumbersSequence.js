function lastKNumbersSequence(outputLength, previousElelment) {
    let outputArray = [1, 1];

    for (let i = 2; i < outputLength; i++) {
        let start = Math.max(0, i - previousElelment);
        let end = i;
        let sumElement = outputArray.slice(start, end);

        outputArray[i] = sumElements(sumElement);
    }

    console.log(outputArray.join(' '));

    function sumElements(array) {
        let sumNum = 0;
        for (let i = 0; i < array.length; i++) {
            sumNum += Number(array[i]);
        }
        return sumNum;
    }
}


lastKNumbersSequence(6, 3)