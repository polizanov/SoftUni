function students(inputArray) {
    let input = inputArray.slice().map(Number);
    let allStudent = input.pop();
    let sumStudents = sumAllArrayIntegers(input);

    function calculateTime(sum, studentsPerHour) {
        let curHour = 1;
        while (sum >= 0) {
            if (curHour % 4 == 0) {
                curHour++;
                continue;
            }
            if (sum <= studentsPerHour) {
                break;
            }
            sum -= studentsPerHour;
            curHour++
        }
        return curHour;
    }

    function sumAllArrayIntegers(input) {
        let studentsPerHour = 0;
        for (element of input) {
            studentsPerHour += element;
        }
        return studentsPerHour;
    }

    console.log(`Time needed: ${calculateTime(allStudent, sumStudents)}h.`);
}

students(['5', '6', '4', '20']);