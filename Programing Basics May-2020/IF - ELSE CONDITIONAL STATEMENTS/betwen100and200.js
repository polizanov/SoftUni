function between(num) {
    num = Number(num);

    if (num > 200) {
        console.log('Greater than 200');
    } else if (num >= 100 && num <= 200) {
        console.log('Between 100 and 200');
    } else if (num < 100) {
        console.log('Less than 100');
    }

}