const { assert } = require("chai");
const HolidayPackage = require("./holidayPackage");

describe("ChristmasMovies", function () {
    it("Constructor", function () {
        let firstTest = new HolidayPackage("Bansko", "winter");
        assert.deepEqual(firstTest.vacationers, []);
        assert.equal(firstTest.destination, "Bansko");
        assert.equal(firstTest.season, "winter");
        assert.equal(firstTest.insuranceIncluded, false);
    });

    it("showVacationers", function () {
        let firstTest = new HolidayPackage("Bansko", "winter");
        assert.equal(firstTest.showVacationers(), "No vacationers are added yet");

        firstTest.addVacationer("Bob Smith");
        firstTest.addVacationer("Jonh Smith");
        assert.equal(firstTest.showVacationers(), "Vacationers:\n" + "Bob Smith\n" + "Jonh Smith");

        let secondTest = new HolidayPackage("Bansko", "summber");
        secondTest.addVacationer("Jonh Smith")
        assert.equal(secondTest.showVacationers(), "Vacationers:\n" + "Jonh Smith");
    });

    it("addVacationer", function () {
        let firstTest = new HolidayPackage("Bansko", "winter");

        assert.throw(() => firstTest.addVacationer(" "), "Vacationer name must be a non-empty string");
        assert.throw(() => firstTest.addVacationer(5), "Vacationer name must be a non-empty string");
        assert.throw(() => firstTest.addVacationer(false), "Vacationer name must be a non-empty string");
        assert.throw(() => firstTest.addVacationer(), "Vacationer name must be a non-empty string");

        assert.throw(() => firstTest.addVacationer("Jonh"), "Name must consist of first name and last name");
        assert.throw(() => firstTest.addVacationer("Jonh Doe Smith"), "Name must consist of first name and last name");

        firstTest.addVacationer("Jonh Smith");
        assert.deepEqual(firstTest.vacationers, ["Jonh Smith"]);

        firstTest.addVacationer("Bo Bill");
        assert.deepEqual(firstTest.vacationers, ["Jonh Smith", "Bo Bill"]);
    });

    it("insuranceIncluded", function () {
        let firstTest = new HolidayPackage("Bansko", "winter");
        assert.equal(firstTest.insuranceIncluded, false);

        firstTest.insuranceIncluded = true;
        assert.equal(firstTest.insuranceIncluded, true);

        assert.throw(() => firstTest.insuranceIncluded = "Jonh", "Insurance status must be a boolean");
        assert.throw(() => firstTest.insuranceIncluded = 5, "Insurance status must be a boolean");
    });

    it("generateHolidayPackage", function () {
        let firstTest = new HolidayPackage("Bansko", "Winter");
        let secondTest = new HolidayPackage("Tryavna", "spring");
        let thirdTest = new HolidayPackage("Bansko", "Summer");
        assert.throw(() => firstTest.generateHolidayPackage(), "There must be at least 1 vacationer added");
        assert.throw(() => secondTest.generateHolidayPackage(), "There must be at least 1 vacationer added");
        firstTest.addVacationer("Bob Smith");
        firstTest.addVacationer("Jonh Smith");

        secondTest.addVacationer("Bob Smith");
        secondTest.addVacationer("Jonh Smith");

        thirdTest.addVacationer("Bob Smith");
        thirdTest.addVacationer("Jonh Smith");

        assert.equal(firstTest.generateHolidayPackage(), "Holiday Package Generated\n" + "Destination: " + "Bansko" + "\n" + "Vacationers:\n" + "Bob Smith\n" + "Jonh Smith" + "\n" + "Price: 1000");
        firstTest.insuranceIncluded = true;
        assert.equal(firstTest.generateHolidayPackage(), "Holiday Package Generated\n" + "Destination: " + "Bansko" + "\n" + "Vacationers:\n" + "Bob Smith\n" + "Jonh Smith" + "\n" + "Price: 1100");

        assert.equal(secondTest.generateHolidayPackage(), "Holiday Package Generated\n" + "Destination: " + "Tryavna" + "\n" + "Vacationers:\n" + "Bob Smith\n" + "Jonh Smith" + "\n" + "Price: 800");
        secondTest.insuranceIncluded = true;
        assert.equal(secondTest.generateHolidayPackage(), "Holiday Package Generated\n" + "Destination: " + "Tryavna" + "\n" + "Vacationers:\n" + "Bob Smith\n" + "Jonh Smith" + "\n" + "Price: 900");

        assert.equal(thirdTest.generateHolidayPackage(), "Holiday Package Generated\n" + "Destination: " + "Bansko" + "\n" + "Vacationers:\n" + "Bob Smith\n" + "Jonh Smith" + "\n" + "Price: 1000");
        thirdTest.insuranceIncluded = true;
        assert.equal(thirdTest.generateHolidayPackage(), "Holiday Package Generated\n" + "Destination: " + "Bansko" + "\n" + "Vacationers:\n" + "Bob Smith\n" + "Jonh Smith" + "\n" + "Price: 1100");
    });

});