const { assert } = require("chai");
const numberOperations = require("./numberOperations");


describe("Functionality", function () {
    it("powNumber", function () {
        assert.equal(numberOperations.powNumber(5), 25);
    });

    it("numberChecker", function () {
        let secondTest = numberOperations.numberChecker(5);
        let thirdTest = numberOperations.numberChecker(100);
        let forthTest = numberOperations.numberChecker(1000);

        assert.throw(() => numberOperations.numberChecker("Pesho"), "The input is not a number!");
        assert.equal(secondTest, "The number is lower than 100!");
        assert.equal(thirdTest, "The number is greater or equal to 100!");
        assert.equal(forthTest, "The number is greater or equal to 100!");
    });

    it("sumArrays", function () {
        let firstTest = numberOperations.sumArrays([1, 2, 3], [1, 2, 3, 4])
        let secondTest = numberOperations.sumArrays([2, 4, 6, 8, 10], [2, 4, 6, 8, 10, 12])

        assert.deepEqual(firstTest, [2, 4, 6, 4])
        assert.deepEqual(secondTest, [4, 8, 12, 16, 20, 12])
    });


});


