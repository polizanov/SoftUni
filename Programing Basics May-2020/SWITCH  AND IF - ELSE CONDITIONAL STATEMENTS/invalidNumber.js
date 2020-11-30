function invalidNumber(num) {
    num = Number(num);

    if (num != 0 && num < 100 || num > 200) {
        console.log('invalid');
    }

}

invalidNumber('150')