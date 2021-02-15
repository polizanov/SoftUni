const { assert } = require("chai");
const dealership = require("./delarship");

describe("Dealership object", function () {
    it("newCarCost", function () {
        let firstTest = dealership.newCarCost("Audi A4 B8", 60000);
        let secondTest = dealership.newCarCost("Audi A3", 6000);

        assert.equal(firstTest, 45000);
        assert.equal(secondTest, 6000);
    });

    it("carEquipment", function () {
        let firstTest = dealership.carEquipment(["heated seats", "sliding roof", "sport rims", "navigation"], [0, 1, 3]);
        let secondTest = dealership.carEquipment(["heated seats", "sliding roof", "sport rims", "navigation"], []);

        assert.deepEqual(firstTest, ["heated seats", "sliding roof", "navigation"]);
        assert.deepEqual(secondTest, []);
    });

    it("euroCategory", function () {
        let firstTest = dealership.euroCategory(5);
        let secondTest = dealership.euroCategory(3);
        let thirdTest = dealership.euroCategory(4);

        assert.equal(firstTest, "We have added 5% discount to the final price: 14250.");
        assert.equal(secondTest, "Your euro category is low, so there is no discount from the final price!");
        assert.equal(thirdTest, "We have added 5% discount to the final price: 14250.");

    });
});
