function addAndRemoveElement(input) {
    let initialNumber = 0;
    let outputArray = [];

    for (let command of input) {
        initialNumber++;

        switch (command) {
            case 'add':
                outputArray.push(initialNumber);
                break;
            case 'remove':
                outputArray.pop();
                break;
        }
    }

    if (outputArray.length == 0) {
        console.log('Empty');
        return;
    }

    console.log(outputArray.join("\n"));
}

addAndRemoveElement(
    ['add',
        'add',
        'add',
        'add']



)