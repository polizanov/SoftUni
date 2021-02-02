let { assert } = require("chai");
let mathEnforcer = require("./mathEnforcer");

describe("Math Enforcer", () => {
    describe("addFive", () => {
        it("Should addFive work with correct number as argument", () => {
            let result = mathEnforcer.addFive(5);
            assert.equal(10, result);
        });

        it("Should addFive work with correct floating point number as argument", () => {
            let result = mathEnforcer.addFive(0.01);
            assert.equal(5.01, result);
        });

        it("Should addFive work with negative number as argument", () => {
            let result = mathEnforcer.addFive(-3);
            assert.equal(2, result);
        });

        it("Should addFive work with 0 at floating point number as argument", () => {
            let result = mathEnforcer.addFive(0.00);
            assert.equal(5, result);
        });

        it("Should addFive return undefined with NaN as argument", () => {
            let result = mathEnforcer.addFive("test");
            assert.equal(undefined, result);
        });

        it("Should addFive return undefined without argument", () => {
            let result = mathEnforcer.addFive();
            assert.equal(undefined, result);
        });

    });

    describe("substractTen", () => {
        it("Should substractTen work with correct number as argument", () => {
            let result = mathEnforcer.subtractTen(20);
            assert.equal(10, result);
        });

        it("Should substractTen work with correct floating point number as argument", () => {
            let result = mathEnforcer.subtractTen(20.50);
            assert.equal(10.50, result);
        });

        it("Should substractTen work with correct floating point number as argument", () => {
            let result = mathEnforcer.subtractTen(0.01);
            assert.equal(-9.99, result.toFixed(2));
        });

        it("Should substractTen work with negative number as argument", () => {
            let result = mathEnforcer.subtractTen(-3);
            assert.equal(-13, result);
        });

        it("Should substractTen work with 0 at floating point number as argument", () => {
            let result = mathEnforcer.subtractTen(0.00);
            assert.equal(-10, result);
        });

        it("Should substractTen return undefined with NaN as argument", () => {
            let result = mathEnforcer.subtractTen("test");
            assert.equal(undefined, result);
        });

        it("Should substractTen return undefined without argument", () => {
            let result = mathEnforcer.subtractTen();
            assert.equal(undefined, result);
        });
    })

    describe("sum", () => {
        it("Should sum work with correct numbers as arguments", () => {
            let result = mathEnforcer.sum(20, 20);
            assert.equal(40, result);
        });

        it("Should sum work with correct floating point number as argument", () => {
            let result = mathEnforcer.sum(20.50, 20.20);
            assert.equal(40.70, result);
        });

        it("Should sum work with correct floating point number as argument", () => {
            let result = mathEnforcer.sum(20.01, 20.00);
            assert.equal(40.01, result.toFixed(2));
        });

        it("Should sum work with negative number as argument", () => {
            let result = mathEnforcer.sum(-3, -5);
            assert.equal(-8, result);
        });

        it("Should sum with 0 at floating point number as argument", () => {
            let result = mathEnforcer.sum(5, 0.00);
            assert.equal(5, result);
        });

        it("Should sum return undefined with NaN as argument", () => {
            let result = mathEnforcer.sum("test", "seconTest");
            assert.equal(undefined, result);
        });

        it("Should sum return undefined if one of arguments is NaN", () => {
            let result = mathEnforcer.sum("test", 5);
            assert.equal(undefined, result);
        });

        it("Should sum return undefined without argument", () => {
            let result = mathEnforcer.sum();
            assert.equal(undefined, result);
        });

        it("Should sum return undefined with one argument", () => {
            let result = mathEnforcer.sum(5);
            assert.equal(undefined, result);
        });
    })
})