function storeProvision(orderedStock, localStock) {
    class Stock {
        constructor(item, quantity) {
            this.item = item;
            this.quantity = quantity;
        }
    }

    function stocksInObj(orderedArr, localArr) {
        let stocks = [];
        while (orderedArr.length > 0) {
            let orderedItem = orderedArr.shift();
            let orderedQuantity = Number(orderedArr.shift());
            stocks.push(new Stock(orderedItem, orderedQuantity));
        }

        while (localArr.length > 0) {
            let localItem = localArr.shift();
            let localQuantity = Number(localArr.shift());
            stocks.push(new Stock(localItem, localQuantity));
        }
        return stocks;
    }

    let stocksObj = stocksInObj(orderedStock, localStock);




    console.log(stocksObj);
    console.log(sumProducts(stocksObj));
}

storeProvision(
    [
        'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
)