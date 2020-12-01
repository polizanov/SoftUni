function matrix(number) {
    printMatrix(number);

    function printMatrix(number) {
        for (let i = 0; i < number; i++) {
            printOneLineNumbers(number);
        }
    }

    function printOneLineNumbers(number) {
        let output = '';

        for (let i = 0; i < number; i++) {
            output += number + ' ';
        }

        console.log(output);
    }
}

matrix(7);