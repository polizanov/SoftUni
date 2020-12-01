function stringIterator(input) {
    let inputArr = input.split(" ")

    iterator = {
        next: function () {
            let isEnd = inputArr.length === 0;
            let value = inputArr.shift();

            return {
                next: value,
                done: isEnd
            }
        }
    }

    nextElement = iterator.next();

    while (!nextElement.done) {
        let currentWord = nextElement.next;
        console.log(currentWord);
        nextElement = iterator.next();
    }
}

stringIterator("Et cillum do voluptate cillum ut cupidatat aliqua.")