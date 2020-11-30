function graduation(inputData) {
    index = 0;
    let nameStud = inputData[index++];
    let curGrade = inputData[index++];
    let sammlerGade = 0;
    let clas = 0;
    let sumGrade = 0;


    while (sammlerGade < 2) {
        curGrade = Number(curGrade);

        if (curGrade >= 4.00) {
            clas++;
            sumGrade += curGrade;
            curGrade = inputData[index++];
            continue;
        } else {
            sammlerGade++;
            curGrade = inputData[index++];
            continue;
        }

    }

    averageGrade = sumGrade / clas;

    if (clas == 12) {
        console.log(`${nameStud} graduated. Average grade: ${(averageGrade).toFixed(2)}`);
    } else {
        console.log(`${nameStud} has been excluded at ${++clas} grade`);
    }

}

graduation(["Mimi",
    "5",
    "6",
    "5",
    "6",
    "5",
    "6",
    "6",
    "2",
    "3"])

