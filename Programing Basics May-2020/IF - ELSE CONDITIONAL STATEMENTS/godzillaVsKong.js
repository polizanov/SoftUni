function godzila(buget, sumSt, priceForOneSt) {
    buget = Number(buget);
    sumSt = Number(sumSt);
    priceForOneSt = Number(priceForOneSt);

    let discount = 0

    decor = buget * 0.10;

    if (sumSt > 150) {
        discount = priceForOneSt * 0.10;
    }

    priceForClothes = sumSt * (priceForOneSt - discount);
    priceForFilm = decor + priceForClothes;

    if (buget < priceForFilm) {
        console.log("Not enough money!");
        console.log(`Wingard needs ${(priceForFilm - buget).toFixed(2)} leva more.`);
    } else {
        console.log(`Action!`);
        console.log(`Wingard starts filming with ${(buget - priceForFilm).toFixed(2)} leva left.`);
    }

}

godzila("9587.88",
    "222",
    "55.68")

