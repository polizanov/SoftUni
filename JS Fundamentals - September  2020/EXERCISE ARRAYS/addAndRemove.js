function addAndReoomove(inputArrayOfCommand) {
    let initialNumber = 1;
    let output = [];

    while (inputArrayOfCommand.length > 0) {
        let curCommand = inputArrayOfCommand.shift();

        switch (curCommand) {
            case 'add':
                output.push(initialNumber);
                break;
            case 'remove':
                output.pop(initialNumber);
                break;
        }
        initialNumber++;
    }

    if (output.length == 0) {
        console.log("Empty");
        return;
    } else {
        console.log(output.join(" "));
    }
}

addAndReoomove(['add', 'add', 'remove', 'add', 'add']);