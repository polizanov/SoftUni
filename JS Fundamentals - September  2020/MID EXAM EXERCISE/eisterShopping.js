function eisterShopping(input) {
    let shops = input.shift().split(" ");
    let numberOfCommand = Number(input.shift());
    let listShops = input.slice(0, numberOfCommand);

    while (listShops.length > 0) {
        let command = listShops.shift()
        let curCommand = command.split(" ")[0];

        switch (curCommand) {
            case 'Include':
                let shopForInclude = command.split(" ")[1];
                shops.push(shopForInclude);
                break;
            case 'Visit':
                let visitElement = command.split(" ")[1];
                let numVisitShops = command.split(" ")[2];
                shops = visitCase(shops, visitElement, numVisitShops);
                break;
            case 'Prefer':
                let firstShopIndex = Number(command.split(" ")[1]);
                let secondShopIndex = Number(command.split(" ")[2]);
                shops = preferCase(shops, firstShopIndex, secondShopIndex);
                break;
            case 'Place':
                let shopName = command.split(" ")[1];
                let shopIndex = Number(command.split(" ")[2]);
                shops = placeCase(shops, shopName, shopIndex);
                break;
        }
    }

    console.log("Shops left:");
    console.log(shops.join(" "));

    function visitCase(arr, value, num) {
        if (arr.length < num) {
            return arr;
        }

        switch (value) {
            case 'first':
                arr.splice(0, num);
                break;
            case 'last':
                arr.splice(arr.length - num, num);
                break;
        }
        return arr;
    }

    function preferCase(arr, firstIndex, secondIndex) {
        if (firstIndex < 0 || firstIndex >= arr.length || secondIndex < 0 || secondIndex >= arr.length) {
            return arr;
        }

        let firstChangedIndex = arr[secondIndex];
        let secondChangedIndex = arr[firstIndex];

        for (let i = 0; i < arr.length; i++) {
            if (i == firstIndex) {
                arr[i] = firstChangedIndex;
            } else if (i == secondIndex) {
                arr[i] = secondChangedIndex;
            }
        }
        return arr;
    }

    function placeCase(arr, name, index) {
        if (index + 1 < 0 || index + 1 >= arr.length) {
            return arr;
        }

        arr.splice(index + 1, 0, name);
        return arr;
    }

}

eisterShopping([
    'Bershka CandyStore ThriftShop Armani Groceries ToyStore PeakStore',
    '5',
    'Include HM',
    'Visit first 2',
    'Visit last 1',
    'Prefer 3 1',
    'Place Library 2'
]


)