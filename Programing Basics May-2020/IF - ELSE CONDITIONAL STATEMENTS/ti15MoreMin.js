function hourAndMinutes(hour, min) {
    hour = Number(hour);
    min = Number(min);

    sumMin = ((hour * 60) + min) + 15;

    sumHours = Math.floor(sumMin / 60);
    summin = sumMin % 60;


    if (summin < 10) {
        if (sumHours > 23) {
            console.log(`${24 - sumHours}:0${summin}`);
        } else {
            console.log(`${sumHours}:0${summin}`);
        }
    } else {
        if (sumHours > 23) {
            console.log(`${24 - sumHours}:${summin}`);
        } else {
            console.log(`${sumHours}:${summin}`);
        }

    }

}

hourAndMinutes(23, 59)