function newHome(typeFlowers, numFlowers, buget) {
    numFlowers = Number(numFlowers);
    buget = Number(buget);
    let price = 0;
    let discount = 0;
    let finalPrice = 0;

    switch (typeFlowers) {
        case 'Roses':
            price = numFlowers * 5;
            break;
        case 'Dahlias':
            price = numFlowers * 3.80;
            break;
        case 'Tulips':
            price = numFlowers * 2.80;
            break;
        case 'Narcissus':
            price = numFlowers * 3;
            break;
        case 'Gladiolus':
            price = numFlowers * 2.50;
            break;
    }


    if (typeFlowers == 'Roses' && numFlowers > 80) {
        discount = price * 0.10;
    } else if (typeFlowers == 'Dahlias' && numFlowers > 90) {
        discount = price * 0.15;
    } else if (typeFlowers == 'Tulips' && numFlowers > 80) {
        discount = price * 0.15;
    } else if (typeFlowers == 'Narcissus' && numFlowers < 120) {
        discount = price * 0.15;
    } else if (typeFlowers == 'Gladiolus' && numFlowers < 80) {
        discount = price * 0.20;
    }

    if (typeFlowers == 'Narcissus' || typeFlowers == 'Gladiolus') {
        finalPrice = price + discount;
    } else {
        finalPrice = price - discount;
    }


    if (buget >= finalPrice) {
        console.log(`Hey, you have a great garden with ${numFlowers} ${typeFlowers} and ${(buget - finalPrice).toFixed(2)} leva left.`);
    } else if (finalPrice > buget) {
        console.log(`Not enough money, you need ${(finalPrice - buget).toFixed(2)} leva more.`);
    }

}

newHome("Narcissus",
    119,
    360)


