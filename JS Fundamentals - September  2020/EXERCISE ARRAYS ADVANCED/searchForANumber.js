function searchForANumber(inputArray, commandArray) {
    let input = inputArray.slice();
    let editedArray = input.slice(0, commandArray[0]);
    let elemntOfSearch = commandArray[2];

    console.log(`Number ${elemntOfSearch} occurs ${searchNumber(editedArray)} times.`);

    function searchNumber(array) {
        let elementCounter = 0;

        for (let i = 0; i < array.length; i++) {
            if (array[i] == elemntOfSearch) {
                elementCounter++
            }
        }
        return elementCounter;
    }
}

searchForANumber([5, 2, 3, 4, 1, 6],
    [5, 2, 3]
)