function thePianist(input) {
    let numPieces = Number(input.shift());
    let pieces = {};

    for (let i = 0; i < numPieces; i++) {
        let [piece, composer, key] = input.shift().split("|");

        pieces[piece] = { composer, key };
    }

    let command = input.shift();
    while (command !== 'Stop') {
        let curCommand = command.split("|");

        switch (curCommand[0]) {
            case 'Add':
                pieces = addCase(pieces, curCommand);
                break;
            case 'Remove':
                pieces = removeCase(pieces, curCommand);
                break;
            case 'ChangeKey':
                pieces = changeKey(pieces, curCommand);
                break;
        }

        command = input.shift();
    }

    Object.entries(pieces)
        .sort((a, b) => {
            if (a[0] == b[0]) {
                return a[1].composer.localeCompare(b[1].composer);
            }

            return a[0].localeCompare(b[0]);
        })
        .forEach(kvp => {
            console.log(`${kvp[0]} -> Composer: ${kvp[1].composer}, Key: ${kvp[1].key}`);
        });

    function addCase(obj, arr) {
        let [piece, composer, key] = arr.slice(1);

        if (obj[piece]) {
            console.log(`${piece} is already in the collection!`);
            return obj;
        }

        obj[piece] = { composer, key };
        console.log(`${piece} by ${composer} in ${key} added to the collection!`);
        return obj;
    }

    function removeCase(obj, arr) {
        let piece = arr[1];

        if (obj[piece]) {
            delete obj[piece];
            console.log(`Successfully removed ${piece}!`);
            return obj;
        }

        console.log(`Invalid operation! ${piece} does not exist in the collection.`);
        return obj;
    }

    function changeKey(obj, arr) {
        let [piece, key] = arr.slice(1);

        if (obj[piece]) {
            let composer = obj[piece].composer;


            obj[piece] = { composer, key };
            console.log(`Changed the key of ${piece} to ${key}!`);
            return obj;
        }

        console.log(`Invalid operation! ${piece} does not exist in the collection.`);
        return obj;

    }

}

thePianist([
    '4',
    'Eine kleine Nachtmusik|Mozart|G Major',
    'La Campanella|Liszt|G# Minor',
    'The Marriage of Figaro|Mozart|G Major',
    'Hungarian Dance No.5|Brahms|G Minor',
    'Add|Spring|Vivaldi|E Major',
    'Remove|The Marriage of Figaro',
    'Remove|Turkish March',
    'ChangeKey|Spring|C Major',
    'Add|Nocturne|Chopin|C# Minor',
    'Stop'
]

)