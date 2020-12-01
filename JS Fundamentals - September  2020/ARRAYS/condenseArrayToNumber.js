function condanceArrayToNumber(array) {
    if (array.length == 1) {
        console.log(array[0]);
        return;
    }

    function getSumArray(arr) {
        let output = [];
        for (let i = 0; i < arr.length - 1; i++) {
            output[i] = arr[i] + arr[i + 1];
        }
        return output;
    }

    while (true) {
        if (array.length == 1) {
            console.log(array[0]);
            return;
        } else {
            let sumElementsArray = getSumArray(array);
            array.length = 0;
            array = sumElementsArray;
            continue;
        }
    }
}


condanceArrayToNumber([1])