function oldLirary(inputData) {
    index = 0;
    let surchBook = inputData[index++];
    let nextBook = inputData[index++];
    let curBook = 0;
    let isExistBook = true;

    while (nextBook != surchBook) {

        if (nextBook == 'No More Books') {
            isExistBook = false;
            break;
        }

        curBook++
        nextBook = inputData[index++];
    }

    if (isExistBook) {
        console.log(`You checked ${curBook} books and found it.`);
    } else {
        console.log(`The book you search is not here!`);
        console.log(`You checked ${curBook} books.`);
    }

}

oldLirary(["The Spot",
    "Hunger Games",
    "Harry Potter",
    "Torronto",
    "Spotify",
    "No More Books"])


