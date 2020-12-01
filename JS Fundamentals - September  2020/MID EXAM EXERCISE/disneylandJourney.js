function disneylandJourney(input) {
    let priceForJourney = Number(input.shift());
    let numMounts = Number(input.shift());
    let totalMoney = 0;
    let moneyForCollect = priceForJourney * 0.25

    for (let mounth = 1; mounth <= numMounts; mounth++) {

        if (mounth % 4 == 0) {
            totalMoney += totalMoney * 0.25;
        }

        if (mounth !== 1 && mounth % 2 !== 0) {
            totalMoney -= totalMoney * 0.16;
        }

        totalMoney += moneyForCollect;
    }

    if (totalMoney >= priceForJourney) {
        console.log(`Bravo! You can go to Disneyland and you will have ${(totalMoney - priceForJourney).toFixed(2)}lv. for souvenirs.`)
    } else {
        console.log(`Sorry. You need ${(priceForJourney - totalMoney).toFixed(2)}lv. more.`);
    }

}

disneylandJourney(['1000', '4']);