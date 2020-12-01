function halloFrance(input) {
    let itemsData = input.shift().split("|");
    let buget = Number(input.shift());
    let byedItems = [];
    let profit = 0;

    while (itemsData.length > 0) {
        let curItem = itemsData.shift();
        let itemType = curItem.split("->")[0];
        let itemPrice = Number(curItem.split("->")[1]);
        let maxPrice = 0;

        switch (itemType) {
            case 'Clothes':
                maxPrice = 50;
                buget = byingItem(buget, itemPrice, maxPrice);
                break;
            case 'Shoes':
                maxPrice = 35;
                buget = byingItem(buget, itemPrice, maxPrice);
                break;
            case 'Accessories':
                maxPrice = 20.50
                buget = byingItem(buget, itemPrice, maxPrice);
                break;

        }
    }

    let sumNewPrices = sumNum(byedItems);
    let allBuget = (buget + sumNewPrices) - 150;
    console.log(byedItems.join(" "));
    console.log(`Profit: ${profit.toFixed(2)}`);


    if (allBuget >= 0) {
        console.log('Hello, France!');
    } else {
        console.log('Time to go.');
    }


    function sumNum(arr) {
        let sum = 0;
        for (const element of arr) {
            sum += Number(element);
        }
        return sum;
    }

    function byingItem(buget, price, maxPrice) {
        let newPrice = 0;
        if (price <= maxPrice) {
            if (buget >= price) {
                buget -= price;
                newPrice = price * 1.4;
                profit += newPrice - price;
            }
        }

        if (newPrice !== 0) {
            byedItems.push(newPrice.toFixed(2));
        }

        return buget;
    }
}

halloFrance(
    [
        'Clothes->43.30|Shoes->25.25|Clothes->36.52|Clothes->20.90|Accessories->15.60',
        '120'
    ]


);