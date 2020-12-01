function arrayManipulations(input) {
    let arrayOfNumbers = input.shift().split(' ').map(Number);

    while (input.length > 0) {
        let command = input.shift();
        let curCommand = command.split(" ")[0]

        switch (curCommand) {
            case 'Add':
                let numberForAdd = Number(command.split(" ")[1]);
                arrayOfNumbers.push(numberForAdd);
                break;
            case 'Remove':
                let numberForRemove = Number(command.split(" ")[1]);
                arrayOfNumbers = arrayOfNumbers.filter(x => x != numberForRemove);
                break;
            case 'RemoveAt':
                let indexForRemove = Number(command.split(" ")[1]);
                arrayOfNumbers = arrayOfNumbers.filter((x, y) => y !== indexForRemove);
                break;
            case 'Insert':
                let valueForAdd = Number(command.split(" ")[1]);
                let indexForAdd = Number(command.split(" ")[2]);
                arrayOfNumbers.splice(indexForAdd, 0, valueForAdd);
                break;
        }
    }

    console.log(arrayOfNumbers.join(" "));
}

arrayManipulations(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3'])