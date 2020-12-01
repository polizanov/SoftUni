function furniture(input) {
    let products = [];
    let totalPrice = 0;

    for (line of input) {
        let pattern = />>(?<name>[A-Za-z]+)<<(?<price>[\d]+\.?[\d]*)!(?<quantity>[\d]+)/g.exec(line);

        if (pattern) {
            products.push(pattern.groups.name);
            totalPrice += Number(pattern.groups.price) * Number(pattern.groups.quantity);
        }
    }

    console.log('Bought furniture:');

    if (products.length > 0) {
        console.log(products.join("\n"));
    }

    console.log(`Total money spend: ${totalPrice.toFixed(2)}`);

}

furniture(['>>Sofa<<312.23!3', '>>TV<<300!5', '>Invalid<<!5', 'Purchase'])