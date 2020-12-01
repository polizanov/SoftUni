function nationalCount(inputData) {
    let input = inputData.slice();
    let peoplePerHour = input.slice(0, 3).map(Number);
    let totalPeople = Number(input[3]);
    let curHour = 1;

    function sum(arr) {
        let sum = 0;
        for (let i = 0; i < 3; i++) {
            sum += arr[i];
        }
        return sum;
    }
    
    let numPeoplePerHour = sum(peoplePerHour);

    if (totalPeople <= 0) {
        curHour = 0;
    }

    while (totalPeople > 0) {
        if (curHour % 4 == 0) {
            curHour++;
            continue;
        }
        totalPeople -= numPeoplePerHour;
        if (totalPeople <= 0) {
            break;
        } else {
            curHour++
        }
    }
    console.log(`Time needed: ${curHour}h.`)
}

nationalCount(['3', '2', '5', '0']);