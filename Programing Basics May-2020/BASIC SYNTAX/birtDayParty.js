function burthDayParty(rent) {
    rent = Number(rent);

    let cake = rent * 0.20;
    let drink = cake - (cake * 0.45);
    let animator = 1 / 3 * rent;

    let allPriceForParty = cake + drink + animator + rent;

    console.log(allPriceForParty);
}


burthDayParty("2250")