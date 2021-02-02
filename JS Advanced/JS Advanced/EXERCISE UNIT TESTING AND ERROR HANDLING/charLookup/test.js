let {assert} = require("chai");
let lookupChar = require("./charLookup");

describe("Char Lookup", () => {
    it("Should return undefined wthout param", () => {
        assert.equal(undefined, lookupChar());
    });

    it("Should return undefined if first parameter is not a string", () => {
        assert.equal(undefined, lookupChar(5, 5))
    });

    it("Should return undefined if second parameter is not a number", () => {
        assert.equal(undefined, lookupChar("text", "invalid"));
    });

    it("Should return undefined if second parameter is a number with floating point", () => {
        assert.equal(undefined, lookupChar("text", 2.5));
    });

    it("Should return Incorrect index if string is empty", () => {
        assert.equal("Incorrect index", lookupChar("", 0));
    });

    it("Should return 'Incorrect index' with bigger index", () => {
        assert.equal("Incorrect index", lookupChar("text", 99));
    });

    it("Should return 'Incorrect index' with equal index to the length", () => {
        assert.equal("Incorrect index", lookupChar("text", 4));
    });

    it("Should return 'Incorrect index' with negative index", () => {
        assert.equal("Incorrect index", lookupChar("text", -1));
    });

    it("Should return correct result with corrext params", () => {
        assert.equal("t", lookupChar("text", 0));
        assert.equal("e", lookupChar("text", 1));
    });
});