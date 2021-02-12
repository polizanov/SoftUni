class Parking {
    constructor(capacity, vehicles = []) {
        this.capacity = Number(capacity);
        this.vehicles = vehicles;
    }

    addCar(carModel, carNumber) {
        if (this.vehicles.length >= this.capacity) {
            throw new Error("Not enough parking space.");
        }

        this.vehicles.push({ carModel, carNumber, payed: false })
        return `The ${carModel}, with a registration number ${carNumber}, parked.`;
    }

    removeCar(carNumber) {
        for (const curCar of this.vehicles) {
            if (curCar.carNumber == carNumber) {
                if (curCar.payed) {
                    this.vehicles = this.vehicles.filter(obj => obj.carNumber != carNumber);
                    return `${carNumber} left the parking lot.`
                }

                throw new Error(`${carNumber} needs to pay before leaving the parking lot.`);
            }
        }

        throw new Error(`The car, you're looking for, is not found.`);
    }

    pay(carNumber) {
        for (const curCar of this.vehicles) {
            if (curCar.carNumber == carNumber) {
                if (curCar.payed) {
                    throw new Error(`${carNumber}'s driver has already payed his ticket.`);
                }

                curCar.payed = true;
                return `${carNumber}'s driver successfully payed for his stay.`
            }
        }

        throw new Error(`${carNumber} is not in the parking lot.`)
    }

    getStatistics(carNumber) {
        let isPayed;
        let output = '';
        if (carNumber == undefined) {
            output += `The Parking Lot has ${this.capacity - this.vehicles.length} empty spots left.\n`;
            this.vehicles
                .sort((a, b) => a.carModel.localeCompare(b.carModel))
                .forEach(curObj => {
                    curObj.payed ? isPayed = `Has payed` : isPayed = "Not payed";
                    output += `${curObj.carModel} == ${curObj.carNumber} - ${isPayed}\n`
                })
            return output.trim();
        }


        for (const curCar of this.vehicles) {
            if (curCar.carNumber == carNumber) {
                curCar.payed ? isPayed = "Has payed" : isPayed = "Not payed";

                return `${curCar.carModel} == ${curCar.carNumber} - ${isPayed}`;
            }
        }
    }
}





