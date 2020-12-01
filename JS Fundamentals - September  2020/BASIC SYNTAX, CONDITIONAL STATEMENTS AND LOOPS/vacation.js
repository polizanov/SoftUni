function vacation(groupOfPeople, typeOfPeople, dayOfWeek) {
    groupOfPeople = Number(groupOfPeople);
    let price = 0;

    switch (typeOfPeople) {
        case 'Students':
            switch (dayOfWeek) {
                case 'Friday':
                    price = 8.45;
                    break;
                case 'Saturday':
                    price = 9.80;
                    break;
                case 'Sunday':
                    price = 10.46;
                    break;
            }
            break;
        case 'Business':
            switch (dayOfWeek) {
                case 'Friday':
                    price = 10.90;
                    break;
                case 'Saturday':
                    price = 15.60;
                    break;
                case 'Sunday':
                    price = 16;
                    break;
            }
            break;
        case 'Regular':
            switch (dayOfWeek) {
                case 'Friday':
                    price = 15;
                    break;
                case 'Saturday':
                    price = 20;
                    break;
                case 'Sunday':
                    price = 22.50;
                    break;
            }
            break;
    }

    if (typeOfPeople == 'Students' && groupOfPeople >= 30) {
        price = groupOfPeople * price;
        price = price * 0.85;
    } else if (typeOfPeople == 'Business' && groupOfPeople >= 100) {
        price = (groupOfPeople - 10) * price;
    } else if (typeOfPeople == 'Regular' && groupOfPeople >= 10 && groupOfPeople <= 20) {
        price = groupOfPeople * price;
        price = price * 0.95;
    } else {
        price = groupOfPeople * price;
    }

    console.log(`Total price: ${price.toFixed(2)}`);


}

vacation(40,
    "Regular",
    "Saturday"

)