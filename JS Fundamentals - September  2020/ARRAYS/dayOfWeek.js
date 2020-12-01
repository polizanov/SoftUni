function dayOfWeek(numDay) {
    let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];


    if (numDay < 1 || numDay > 7) {
        console.log('Invalid day!');
    } else {
        console.log(days[numDay - 1]);
    }

}

dayOfWeek(1)