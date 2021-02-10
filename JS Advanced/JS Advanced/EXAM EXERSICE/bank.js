class Bank {
    constructor(bankName) {
        this._bankName = bankName;
        this.allCustomers = [];
    }

    newCustomer(customerObj) {
        this.allCustomers
            .forEach((obj) => {
                if (obj.personalId == customerObj.personalId) {
                    throw new Error(`${customerObj.firstName} ${customerObj.lastName} is already our customer!`);
                }
            })

        this.allCustomers.push(customerObj)
        return customerObj
    }

    depositMoney(personalID, amount) {
        for (const obj of this.allCustomers) {
            if (obj.personalId == personalID) {
                if (!obj.hasOwnProperty("totalMoney")) {
                    obj["totalMoney"] = 0
                }

                if (!obj.hasOwnProperty("transactions")) {
                    obj["transactions"] = []
                }

                obj.totalMoney = obj.totalMoney + amount;
                obj.transactions.push(`${obj.firstName} ${obj.lastName} made deposit of ${amount}$!`);
                return `${obj.totalMoney}$`
            }
        }

        throw new Error("We have no customer with this ID!");
    }

    withdrawMoney(personalId, amount) {
        for (const obj of this.allCustomers) {
            if (obj.personalId == personalId) {
                if (obj.totalMoney >= amount) {
                    obj.totalMoney = obj.totalMoney - amount;
                    obj.transactions.push(`${obj.firstName} ${obj.lastName} withdrew ${amount}$!`);
                    return `${obj.totalMoney}$`
                } else {
                    throw new Error(`${obj.firstName} ${obj.lastName} does not have enough money to withdraw that amount!`);
                }
            }
        }

        throw new Error("We have no customer with this ID!");
    }

    customerInfo(personalId) {
        let output = ""
        for (const obj of this.allCustomers) {
            if (obj.personalId == personalId) {
                output += `Bank name: ${this._bankName}\nCustomer name: ${obj.firstName} ${obj.lastName}\n`;
                output += `Customer ID: ${personalId}\nTotal Money: ${obj.totalMoney}$\nTransactions:\n`;

                let numTransaction = obj.transactions.length;

                while (obj.transactions.length > 0) {
                    let curTransaction = obj.transactions.pop();
                    output += `${numTransaction--}. ${curTransaction}\n`
                }
                return output.trim();
            }
        }

        throw new Error("We have no customer with this ID!");
    }
}

