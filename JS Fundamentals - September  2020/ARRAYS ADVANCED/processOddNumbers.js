function proccessOddNumbers(inputArray) {
    let oddPossitionElements = getOddPossicion(inputArray);
    let doubledOddPossitionNumbers = doubleOddPossitionElements(oddPossitionElements);
    console.log(reverceArray(doubledOddPossitionNumbers).join(' '));



    function getOddPossicion(array) {
        let oddElements = [];
        curElement = 0
        for (let i = 0; i < array.length; i++) {
            if (i % 2 == 1) {
                oddElements[curElement++] = array[i];
            } else {
                continue;
            }
        }
        return oddElements;
    }

    function doubleOddPossitionElements(array) {
        let doubledArray = [];
        for (let i = 0; i < array.length; i++) {
            doubledArray[i] = Number(array[i]) * 2;
        }
        return doubledArray;
    }

    function reverceArray(array) {
        let revercedArray = [];
        let curElement = 0;
        for (let i = array.length - 1; i >= 0; i--) {
            revercedArray[curElement++] = array[i];
        }
        return revercedArray;
    }
}

proccessOddNumbers([10, 15, 20, 25])