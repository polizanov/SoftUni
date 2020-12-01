function eisterGifts(input) {
    let presents = input.shift().split(" ");

    while (input.length > 0) {
        let command = input.shift();

        if (command == 'No Money') {
            break;
        }

        let curCommand = command.split(" ")[0];

        switch (curCommand) {
            case 'OutOfStock':
                let itemForOut = command.split(" ")[1];
                presents = outOfStockCase(presents, itemForOut);
                break;
            case 'Required':
                let giftReplace = command.split(" ")[1];
                let indexReplace = Number(command.split(" ")[2]);
                presents = replaceCase(presents, giftReplace, indexReplace);
                break;
            case 'JustInCase':
                let justInCaseGift = command.split(" ")[1];
                presents = justInCase(presents, justInCaseGift);
                break;
        }
    }

    presents = presents.filter(x => x != 'None');
    console.log(presents.join(" "));

    function outOfStockCase(arr, item) {
        if (arr.includes(item)) {
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] == item) {
                    arr[i] = 'None';
                }
            }
        }
        return arr;
    }

    function replaceCase(arr, gift, index) {
        if (index < 0 && index >= arr.length) {
            return arr;
        }

        for (let i = 0; i < arr.length; i++) {
            if (i == index) {
                arr[i] = gift;
            }
        }
        return arr;
    }

    function justInCase(arr, gift) {
        arr[arr.length - 1] = gift;
        return arr;
    }
}

eisterGifts([
    'Sweets Cozonac Clothes Flowers Wine Clothes Eggs Clothes',
    'Required Paper 8',
    'OutOfStock Clothes',
    'Required Chocolate 2',
    'JustInCase Hat',
    'OutOfStock Cable',
    'No Money'
]

)