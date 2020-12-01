function triangleOfNumbers(number) {
    for (let curNum = 1; curNum <= number; curNum++) {
        let output = '';
        for (curPrint = 1; curPrint <= curNum; curPrint++) {
            output += curNum + ' ';
        }
        console.log(output);
    }
}

triangleOfNumbers(6)