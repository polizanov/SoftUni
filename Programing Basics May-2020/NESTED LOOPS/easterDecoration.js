function eister(inputData) {
    let index = 0;
    let numClient = Number(inputData[index++]);
    let money = 0;

    for (let curClient = 1; curClient <= numClient; curClient++) {
        let item = inputData[index++];
        let curProduct = 0
        let totalMoney = 0

        while (item !== 'Finish') {
            curProduct++

            switch (item) {
                case 'basket':
                    totalMoney += 1.50;
                    break;
                case 'wreath':
                    totalMoney += 3.80;
                    break;
                case 'chocolate bunny':
                    totalMoney += 7;
                    break;
            }

            item = inputData[index++];
        }

        if (curProduct % 2 == 0) {
            totalMoney = totalMoney * 0.80;
        }
        console.log(`You purchased ${curProduct} items for ${(totalMoney).toFixed(2)} leva.`);
        money += totalMoney;
        totalMoney = 0;
        curProduct = 0;

    }

    console.log(`Average bill per client is: ${(money / numClient).toFixed(2)} leva.`);

}

eister([
    '2',
    'basket',
    'wreath',
    'chocolate bunny',
    'Finish',
    'wreath',
    'chocolate bunny',
    'Finish'
]
)