function storeCatalog(input) {
    let products = {}

    for (const line of input) {
        let [name, price] = line.split(" : ");
        price = Number(price);
        let groupName = name[0];

        if (!products[groupName]) {
            products[groupName] = [];
        }

        products[groupName].push({ name, price });
    }

    Object.keys(products)
        .sort((a, b) => a.localeCompare(b))
        .forEach(key => {
            console.log(key);
            products[key].sort((a, b) => a.name.localeCompare(b.name))
                .forEach(obj => {
                    console.log(`  ${obj.name}: ${obj.price}`);
                })
        })
}