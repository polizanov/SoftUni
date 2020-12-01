function shoppingList(inputData) {
    let input = inputData.slice();
    let products = input.shift().split('!');

    while (input.length > 0) {
        let curCommand = input.shift();

        if (curCommand == 'Go Shopping!') {
            break;
        }
        
        let command = curCommand.split(' ')[0];

        switch (command) {
            case "Urgent":
                let item = curCommand.split(' ')[1];
                if (products.includes(item)) {
                    break;
                } else {
                    products.unshift(item);
                    break;
                }

            case "Unnecessary":
                let itemForRemove = curCommand.split(' ')[1];
                if (products.includes(itemForRemove)) {
                    products = products.filter(product => product !== itemForRemove);
                    break;
                }
                break;
            case "Correct":
                let oldItem = curCommand.split(' ')[1];
                let newItem = curCommand.split(' ')[2];
                if (products.includes(oldItem)) {
                    for (let i = 0; i < products.length; i++) {
                        if (products[i] == oldItem) {
                            products[i] = newItem;
                        }
                    }
                    break;
                }
                break;
            case "Rearrange":
                let itemForRerange = curCommand.split(' ')[1];
                if (products.includes(itemForRerange) && products[products.length - 1] !== itemForRerange) {
                    products = products.filter(product => product !== itemForRerange);
                    products.push(itemForRerange);
                    break;
                }
                break;
        }
    }
    console.log(products.join(", "));
}

shoppingList([
    'Tomatoes!Potatoes!Bread',
    'Unnecessary Milk',
    'Urgent Tomatoes',
    'Go Shopping!'
]



)