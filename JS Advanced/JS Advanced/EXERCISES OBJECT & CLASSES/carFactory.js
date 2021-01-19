function carFactory(inputObj) {

    let car = {
        "model": inputObj.model,
        "engine": getEngine(),
        "carriage": {
            "type": inputObj.carriage,
            "color": inputObj.color,
        },
        "wheels": getCarriage(),
    }

    function getEngine() {
        if (inputObj.power <= 90) {
            return {
                "power": 90,
                "volume": 1800,
            }
        } else if (inputObj.power <= 120) {
            return {
                "power": 120,
                "volume": 2400,
            }
        } else if (inputObj.power <= 200) {
            return {
                "power": 200,
                "volume": 3500,
            }
        }
    }

    function getCarriage() {
        if (inputObj.wheelsize % 2 == 0) {
            let size = inputObj.wheelsize - 1;
            return [size, size, size, size];
        }
        return [inputObj.wheelsize, inputObj.wheelsize, inputObj.wheelsize, inputObj.wheelsize];
    }

    return car;
}



carFactory(
    {
        model: 'Opel Vectra',
        power: 110,
        color: 'grey',
        carriage: 'coupe',
        wheelsize: 17
    }

)