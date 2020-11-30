function tradeCommisions(town, commision) {
    commision = Number(commision);
    price = 0

    switch (town) {
        case 'Sofia':
            if (commision < 0) {
                console.log('error');
            } else if (commision >= 0 && commision <= 500) {
                price = commision * 0.05;
            } else if (commision > 500 && commision <= 1000) {
                price = commision * 0.07;
            } else if (commision > 1000 && commision <= 10000) {
                price = commision * 0.08;
            } else if (commision > 10000) {
                price = commision * 0.12;
            }
            break;
        case 'Varna':
            if (commision < 0) {
                console.log('error');
            } else if (commision >= 0 && commision <= 500) {
                price = commision * 0.045;
            } else if (commision > 500 && commision <= 1000) {
                price = commision * 0.075;
            } else if (commision > 1000 && commision <= 10000) {
                price = commision * 0.10;
            } else if (commision > 10000) {
                price = commision * 0.13;
            }
            break;
        case 'Plovdiv':
            if (commision < 0) {
                console.log('error');
            } else if (commision >= 0 && commision <= 500) {
                price = commision * 0.055;
            } else if (commision > 500 && commision <= 1000) {
                price = commision * 0.08;
            } else if (commision > 1000 && commision <= 10000) {
                price = commision * 0.12;
            } else if (commision > 10000) {
                price = commision * 0.145;
            }
            break;
        default:
            console.log('error');
            break;
    }

    if (price != 0) {
        console.log(price.toFixed(2));
    }

}

tradeCommisions("Kaspichan",
    "-50")



