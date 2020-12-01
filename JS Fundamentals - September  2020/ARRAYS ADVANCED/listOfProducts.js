function listOfProducts(arrayOfProducts) {
    let sortedProducts = arrayOfProducts.sort((a, b) => a.localeCompare(b));
    printProducts(sortedProducts);

    function printProducts(arr) {
        for (let i = 0; i < arr.length; i++) {
            console.log(`${i + 1}.${arr[i]}`);
        }
    }
}

listOfProducts(["Potatoes", "Tomatoes", "Onions", "Apples"]);