class Vacationer {
    constructor(fullName, creditCard = [1111, "", 111]) {
        this.fullName = fullName;

        if (typeof creditCard[0] !== "number" || typeof creditCard[2] !== "number") {
            throw new Error("Invalid credit card details")
        }

        if (creditCard.length < 3) {
            throw new Error("Missing credit card information");
        }

        this.creditCard = { cardNumber: creditCard[0], expirationDate: creditCard[1], securityNumber: creditCard[2] };
        this.wishList = [];
        this.idNumber = this.generateIDNumber()
    }

    get fullName() {
        return this._fullName;
    }

    set fullName(value) {
        let names = Object.values(value)
        if (names.length !== 3) {
            throw new Error("Name must include first name, middle name and last name");
        }

        let pattern = /^[A-Z][a-z]+ [A-Z][a-z]+ [A-Z][a-z]+$/g
        if (!pattern.test(names.join(" "))) {
            throw new Error("Invalid full name");
        }
        return this._fullName = { firstName: names[0], middleName: names[1], lastName: names[2] };
    }


    generateIDNumber() {
        let numberId = 0;
        let arr = Object.values(this.fullName);
        numberId += 231 * Number(arr[0].charCodeAt(0)) + 139 * Number(arr[1].length);

        if (arr[2].endsWith("a") || arr[2].endsWith("e") || arr[2].endsWith("o") ||
            arr[2].endsWith("i") || arr[2].endsWith("u")) {
            numberId += "8";
        } else {
            numberId += "7";
        }
        return numberId;
    }

    addCreditCardInfo(input) {
        let [cardNumber, expirationDate, securityNumber] = input;

        if (input.length < 3) {
            throw new Error("Missing credit card information");
        }

        if (typeof cardNumber !== "number" || typeof securityNumber !== "number") {
            throw new Error("Invalid credit card details");
        }

        this.creditCard = { cardNumber, expirationDate, securityNumber };
    }

    addDestinationToWishList(destination) {
        if (this.wishList.includes(destination)) {
            throw new Error("Destination already exists in wishlist");
        }

        this.wishList.push(destination);
        this.wishList = this.wishList.sort((a, b) => a.length - b.length);
    }

    getVacationerInfo() {
        let output = "";
        output += `Name: ${Object.values(this.fullName).join(" ")}\nID Number: ${this.idNumber}\nWishlist:\n`;

        if (this.wishList.length == 0) {
            output += "empty\n";
        } else {
            output += `${this.wishList.join(", ")}\n`
        }

        output += `Credit Card:\nCard Number: ${this.creditCard.cardNumber}\nExpiration Date: ${this.creditCard.expirationDate}\nSecurity Number: ${this.creditCard.securityNumber}`;
        return output;
    }
}

