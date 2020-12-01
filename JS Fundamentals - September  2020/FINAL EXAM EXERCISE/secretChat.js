function secretChat(input) {
    let message = input.shift();
    let isError = false;

    let command = input.shift();
    while (command !== 'Reveal') {
        let curCommand = command.split(":|:");

        switch (curCommand[0]) {
            case 'InsertSpace':
                message = insertSpaceCase(message, curCommand);
                break;
            case 'Reverse':
                message = reverceCase(message, curCommand);
                break;
            case 'ChangeAll':
                message = changeAllCase(message, curCommand);
                break;
        }

        if (!isError) {
            console.log(message);
        }
        isError = false
        command = input.shift();
    }

    console.log(`You have a new text message: ${message}`);

    function insertSpaceCase(string, arr) {
        let index = Number(arr[1]);
        let firstPart = string.substring(0, index);
        let secondPart = string.substring(index);
        return firstPart.concat(" " + secondPart);
    }

    function reverceCase(string, arr) {
        let partOfMessage = arr[1];
        let revercedPart = partOfMessage.split("").reverse().join("");

        if (!string.includes(partOfMessage)) {
            console.log('error');
            isError = true;
            return string;
        }

        string = string.replace(partOfMessage, "");
        return string.concat(revercedPart);
    }

    function changeAllCase(string, arr) {
        let substring = arr[1];
        let replacement = arr[2];

        while (string.indexOf(substring) > 0) {
            string = string.replace(substring, replacement);
        }

        return string;
    }

}

secretChat(
    [
        'heVVodar!gniV',
        'ChangeAll:|:V:|:l',
        'Reverse:|:!gnil',
        'InsertSpace:|:5',
        'Reveal'
    ]



)