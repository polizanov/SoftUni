const { assert } = require("chai");
const ChristmasMovies = require("./02. Christmas Movies_Resources");

describe("ChristmasMovies", function () {
    describe("Functionality ", function () {
        it("Constructor", function () {
            let firsTest = new ChristmasMovies();

            assert.deepEqual(firsTest.movieCollection, []);
            assert.deepEqual(firsTest.watched, {});
            assert.deepEqual(firsTest.actors, []);
            assert.deepEqual(firsTest.movieCollection.length, 0);
            assert.deepEqual(firsTest.actors.length, 0);
        });

        it("buyMovie", function () {
            let firsTest = new ChristmasMovies();
            let secondTest = new ChristmasMovies();

            secondTest.buyMovie("Sparta", ["Bob"]);
            secondTest.buyMovie("Test", ["George", "Jonh"]);

            assert.equal(firsTest.buyMovie("Test movie", ["Pesho", "Gosho"]), "You just got Test movie to your collection in which Pesho, Gosho are taking part!");
            assert.throw(() => firsTest.buyMovie("Test movie", ["Pesho", "Gosho"]), "You already own Test movie in your collection!");
            assert.equal(firsTest.buyMovie(), "You just got undefined to your collection in which  are taking part!");
            assert.equal(firsTest.buyMovie("Just test"), "You just got Just test to your collection in which  are taking part!");
            assert.equal(firsTest.buyMovie(["Justine", "Bo"]), "You just got Justine,Bo to your collection in which  are taking part!");

            assert.deepEqual(secondTest.movieCollection.length, 2);
        });

        it("discardMovie", function () {
            let firsTest = new ChristmasMovies();
            let secondTest = new ChristmasMovies();
            let thirdTest = new ChristmasMovies();
            secondTest.buyMovie("Test movie", ["Pesho", "Gosho"]);
            secondTest.watchMovie("Test movie");

            assert.throw(() => firsTest.discardMovie("Test movie"), "Test movie is not at your collection!");
            assert.equal(secondTest.discardMovie("Test movie"), "You just threw away Test movie!");
            assert.throw(() => thirdTest.watchMovie(), "No such movie in your collection!");
        });

        it("watchMovie", function () {
            let firsTest = new ChristmasMovies();
            let secondTest = new ChristmasMovies();
            let name = "Test movie";


            assert.throw(() => firsTest.watchMovie(name), "No such movie in your collection!")
            assert.throw(() => secondTest.watchMovie(), "No such movie in your collection!")
            firsTest.buyMovie(name, ["Pesho", "Gosho"]);
            firsTest.watchMovie(name);
            assert.equal(firsTest.watched[name], 1);
            firsTest.watchMovie(name);
            assert.equal(firsTest.watched[name], 2);

        });

        it("favouriteMovie", function () {
            let firsTest = new ChristmasMovies();
            let secondTest = new ChristmasMovies();
            assert.throw(() => firsTest.favouriteMovie(), "You have not watched a movie yet this year!");
            firsTest.buyMovie("Test movie", ["Pesho", "Gosho"]);
            firsTest.buyMovie("Just test", ["Stamat"])
            firsTest.watchMovie("Test movie", ["Pesho", "Gosho"]);
            firsTest.watchMovie("Test movie", ["Pesho", "Gosho"]);
            firsTest.watchMovie("Test movie", ["Pesho", "Gosho"]);
            assert.equal(firsTest.favouriteMovie(), "Your favourite movie is Test movie and you have watched it 3 times!");

            secondTest.buyMovie("lalala", ["Sam"]);
            secondTest.buyMovie("ppp", ["Bo"]);
            secondTest.watchMovie("lalala", ["Sam"])
            secondTest.watchMovie("ppp", ["Bo"]);

            assert.equal(secondTest.favouriteMovie(), "Your favourite movie is lalala and you have watched it 1 times!");
        });

        it("mostStarredActor", function () {
            let firsTest = new ChristmasMovies();
            assert.throw(() => firsTest.mostStarredActor(), "You have not watched a movie yet this year!");
            firsTest.buyMovie("Test movie", ["Pesho", "Gosho"]);
            firsTest.buyMovie("Test movie2", ["Pesho"]);
            assert.equal(firsTest.mostStarredActor(), "The most starred actor is Pesho and starred in 2 movies!")

        });


    });

});

