function exam(examHour, examMin, hour, min) {
    examHour = Number(examHour);
    examMin = Number(examMin);
    hour = Number(hour);
    min = Number(min);

    sumExamMin = (examHour * 60) + examMin;
    sumMin = (hour * 60) + min;

    if (sumExamMin < sumMin) {
        console.log('Late');

        curSumMin = sumMin - sumExamMin;
        curHour = Math.floor(curSumMin / 60);
        curMin = curSumMin % 60;

        if (curHour == 0) {
            console.log(`${curMin} minutes after the start`);
        } else if (curMin < 10) {
            console.log(`${curHour}:0${curMin} hours after the start`)
        } else if (curMin > 10) {
            console.log(`${curHour}:${curMin} hours after the start`)
        }

    } else if (sumExamMin >= sumMin && sumExamMin - sumMin <= 30) {
        console.log('On time');
        console.log(`${sumExamMin - sumMin} minutes before the start`);
    } else if (sumExamMin - sumMin > 30) {
        console.log('Early');
        curSumMin = sumExamMin - sumMin;
        curHour = Math.floor(curSumMin / 60);
        curMin = curSumMin % 60;

        if (curHour == 0) {
            console.log(`${curMin} minutes before the start`);
        } else if (curMin < 10) {
            console.log(`${curHour}:0${curMin} hours before the start`)
        } else if (curMin > 10) {
            console.log(`${curHour}:${curMin} hours before the start`)
        }

    }

}

exam("9",
    "00",
    "10",
    "30")




