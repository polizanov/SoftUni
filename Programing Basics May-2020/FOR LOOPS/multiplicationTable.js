function table(num) {
    num = Number(num);

    for (let curNum = 1; curNum <= 10; curNum++) {

        console.log(`${curNum} * ${num} = ${curNum * num}`);
    }

}

table('5')