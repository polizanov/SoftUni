function theLift(inputData) {
    let input = inputData.slice();

    let waitingPeople = Number(input[0]);
    let lift = input[1].split(' ').map(Number);

    function inputWagon(waiting, length) {
        while (length < 4) {
            if (waiting == 0) {
                break;
            }

            waiting--;
            length++;
        }
        waitingPeople = waiting;
        return length;
    }

    function inputLift(arr) {
        for (let i = 0; i < arr.length; i++) {
            arr[i] = inputWagon(waitingPeople, arr[i]);
        }
        return arr;
    }

    let fullLift = inputLift(lift);

    let sum = function sumPeopleInCurLift(fullLift) {
        let sum = 0;
        for (let i = 0; i < fullLift.length; i++) {
            sum += fullLift[i];
        }
        return sum;
    }
    let maxLift = lift.length * 4;

    if (waitingPeople == 0 && maxLift - sum(fullLift) > 0) {
        console.log(`The lift has empty spots!`);
        console.log(fullLift.join(' '));
        return;
    }

    if (waitingPeople > 0 && maxLift == sum(fullLift)) {
        console.log(`There isn't enough space! ${waitingPeople} people in a queue!`);
        console.log(fullLift.join(' '));
        return;
    }

    if (waitingPeople == 0 && maxLift == sum(fullLift)) {
        console.log(fullLift.join(' '));
        return;
    }
}

theLift(['20', '0 2 0'])