let {assert} = require("chai");
const rgbToHexColor = require("./RGBtoHex.js");

describe("rgbToHexColor.js", () => {
    describe("Color validation", () => {
        it("Should return undefined with Nan value - fist arg", () => {
            assert.equal(undefined, rgbToHexColor("Pesho", 12, 13));
        });

        it("Should return undefined with Nan value - sec arg", () => {
            assert.equal(undefined, rgbToHexColor(12, "Pesho", 13));
        });

        it("Should return undefined with Nan value - third arg", () => {
            assert.equal(undefined, rgbToHexColor(12, 12, "Pesho"));
        });

        it("Should return undefined with Nan value - all arg", () => {
            assert.equal(undefined, rgbToHexColor("s", "s", "s"));
        });

        it("Should return undefined with invalid value - first arg", () => {
            assert.equal(undefined, rgbToHexColor(256, 12, 13));
        });

        it("Should return undefined with invalid value - sec arg", () => {
            assert.equal(undefined, rgbToHexColor(12, 256, 13));
        });

        it("Should return undefined with invalid value - third arg", () => {
            assert.equal(undefined, rgbToHexColor(12, 12, 256));
        });

        it("Should return undefined with negative value - first arg", () => {
            assert.equal(undefined, rgbToHexColor(-1, 12, 13));
        });

        it("Should return undefined with negative value - sec arg", () => {
            assert.equal(undefined, rgbToHexColor(12, -1, 13));
        });

        it("Should return undefined with negative value - first arg", () => {
            assert.equal(undefined, rgbToHexColor(12, 12, -1));
        });
    });

    describe("Result validation", () => {
        it("Should return corect answer with correct params", () => {
            assert.equal("#FF9EAA", rgbToHexColor(255, 158, 170));
        });

        it("Should return undefined with 2 params", () => {
            assert.equal(undefined, rgbToHexColor(-1, 12));
        });

        it("Should return undefined with 1 param", () => {
            assert.equal(undefined, rgbToHexColor(12));
        });

        it("Should return undefined with without param", () => {
            assert.equal(undefined, rgbToHexColor());
        });
    });
});