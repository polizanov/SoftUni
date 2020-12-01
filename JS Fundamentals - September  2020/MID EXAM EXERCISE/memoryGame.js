function memoryGame(input) {
    let sequenceOfElement = input.shift().split(' ');
    sequenceOfElement.length;
    let command = input.shift();
    let totalMoves = 1;

    while (command !== 'end') {
        command = command.split(' ').map(Number);
        findAndDeliteMatchingElements(command);

        if (sequenceOfElement.length == 0) {
            console.log(`You have won in ${totalMoves} turns!`);
            return;
        }
        command = input.shift();
        totalMoves++;
    }

    console.log('Sorry you lose :(');
    console.log(sequenceOfElement.join(' '));

    function findAndDeliteMatchingElements(arr) {
        let middleIndex = sequenceOfElement.length / 2;
        let firstIndex = arr[0];
        let secondIndex = arr[1];

        if (sequenceOfElement[firstIndex] == sequenceOfElement[secondIndex]) {
            console.log(`Congrats! You have found matching elements - ${sequenceOfElement[firstIndex]}!`);
            sequenceOfElement = sequenceOfElement.filter(x => x !== sequenceOfElement[firstIndex]);
            return;
        } else if (firstIndex == secondIndex || firstIndex < 0 || secondIndex < 0 ||
            firstIndex >= sequenceOfElement.length || secondIndex >= sequenceOfElement.length) {
            console.log('Invalid input! Adding additional elements to the board');
            addElementInMiddle(middleIndex);
            return;
        } else {
            console.log("Try again!");
            return;
        }
    }

    function addElementInMiddle(indexMiddle) {
        sequenceOfElement.splice(indexMiddle, 0, `-${totalMoves}a`);
        sequenceOfElement.splice(indexMiddle, 0, `-${totalMoves}a`);
    }
}

memoryGame(['a 2 4 a 2 4 ', '4 0 ', '0 2', '0 1', '0 1 ', 'end']

);