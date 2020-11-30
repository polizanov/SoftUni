function converter(num, input, output) {
    num = Number(num);
    let result = 0;

    if (input == 'mm') {
        if (output == 'mm') {
            result = num;
        } else if (output == 'm') {
            result = num / 1000;
        } else if (output == 'cm') {
            result = num / 10;
        }
    } else if (input == 'm') {
        if (output == 'mm') {
            result = num * 1000;
        } else if (output == 'm') {
            result = num;
        } else if (output == 'cm') {
            result = num * 100;
        }
    } else if (input == 'cm') {
        if (output == 'mm') {
            result = num * 10;
        } else if (output == 'm') {
            result = num / 100;
        } else if (output == 'cm') {
            result = num;
        }
    }

    console.log((result).toFixed(3))

}


converter(5000, 'cm', 'm')