let { assert } = require("chai");
let isSymmetric = require("./chekForSymmetry");

describe("Check for symmetry", () => {
    it("Should return true with correct array", () => {
        assert.equal(true, isSymmetric([1, 1]));
    });

    it("Should return false if array is not symetric", () => {
        assert.equal(false, isSymmetric([5, 7]));
    });

    it("Should return false with incorrect type", () => {
        assert.equal(false, isSymmetric("p"));
    });

    it("Should return true with correct array - odd elements", () => {
        assert.equal(true, isSymmetric([1, 1, 1]));
    });

    it("Should return true with incocorrect array - odd elements", () => {
        assert.equal(true, isSymmetric(["s", "s"]));
    });

    it("Should return false with incocorrect array - odd elements", () => {
        assert.equal(false, isSymmetric(["s", "p"]));
    });


    it("Should return false if array is with dif element symetric", () => {
        assert.equal(false, isSymmetric([5, "5"]));
    });

})