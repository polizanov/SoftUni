function bonusScoringSystem(inputData) {
    let input = inputData.slice().map(Number);
    let countOfStudents = input.shift();
    let countOfLectures = input.shift();
    let aditionalBonus = input.shift();
    let maxBonus = 0;
    let maxAttendance = 0;

    while (countOfStudents > 0) {
        let curAttendance = input.shift();

        curBonus = Math.ceil(curAttendance / countOfLectures * (5 + aditionalBonus));

        if (curAttendance > maxAttendance) {
            maxAttendance = curAttendance;
        }

        if (curBonus > maxBonus) {
            maxBonus = curBonus;
        }
        countOfStudents--;
    }
    console.log(`Max Bonus: ${maxBonus}.`);
    console.log(`The student has attended ${maxAttendance} lectures.`);
}

bonusScoringSystem([
    '10', '30', '14', '8',
    '23', '27', '28', '15',
    '17', '25', '26', '5',
    '18'
]
)