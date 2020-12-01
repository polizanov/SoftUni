function loot(input) {
    let treasureChest = input.shift().split("|");
    let command = input.shift();

    while (command !== 'Yohoho!') {
        let typeOfCommand = command.split(" ")[0];

        switch (typeOfCommand) {
            case 'Loot':
                treasureChest = lootCase(treasureChest, command);
                break;
            case 'Drop':
                treasureChest = dropCase(treasureChest, command);
                break;
            case 'Steal':
                treasureChest = stealCase(treasureChest, command);
                break;
        }

        command = input.shift();
    }

    sumAllItemsLength(treasureChest);

    function lootCase(arr, command) {
        let lootItems = command.split(" ").filter((x, y) => y !== 0);

        while (lootItems.length > 0) {
            let curItem = lootItems.shift();

            if (arr.includes(curItem)) {
                continue;
            } else {
                arr.unshift(curItem);
            }
        }
        return arr;
    }

    function dropCase(arr, command) {
        let index = Number(command.split(" ")[1]);
        let dropItem = arr[index];

        if (index < 0 || index >= arr.length) {
            return arr;
        }

        arr = arr.filter((x, y) => y !== index);
        arr.push(dropItem);

        return arr;
    }

    function stealCase(arr, command) {
        let countOfSteal = Number(command.split(" ")[1]);

        if (countOfSteal > arr.length) {
            stolenItems = arr;
            console.log(stolenItems.join(", "));
            arr = [];
        } else {
            let stolenItems = arr.splice(arr.length - countOfSteal, countOfSteal);
            console.log(stolenItems.join(", "));
        }
        return arr;
    }

    function sumAllItemsLength(arr) {
        let sum = 0;

        for (let i = 0; i < arr.length; i++) {
            let itemLength = arr[i].length
            sum += Number(itemLength);
        }

        if (arr.length == 0) {
            console.log('Failed treasure hunt.');
            return;
        }

        gain = sum / arr.length;
        console.log(`Average treasure gain: ${gain.toFixed(2)} pirate credits.`);
    }

}

loot(["Diamonds|Silver|Shotgun|Gold",
    "Loot Silver Medals Coal",
    "Drop -1",
    "Drop 1",
    "Steal 6",
    "Yohoho!"])

