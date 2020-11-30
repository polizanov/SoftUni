function examPreparation(inputData) {
    let index = 0;

    let poorGrages = Number(inputData[index++]);
    let nameEx = inputData[index++];
    let grade = Number(inputData[index++]);
    let score = 0;
    let numScore = 0;
    let problems = 0;
    let numEx = 0;
    let isNeedABreak = false;
    let lastProblem = '';

    while (nameEx != 'Enough') {
        numEx++
        if (grade > 4) {
            numScore++;
            score += grade;
            lastProblem = nameEx;
            nameEx = inputData[index++];
            if (nameEx == 'Enough') {
                continue;
            }
            grade = Number(inputData[index++]);
            continue;
        }

        if (grade <= 4) {
            score += grade;
            numScore++;
            problems++;
            if (problems == poorGrages) {
                isNeedABreak = true;
                console.log(`You need a break, ${problems} poor grades.`);
                break;
            }
        }

        nameEx = inputData[index++];
        grade = Number(inputData[index++]);

    }

    averageScore = score / numScore;

    if (!isNeedABreak) {
        console.log(`Average score: ${(averageScore).toFixed(2)}`);
        console.log(`Number of problems: ${numEx}`);
        console.log(`Last problem: ${lastProblem}`);
    }

}

examPreparation(["2",
    "Income",
    "3",
    "Game", "Info",
    "6",
    "Best", "Player",
    "4"])
