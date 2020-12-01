function grades(input) {
    let result = '';

    if (input >= 2.00 && input < 3.00) {
        result = 'Fail';
    } else if (input >= 3.00 && input < 3.50) {
        result = 'Poor';
    } else if (input >= 3.50 && input < 4.50) {
        result = 'Good';
    } else if (input >= 4.50 && input < 5.50) {
        result = 'Very good';
    } else if (input >= 5.50 && input <= 6.00) {
        result = 'Excellent';
    }

    return result;
}

console.log(grades(3.33))