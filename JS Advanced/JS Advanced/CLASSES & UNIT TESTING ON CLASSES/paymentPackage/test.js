let { assert } = require("chai");
let PaymentPackage = require("./PaymentPackage")

describe("Payment Package functionality", () => {
    it("Constructor", () => {
        let testObj = new PaymentPackage("Pesho", 55)

        assert.equal(testObj._name, "Pesho");
        assert.equal(testObj._value, 55);
        assert.equal(testObj._VAT, 20);
        assert.equal(testObj._active, true);
    });

    it("Name", () => {
        let testObj = new PaymentPackage("Pesho", 55)

        assert.equal(testObj.name, "Pesho");
        assert.throw(() => { testObj.name = 55 }, "Name must be a non-empty string");
        assert.throw(() => { testObj.name = "" }, "Name must be a non-empty string");
    });

    it("Value", () => {
        let testObj = new PaymentPackage("Pesho", 55)

        assert.equal(testObj.value, 55);
        assert.throw(() => { testObj.value = "invalid" }, "Value must be a non-negative number");
        assert.throw(() => { testObj.value = -55 }, "Value must be a non-negative number");
        assert.doesNotThrow(() => { testObj.value = 0 });
    });

    it("Vat", () => {
        let testObj = new PaymentPackage("Pesho", 55);

        assert.equal(testObj.VAT, 20);
        assert.throw(() => { testObj.VAT = "invalid" }, "VAT must be a non-negative number");
        assert.throw(() => { testObj.VAT = -55 }, "VAT must be a non-negative number");
        assert.doesNotThrow(() => { testObj.VAT = 0 });
    });

    it("Active", () => {
        let testObj = new PaymentPackage("Pesho", 55);

        assert.equal(testObj.active, true);
        assert.throw(() => { testObj.active = "invalid" }, "Active status must be a boolean");
        assert.throw(() => { testObj.active = 15 }, "Active status must be a boolean");
    });

    it("To String", () => {
        let testObj = new PaymentPackage("Pesho", 55);

        function getOutput(name, value, VAT = 20, active = true) {
            return [
                `Package: ${name}` + (active === false ? ' (inactive)' : ''),
                `- Value (excl. VAT): ${value}`,
                `- Value (VAT ${VAT}%): ${value * (1 + VAT / 100)}`
            ].join('\n')
        }

        assert.equal(testObj.toString(), getOutput("Pesho", 55));
        testObj.active = false;
        assert.equal(testObj.toString(), getOutput("Pesho", 55, 20, false));
        testObj.VAT = 80;
        assert.equal(testObj.toString(), getOutput("Pesho", 55, 80, false));
        testObj.value = 77;
        assert.equal(testObj.toString(), getOutput("Pesho", 77, 80, false));
        testObj.name = 'Darin';
        assert.equal(testObj.toString(), getOutput("Darin", 77, 80, false));


    });
})