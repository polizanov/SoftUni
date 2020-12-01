function train(input) {
    let wagons = input.shift().split(' ').map(Number);
    let maxCapacityOfWagons = input.shift()

    while (input.length > 0) {
        let command = input.shift().split(' ');

        if (command.length == 1) {
            command = Number(command);
            wagons = addPassengrs(wagons, command);
        }

        if (command.length > 1) {
            let numberForAdd = Number(command[1]);
            wagons.push(numberForAdd);

        }
    }

    console.log(wagons.join(" "));

    function addPassengrs(arr, numOfPassemgers) {
        for (let i = 0; i < arr.length; i++) {
            let curWagonSize = maxCapacityOfWagons - arr[i];
            if (numOfPassemgers <= curWagonSize) {
                arr[i] += numOfPassemgers;
                break;
            }
        }
        return arr;
    }
}

train(['0 0 0 10 2 4',
    '10',
    'Add 10',
    '10',
    '10',
    '10',
    '8',
    '6']

);