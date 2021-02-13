const { assert } = require("chai");
const pizzUni = require("./pizzUni");

describe("PizzUni", function () {
    describe("Functionality", function () {

        it("makeAnOrder", function () {
            assert.throw(() => pizzUni.makeAnOrder({ orderedDrink: "drink" }), "You must order at least 1 Pizza to finish the order.");
            assert.equal(pizzUni.makeAnOrder({ orderedPizza: "pizza" }), "You just ordered pizza");
            assert.equal(pizzUni.makeAnOrder({ orderedPizza: "pizza", orderedDrink: "some drink" }), "You just ordered pizza and some drink.");
        });

        it("getRemainingWork", function () {
            let firstStatus = pizzUni.getRemainingWork([
                { pizzaName: "the name of the pizza", status: "ready" },
                { pizzaName: "the name of the pizza2", status: "ready" },
                { pizzaName: "the name of the pizza3", status: "ready" }]);


            let secondStatus = pizzUni.getRemainingWork([
                { pizzaName: "the name of the pizza", status: "preparing" },
                { pizzaName: "the name of the pizza2", status: "preparing" },
                { pizzaName: "the name of the pizza3", status: "preparing" }]);

            let thirdStatus = pizzUni.getRemainingWork([
                { pizzaName: "the name of the pizza", status: "preparing" },
                { pizzaName: "the name of the pizza2", status: "ready" },
                { pizzaName: "the name of the pizza3", status: "preparing" }]);

            assert.equal(firstStatus, "All orders are complete!");
            assert.equal(secondStatus, "The following pizzas are still preparing: the name of the pizza, the name of the pizza2, the name of the pizza3.");
            assert.equal(thirdStatus, "The following pizzas are still preparing: the name of the pizza, the name of the pizza3.");

        });

        it("orderType", function () {
            let firsTest = pizzUni.orderType(90, "Carry Out");
            let secondStatus = pizzUni.orderType(100, "Delivery");
            let thirdStatus = pizzUni.orderType(-10, "Delivery");
            let forthStatus = pizzUni.orderType(-10, "Carry Out");


            assert.equal(firsTest, 81);
            assert.equal(secondStatus, 100);
            assert.equal(thirdStatus, -10);
            assert.equal(forthStatus, -9)
        });


    });


});
