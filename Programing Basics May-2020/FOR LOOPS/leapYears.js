function leapYears(leapYear, year) {
    leapYear = Number(leapYear);
    year = Number(year);

    for (let curYear = leapYear; curYear <= year; curYear += 4) {
        if (curYear % 4 == 0) {
            console.log(curYear);
        }
    }

}

leapYears("1908",
    "1919")
