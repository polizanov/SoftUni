function softUniReception(inputData) {
    let input = inputData;
    let employersEfficiency = input.splice(0, 3).map(Number);
    let allStudents = Number(input.shift());
    let curHour = 1;

    let sumForHour = function sumEfficiency(arr) {
        let sum = 0;
        for (let i = 0; i < 3; i++) {
            sum += arr[i];
        }
        return sum;
    }

    if (allStudents == 0) {
        curHour = 0;
    }

    while (allStudents > 0) {

        if (curHour % 4 == 0) {
            curHour++;
            continue;
        }

        allStudents -= sumForHour(employersEfficiency);

        if (allStudents <= 0) {
            break;
        } else {
            curHour++
        }
    }

    console.log(`Time needed: ${curHour}h.`);
}

softUniReception(['5', '6', '4', '20']);