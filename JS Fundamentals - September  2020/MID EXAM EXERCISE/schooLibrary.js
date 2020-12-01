function schoolLibrary(input) {
    let bookLibrary = input.shift().split('&');

    while (input.length > 0) {
        let command = input.shift();

        if (command == 'Done') {
            break;
        }

        let curCommand = command.split(' | ')[0];

        switch (curCommand) {
            case 'Add Book':
                let bookForAdd = command.split(' | ')[1];
                bookLibrary = addBookCase(bookLibrary, bookForAdd);
                break;
            case 'Take Book':
                let bookForRemove = command.split(' | ')[1];
                bookLibrary = takeBookCase(bookLibrary, bookForRemove);
                break;
            case 'Swap Books':
                let firstBookForSwap = command.split(' | ')[1];
                let secondBookForSwap = command.split(' | ')[2];
                bookLibrary = swapBookCase(bookLibrary, firstBookForSwap, secondBookForSwap);
                break;
            case 'Insert Book':
                let bookForInsert = command.split(' | ')[1];
                bookLibrary.push(bookForInsert);
                break;
            case 'Check Book':
                let index = command.split(' | ')[1];
                if (index >= 0 && index < bookLibrary.length) {
                    console.log(bookLibrary[index]);
                }
                break;
        }
    }

    console.log(bookLibrary.join(", "));

    function addBookCase(arr, book) {
        if (!arr.includes(book)) {
            arr.unshift(book);
        }
        return arr;
    }

    function takeBookCase(arr, book) {
        if (arr.includes(book)) {
            arr = arr.filter(x => x !== book);
        }
        return arr;
    }

    function swapBookCase(arr, firstBook, secondBook) {
        if (arr.includes(firstBook) && arr.includes(secondBook)) {
            let firstSwapedBook = secondBook;
            let secondSwapedBook = firstBook;

            for (let i = 0; i < arr.length; i++) {
                if (arr[i] == firstBook) {
                    arr[i] = firstSwapedBook;
                } else if (arr[i] == secondBook) {
                    arr[i] = secondSwapedBook;
                }
            }
        }
        return arr;
    }
}

schoolLibrary([
    'Don Quixote&The Great Gatsby&Moby Dick&Hamlet',
    'Add Book | The Odyssey',
    'Take Book | Don Quixote',
    "Insert Book | Alice's Adventures in Wonderland",
    'Check Book | 3',
    'Done',
    '',
    '',
    ''
]

)