function autoCompany(input) {
    let cars = {};

    for (let data of input) {
        let [carBrand, carModel, producedCars] = data.split(" | ");
        producedCars = Number(producedCars);

        if (!cars[carBrand]) {
            cars[carBrand] = [];
            cars[carBrand].push({ carModel, producedCars });
        } else if (cars[carBrand].some(currentCar => currentCar.carModel === carModel)) {
            let findedCar = cars[carBrand].find(obj => obj.carModel === carModel);
            findedCar.producedCars += producedCars
        } else {
            cars[carBrand].push({ carModel, producedCars })
        }



    }


    Object.entries(cars)
        .forEach(kvp => {
            console.log(kvp[0]);
            kvp[1].forEach(obj => {
                console.log(`###${obj.carModel} -> ${obj.producedCars}`);
            })
        });
}

autoCompany(
    ['Audi | Q7 | 1000',
        'Audi | Q6 | 100',
        'BMW | X5 | 1000',
        'BMW | X6 | 100',
        'Citroen | C4 | 123',
        'Volga | GAZ-24 | 1000000',
        'Lada | Niva | 1000000',
        'Lada | Jigula | 1000000',
        'Citroen | C4 | 22',
        'Citroen | C5 | 10']

)