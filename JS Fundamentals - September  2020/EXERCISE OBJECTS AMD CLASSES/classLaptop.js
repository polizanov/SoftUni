class Laptop {
    constructor(objData, quality) {
        this.objData = objData;
        this.quality = Number(quality)
        this.isOn = false;
    }

    turnOn() {
        this.isOn = true;
        this.quality--;
    }

    turnOff() {
        this.isOn = false;
        this.quality--;
    }

    showInfo() {
        let laptopData = {};
        laptopData.producer = this.objData.producer;
        laptopData.age = this.objData.age;
        laptopData.brand = this.objData.brand;
        return JSON.stringify(laptopData);
    }

    price() {
        return Number(800 - (this.objData.age * 2) + (this.quality * 0.5))
    }

}

let info = { producer: "Dell", age: 2, brand: "XPS" }
let laptop = new Laptop(info, 10)
laptop.turnOn()
console.log(laptop.showInfo())
laptop.turnOff()
console.log(laptop.quality)
laptop.turnOn()
console.log(laptop.isOn)
console.log(laptop.price());


