function factorialDivision(firstNum, secondNum) {
    console.log(devideFactoriels(firstNum, secondNum));

    function devideFactoriels(firstNum, secondNum) {
        let result = 0;
        firstNum = factoriel(firstNum);
        secondNum = factoriel(secondNum);

        result = firstNum / secondNum;

        return result.toFixed(2)
    }

    function factoriel(num) {
        num = Number(num);
        let answer = 1;

        for (let curNum = 2; curNum <= num; curNum++) {
            answer = answer * curNum;
        }

        return answer;
    }
}

factorialDivision(6, 2);