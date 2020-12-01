function movingTarget(input) {
    let targets = input.shift().split(" ").map(Number);
    let command = input.shift();

    while (command !== 'End') {
        let curCommand = command.split(' ')[0];
        let firstElement = command.split(' ')[1];
        let secondElement = command.split(' ')[2];

        switch (curCommand) {
            case 'Shoot':
                targets = shootCase(targets, firstElement, secondElement)
                break;
            case 'Add':
                targets = addCase(targets, firstElement, secondElement);
                break;
            case 'Strike':
                targets = strikeCase(targets, firstElement, secondElement);
                break;
        }
        command = input.shift();
    }

    console.log(targets.join("|"));

    function shootCase(arr, index, power) {
        index = Number(index);
        power = Number(power);

        if (index < 0 || index >= arr.length) {
            return arr;
        }

        arr[index] -= power;

        if (arr[index] <= 0) {
            arr = arr.filter((x, y) => y != index)
        }

        return arr;
    }

    function addCase(arr, index, value) {
        index = Number(index);
        value = Number(value);
        if (index < 0 || index >= arr.length) {
            console.log('Invalid placement!');
            return arr;
        }

        arr.splice(index, 0, value);
        return arr;
    }

    function strikeCase(arr, index, radius) {
        index = Number(index);
        radius = Number(radius);

        let lelftIndex = index - radius;
        let rightIndex = index + radius;

        if (index >= 0 && index < arr.length) {
            if (lelftIndex >= 0 && rightIndex < arr.length) {
                arr.splice(lelftIndex, radius + radius + 1);
            } else {
                console.log('Strike missed!');
                return arr;
            }

            return arr;
        }
        return arr;
    }
}

movingTarget(
    [
        '47 55 85 78 99 20',

        'Strike 2 1',

        'End'
    ]

)