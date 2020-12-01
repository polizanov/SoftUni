function oddOccurrences(input) {
    let allItems = input.split(" ").map(el => el.toLowerCase());
    let itemsObj = getObjOfItems(allItems);


    let sortedItemsArr = Object.keys(itemsObj)
        .filter(x => itemsObj[x] % 2 == 1)
        .sort((a, b) => itemsObj[b] - itemsObj[a])

    console.log(sortedItemsArr.join(" "));


    function getObjOfItems(arr) {
        let obj = {};

        for (const key of arr) {
            let objKeys = Object.keys(obj);

            if (objKeys.includes(key)) {
                obj[key]++;
            } else {
                obj[key] = 1;
            }
        }
        return obj;
    }

}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')