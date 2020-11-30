function skiTrip(dayForHoliday, typeRoom, grade) {
    dayForHoliday = Number(dayForHoliday);
    numNight = dayForHoliday - 1;
    let discount = 0;
    let price = 0;

    priceForRoomForOnePerson = numNight * 18;
    priceForApartment = numNight * 25;
    priceForPresidentApartment = numNight * 35;

    switch (typeRoom) {
        case 'room for one person':
            discount = 0;
            price = priceForRoomForOnePerson - discount;
            break;
        case 'apartment':
            if (dayForHoliday < 10) {
                discount = priceForApartment * 0.30;
                price = priceForApartment - discount;
            } else if (dayForHoliday >= 10 && dayForHoliday <= 15) {
                discount = priceForApartment * 0.35;
                price = priceForApartment - discount;
            } else if (dayForHoliday > 15) {
                discount = priceForApartment * 0.50;
                price = priceForApartment - discount;
            }
            break;
        case 'president apartment':
            if (dayForHoliday < 10) {
                discount = priceForPresidentApartment * 0.10;
                price = priceForPresidentApartment - discount;
            } else if (dayForHoliday >= 10 && dayForHoliday <= 15) {
                discount = priceForPresidentApartment * 0.15;
                price = priceForPresidentApartment - discount;
            } else if (dayForHoliday > 15) {
                discount = priceForPresidentApartment * 0.20;
                price = priceForPresidentApartment - discount;
            }
            break;
    }

    if (grade == 'positive') {
        price = price + (price * 0.25);
    } else if (grade == 'negative') {
        price = price - (price * 0.10);
    }

    console.log(price.toFixed(2));

}


skiTrip(12, 'room for one person', 'positive')

