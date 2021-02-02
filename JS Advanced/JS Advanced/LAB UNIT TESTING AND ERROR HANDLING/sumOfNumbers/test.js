let assert = require("chai").assert;
const sum = require("./sumOfNumbers.js");

describe("sumOfNumbers", () => {
    it("Should return correct result", () => {
        assert.equal(7, sum([1,3,3]));
    })

    it("Should trow error with invalid argument", () => {
        assert.throw(() => sum(3), "arr is not iterable")
    })

    it("Should return 0 with empty arr as param", () => {
        assert.equal(0, sum([]));
    })

})
