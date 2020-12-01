function storage(input) {
    let items = new Map();

    while (input.length > 0) {
        let [product, quantity] = input.shift().split(' ');
        quantity = Number(quantity);

        if (items.has(product)) {
            let oldQuantity = Number(items.get(product));
            items.set(product, oldQuantity + quantity);
        } else {
            items.set(product, quantity);
        }

    }

    let iterator = Array.from(items.entries());

    for (const kvp of iterator) {
        console.log(`${kvp[0]} -> ${kvp[1]}`);
    }
}

storage(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']
);