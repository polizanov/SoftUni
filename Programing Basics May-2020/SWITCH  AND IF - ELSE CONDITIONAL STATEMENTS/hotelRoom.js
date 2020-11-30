function hotelRoom(mount, numNights) {
    numNights = Number(numNights);
    let studioPrice = 0;
    let apartmentPrice = 0;

    switch (mount) {
        case 'May':
        case 'October':
            studioPrice = 50;
            apartmentPrice = 65;
            if (numNights > 14) {
                studioPrice = studioPrice * 0.70;
            } else if (numNights > 7) {
                studioPrice = studioPrice * 0.95;
            }
            break;
        case 'June':
        case 'Seprember':
            studioPrice = 75.20;
            apartmentPrice = 68.70;
            if (numNights > 14) {
                studioPrice = studioPrice * 0.80;
            }
            break;
        case 'July':
        case 'August':
            studioPrice = 76;
            apartmentPrice = 77;
            break;
    }

    if (numNights > 14) {
        apartmentPrice = apartmentPrice * 0.90;
    }

    fullApartmentPrice = apartmentPrice * numNights;
    fullStudioPrice = studioPrice * numNights;

    console.log(`Apartment: ${(fullApartmentPrice).toFixed(2)} lv.`);
    console.log(`Studio: ${(fullStudioPrice).toFixed(2)} lv.`);
}


hotelRoom("August",
    "20")


