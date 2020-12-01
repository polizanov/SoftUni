function computerStore(inputData) {
    let input = inputData.slice();
    let curCommand = input.shift();
    let taxes = 0;
    let price = 0;
    let typeOfClient = inputData[inputData.length - 1];
    let totalPrice = 0;

    while (curCommand != 'special' && curCommand != 'regular') {
        curCommand = Number(curCommand);
        if (curCommand > 0) {
            price += curCommand;
            taxes += curCommand - (curCommand * 0.80);
        }
        if (curCommand < 0) {
            console.log('Invalid price!');
            curCommand = input.shift();
            continue;
        }

        curCommand = input.shift();
    }

    totalPrice = price + taxes;
    if (typeOfClient == 'special') {
        totalPrice = totalPrice - (totalPrice * 0.10);
    }

    if (totalPrice == 0) {
        console.log('Invalid order!');
        return;
    }

    console.log(`Congratulations you've just bought a new computer!`);
    console.log(`Price without taxes: ${price.toFixed(2)}$`);
    console.log(`Taxes: ${taxes.toFixed(2)}$`);
    console.log(`-----------`);
    console.log(`Total price: ${totalPrice.toFixed(2)}$`);
}

computerStore(['regular'])