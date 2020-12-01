function multiplicationTable(number) {
    for (curNum = 1; curNum <= 10; curNum++) {
        console.log(`${number} X ${curNum} = ${number * curNum}`);
    }
}

multiplicationTable(5)