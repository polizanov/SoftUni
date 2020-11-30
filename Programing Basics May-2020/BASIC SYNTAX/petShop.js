function petShop(dog, others) {
    let numDog = 2.50 * dog;
    let numOthersAnimals = 4 * others;
    let finalPrice = numDog + numOthersAnimals;

    console.log(`${finalPrice} lv.`);

}

petShop("5", "4")