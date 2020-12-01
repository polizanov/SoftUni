class Vehicle {
    constructor(type, model, parts, fuel) {
        this.type = type;
        this.model = model;
        this.parts = parts;
        this.parts.quality = parts.engine * parts.power;
        this.fuel = fuel;
    }

    drive(lostFuel) {
        this.fuel -= lostFuel;
    }

}

let partsForCar = {
    engine: 6,
    power: 100,
};

let vehicle = new Vehicle('a', 'b', partsForCar, 200);
vehicle.drive(100);
console.log(vehicle.fuel);
console.log(vehicle.parts.quality);

