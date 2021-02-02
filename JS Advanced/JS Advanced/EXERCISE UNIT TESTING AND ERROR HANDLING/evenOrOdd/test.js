let {assert} = require("chai");
let isOddOrEven = require("./evenOrOdd");

describe("Even Or Not", () => {
    it("Should return undefined with invalid argument", () => {
        assert.equal(undefined, isOddOrEven(5));
        assert.equal(undefined, isOddOrEven(true));
    });

    it("Should return correct result with valid argument - even length", () => {
        assert.equal("even", isOddOrEven("toto"));
    });

    it("Should return correct result with valid argument - odd length", () => {
        assert.equal("odd", isOddOrEven("tot"));
    });

    it("Should return correct result with valid arguments", () => {
        assert.equal("odd", isOddOrEven("tests"));
        assert.equal("even", isOddOrEven("some"));
    });
});