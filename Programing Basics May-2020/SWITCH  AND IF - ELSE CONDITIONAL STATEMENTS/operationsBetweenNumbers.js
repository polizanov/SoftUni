function operations(N1, N2, operator) {
    N1 = Number(N1);
    N2 = Number(N2);
    let result = 0;
    let resultType = '';

    switch (operator) {
        case '+':
            result = N1 + N2;
            if (result % 2 == 0) {
                resultType = 'even';
            } else {
                resultType = 'odd';
            }
            console.log(`${N1} + ${N2} = ${result} - ${resultType}`);
            break;
        case '-':
            result = N1 - N2;
            if (result % 2 == 0) {
                resultType = 'even';
            } else {
                resultType = 'odd';
            }
            console.log(`${N1} - ${N2} = ${result} - ${resultType}`);
            break;
        case '*':
            result = N1 * N2;
            if (result % 2 == 0) {
                resultType = 'even';
            } else {
                resultType = 'odd';
            }
            console.log(`${N1} * ${N2} = ${result} - ${resultType}`);
            break;
        case '/':
            result = N1 / N2;
            if (N2 == 0) {
                console.log(`Cannot divide ${N1} by zero`);
            } else {
                console.log(`${N1} / ${N2} = ${(result).toFixed(2)}`);
            }
            break;
        case '%':
            result = N1 % N2;
            if (N2 == 0) {
                console.log(`Cannot divide ${N1} by zero`);
            } else {
                console.log(`${N1} % ${N2} = ${result}`);
            }
    }

}


operations("10",
    "1",
    "-")

