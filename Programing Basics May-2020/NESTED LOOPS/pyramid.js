function pyramid(inputData) {
    let num = Number(inputData[0]);
    let count = 1;
    let isFindEndOfPirmid = false;


    for (let i = 1; i <= num; i++) {
        let output = ''

        for (let j = 1; j <= i; j++) {
            output += count + ' ';

            if (count == num) {
                isFindEndOfPirmid = true;
                break;
            }
            count++
        }
        console.log(output);
        if (isFindEndOfPirmid) {
            break;
        }
    }

}

pyramid(["45"])