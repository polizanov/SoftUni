function messaging(input) {
    let message = [];
    let command = input.shift();

    while (command !== 'end') {
        let typeOfCommand = command.split(" ")[0];

        switch (typeOfCommand) {
            case 'Chat':
                let chatMessage = command.split(" ")[1];
                message.push(chatMessage);
                break;
            case 'Delete':
                let deliteMassage = command.split(" ")[1];
                if (message.includes(deliteMassage)) {
                    message = message.filter(x => x !== deliteMassage);
                }
                break;
            case 'Edit':
                let messageToEdit = command.split(" ")[1];
                let editedVersion = command.split(" ")[2];

                for (let i = 0; i < message.length; i++) {
                    if (message[i] == messageToEdit) {
                        message[i] = editedVersion;
                    }
                }
                break;
            case 'Pin':
                let pinMessage = command.split(" ")[1];
                message = message.filter(x => x !== pinMessage);
                message.push(pinMessage);
                break;
            case 'Spam':
                message = spamCase(message, command);
                break;
        }
        command = input.shift();
    }

    function spamCase(arr, command) {
        let spamMessages = command.split(" ").filter((x, y) => y !== 0);

        while (spamMessages.length > 0) {
            let curSpamMessage = spamMessages.shift();
            arr = arr.filter(x => x !== curSpamMessage);
            arr.push(curSpamMessage);
        }

        return arr;
    }

    for (let i = 0; i < message.length; i++) {
        console.log(message[i]);
    }


}

messaging(["Chat John",
    "Spam Let's go to the zoo",
    "Edit zoo cinema",
    "Chat tonight",
    "Pin John",
    "end"])

