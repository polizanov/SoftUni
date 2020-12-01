function storeProvosion(stockArr, orderedArr) {
    let arrOfProducts = [];
    class Products {
        constructor(name, quantity) {
            this.name = name;
            this.quantity = quantity;
        }
    }

    for (let i = 0; i < stockArr.length; i += 2) {
        if (orderedArr.includes(stockArr[i])) {
            let product = {};
            let productName = stockArr[i];
            let productQuantity = Number(orderedArr[orderedArr.indexOf(stockArr[i]) + 1]) + Number(stockArr[i + 1]);
            product = new Products(productName, productQuantity);
            arrOfProducts.push(product);
        } else {
            let product = {};
            let productName = stockArr[i];
            let productQuantity = Number(stockArr[i + 1]);
            product = new Products(productName, productQuantity);
            arrOfProducts.push(product);
        }
    }

    for (let i = 0; i < orderedArr.length; i += 2) {
        if (!stockArr.includes(orderedArr[i])) {
            let product = {};
            let productName = orderedArr[i];
            let productQuantity = Number(orderedArr[i + 1]);
            product = new Products(productName, productQuantity);
            arrOfProducts.push(product);
        }
    }

    arrOfProducts.forEach(objProduct => {
        console.log(`${objProduct.name} -> ${objProduct.quantity}`);
    })
}


storeProvosion([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
);
