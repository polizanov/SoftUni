function softUniBarIncome(input) {

    let pattern = /%(?<name>[A-Z][a-z]+)%[^|$%.]*<(?<product>[\w]+)>.*[^|$%.]*\|(?<quantity>[\d]+)\|[^|$%.\d]*(?<price>[\d]+\.?[\d]+)\$/;
    let totalIncome = 0;

    for (let line of input) {

        if (line == 'end of shift') {
            break;
        }

        let productInfo = pattern.exec(line);

        if (!productInfo) {
            continue;
        }

        let totalPrice = Number(productInfo.groups.price) * Number(productInfo.groups.quantity);
        totalIncome += totalPrice;

        console.log(`${productInfo.groups.name}: ${productInfo.groups.product} - ${totalPrice.toFixed(2)}`);
    }

    console.log(`Total income: ${totalIncome.toFixed(2)}`)
}

softUniBarIncome([
    '%InvalidName%<Croissant>|2|10.3$',
    '%Peter%<Gum>1.3$',
    '%Maria%<Cola>|1|2.4',
    '%Valid%<Valid>valid|10|valid20$',
    'end of shift'
]

)