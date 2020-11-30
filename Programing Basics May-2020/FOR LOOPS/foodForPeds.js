function foodForPeds(inputData) {
    let index = 0;
    let numDays = Number(inputData[index++]);
    let allFood = Number(inputData[index++]);
    let bonusFood = 0;
    let dogFood = 0;
    let catFood = 0;
    let sumEatenFood = 0;


    for (let curDay = 1; curDay <= numDays; curDay++) {
        let foodForDog = Number(inputData[index++]);
        let foodForCat = Number(inputData[index++]);

        dogFood += foodForDog;
        catFood += foodForCat;

        Food = foodForCat + foodForDog
        sumEatenFood += Food;



        if (curDay % 3 == 0) {
            bonusFood = Food * 0.10;
        }



    }

    console.log(`Total eaten biscuits: ${Math.round(bonusFood)}gr.`);
    console.log(`${((sumEatenFood / allFood) * 100).toFixed(2)}% of the food has been eaten.`);
    console.log(`${((dogFood / sumEatenFood) * 100).toFixed(2)}% eaten from the dog.`);
    console.log(`${((catFood / sumEatenFood) * 100).toFixed(2)}% eaten from the cat.`);

}

foodForPeds([
    '3', '500',
    '100', '30',
    '110', '25',
    '120', '35'
])