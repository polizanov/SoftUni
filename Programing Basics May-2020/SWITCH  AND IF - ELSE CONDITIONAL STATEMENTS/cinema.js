function cinema(type, r, c) {
    r = Number(r);
    c = Number(c);

    let numPeople = r * c;
    let price = 0;

    switch (type) {
        case 'Premiere':
            price = numPeople * 12;
            break;
        case 'Normal':
            price = numPeople * 7.50;
            break;
        case 'Discount':
            price = numPeople * 5.00;
    }

    console.log(`${(price).toFixed(2)} leva`);

}

cinema("Premiere",
    "10",
    "12")

