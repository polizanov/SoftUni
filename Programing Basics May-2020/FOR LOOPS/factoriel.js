function factoriel(num) {
    num = Number(num);
    let answer = 1;

    for (let curNum = 2; curNum <= num; curNum++) {

        answer = answer * curNum;
    }

    console.log(answer);

}

factoriel('4')