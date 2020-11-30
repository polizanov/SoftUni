function title(age, sex) {
    age = Number(age);

    if (age >= 16) {
        switch (sex) {
            case 'm':
                console.log('Mr.');
                break;
            case 'f':
                console.log('Ms.');
                break;
        }
    } else if (age < 16) {
        switch (sex) {
            case 'm':
                console.log('Master');
                break;
            case 'f':
                console.log('Miss');
                break;
        }
    }

}

title("12",
    "f")
