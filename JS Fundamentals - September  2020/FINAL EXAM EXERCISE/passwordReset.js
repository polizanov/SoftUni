function passwordReset(input) {
    let password = input.shift();

    command = input.shift();
    while (command !== 'Done') {
        let curCommand = command.split(" ");

        switch (curCommand[0]) {
            case 'TakeOdd':
                password = takeOddCase(password);
                console.log(password);
                break;
            case 'Cut':
                password = cutCase(password, curCommand);
                console.log(password);
                break;
            case 'Substitute':
                password = substituteCase(password, curCommand);
                break;
        }

        command = input.shift();
    }

    console.log(`Your password is: ${password}`);

    function takeOddCase(string) {
        return string = string
            .split("")
            .filter((x, y) => y % 2 == 1)
            .join("");

    }

    function cutCase(string, arr) {
        let [index, length] = arr.splice(1).map(Number);

        let substring = string.substring(index, index + length);
        if (string.includes(substring)) {
            string = string.replace(substring, "");
        }

        return string;
    }

    function substituteCase(string, arr) {
        let [substring, substitute] = arr.slice(1);

        if (!string.includes(substring)) {
            console.log('Nothing to replace!');
            return string;
        }

        while (string.includes(substring)) {
            string = string.replace(substring, substitute);
        }

        console.log(string);
        return string;
    }
}

passwordReset([
    'up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy',
    'TakeOdd',
    'Cut 18 2',
    'Substitute ! ***',
    'Substitute ? .!.',
    'Done'
]

)