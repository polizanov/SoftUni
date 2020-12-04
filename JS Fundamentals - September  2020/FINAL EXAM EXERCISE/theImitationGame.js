function theImitationGame(input) {
    let encryptedMessage = input.shift();

    let command = input.shift();
    while (command !== 'Decode') {
        let curCommands = command.split("|");

        switch (curCommands[0]) {
            case 'Move':
                encryptedMessage = moveCase(encryptedMessage, curCommands);
                break;
            case 'Insert':
                encryptedMessage = insertCase(encryptedMessage, curCommands);
                break;
            case 'ChangeAll':
                encryptedMessage = changeAll(encryptedMessage, curCommands);
                break;

        }

        command = input.shift();
    }

    console.log(`The decrypted message is: ${encryptedMessage}`);

    function moveCase(string, arr) {
        let [numMoves] = arr.slice(1).map(Number);
        let firstSubstring = string.substring(0, numMoves)
        return string.substring(numMoves) + firstSubstring;
    }

    function insertCase(string, arr) {
        let [index, value] = arr.slice(1);
        index = Number(index);

        return string.substring(0, index) + value + string.substring(index);
    }

    function changeAll(string, arr) {
        let [substring, replacement] = arr.slice(1);

        while (string.includes(substring)) {
            string = string.replace(substring, replacement);
        }

        return string;
    }
}

theImitationGame([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode'
]

);