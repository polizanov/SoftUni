function printAndSum(first, last) {
    let output = '';
    let sum = 0;
    for (let curNum = first; curNum <= last; curNum++) {
        output += curNum + ' ';
        sum += curNum;
    }

    console.log(output);
    console.log(`Sum: ${sum}`);
}

printAndSum(50, 60)