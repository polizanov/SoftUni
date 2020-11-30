function greening(meeters) {
    let sqMeetersPrice = meeters * 7.61;
    let discount = sqMeetersPrice * 0.18;
    let theFinalPrice = sqMeetersPrice - discount;

    console.log(`The final price is: ${(theFinalPrice).toFixed(2)} lv.`);
    console.log(`The discount is: ${(discount).toFixed(2)} lv.`);

}

greening("550")