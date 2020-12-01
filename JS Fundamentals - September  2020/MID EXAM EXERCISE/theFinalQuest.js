function theFinalQuest(input) {
    let wordsCollection = input.shift().split(' ');

    while (input.length > 0) {
        let command = input.shift();

        if (command == 'Stop') {
            break;
        }

        let curCommand = command.split(' ')[0];

        switch (curCommand) {
            case 'Delete':
                let indexForDelite = Number(command.split(' ')[1]);
                wordsCollection = deliteCase(wordsCollection, indexForDelite);
                break;
            case 'Swap':
                let firstWord = command.split(' ')[1];
                let secondWord = command.split(' ')[2];
                wordsCollection = swapCase(wordsCollection, firstWord, secondWord);
                break;
            case 'Put':
                let wordPutCase = command.split(' ')[1];
                let indexPutCase = Number(command.split(' ')[2]);
                wordsCollection = putCase(wordsCollection, wordPutCase, indexPutCase);
                break;
            case 'Sort':
                wordsCollection = wordsCollection.sort((a, b) => b.localeCompare(a));
                break;
            case 'Replace':
                let firstWordReplace = command.split(' ')[1];
                let secondWordReplace = command.split(' ')[2];
                wordsCollection = replaceCase(wordsCollection, firstWordReplace, secondWordReplace);
                break;

        }
    }

    console.log(wordsCollection.join(' '));

    function deliteCase(arr, index) {
        if (index + 1 >= 0 && index + 1 <= arr.length) {
            arr = arr.filter((x, y) => y != index + 1);
        }
        return arr;
    }

    function swapCase(arr, first, second) {
        let firstSwap = second;
        let secondSwap = first;

        if (arr.includes(first) && arr.includes(second)) {
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] == first) {
                    arr[i] = firstSwap;
                } else if (arr[i] == second) {
                    arr[i] = secondSwap;
                }
            }
        }
        return arr;
    }

    function putCase(arr, word, index) {
        if (index - 1 >= 0 && index - 1 <= arr.length) {
            arr.splice(index - 1, 0, word);
        }
        return arr;
    }

    function replaceCase(arr, first, second) {
        if (arr.includes(second)) {
            for (let i = 0; i < arr.length; i++) {
                if (i == arr.indexOf(second)) {
                    arr[i] = first;
                }
            }
        }
        return arr;
    }
}

theFinalQuest([
    'This the my quest! final',
    'Put is 2',
    'Swap final quest!',
    'Delete 2',
    'Stop',
    ''
]


);