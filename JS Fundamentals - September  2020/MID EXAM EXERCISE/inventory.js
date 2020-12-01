function inventory(inputData) {
    let input = inputData.slice();
    let colectingItems = input.shift().split(", ");

    while (input.length > 0) {
        let curCommand = input.shift();

        if (curCommand == 'Craft!') {
            break;
        } else {
            let command = curCommand.split(" - ")[0];

            switch (command) {
                case 'Collect':
                    let itemForAdd = curCommand.split(" - ")[1];
                    if (colectingItems.includes(itemForAdd)) {
                        continue;
                    } else {
                        colectingItems.push(itemForAdd);
                    }
                    break;
                case 'Drop':
                    let itemForRemove = curCommand.split(" - ")[1];
                    if (colectingItems.includes(itemForRemove)) {
                        colectingItems = colectingItems.filter(item => item !== itemForRemove);
                    } else {
                        continue;
                    }
                    break;
                case 'Combine Items':
                    let items = curCommand.split(" - ")[1];
                    let oldItem = items.split(":")[0];
                    let newItem = items.split(":")[1];
                    if (colectingItems.includes(oldItem)) {
                        colectingItems = addItemAfterOldOne(colectingItems, oldItem, newItem);
                    } else {
                        continue;
                    }
                    break;
                case 'Renew':
                    let itemForRenew = curCommand.split(" - ")[1];
                    if (colectingItems.includes(itemForRenew)) {
                        colectingItems = colectingItems.filter(item => item !== itemForRenew);
                        colectingItems.push(itemForRenew);
                    } else {
                        continue;
                    }
                    break;
            }

        }
    }

    function addItemAfterOldOne(arr, oldItem, newItem) {
        let output = [];

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == oldItem) {
                output.push(arr[i]);
                output.push(newItem);
            } else {
                output.push(arr[i]);
            }
        }
        return output;
    }
    console.log(colectingItems.join(", "));
}

inventory([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
]

)