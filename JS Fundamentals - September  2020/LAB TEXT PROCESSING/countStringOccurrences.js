function countStringOccurrences(sentance, word) {
    let sentanceArr = sentance.split(" ");
    let counter = 0;

    for (const currentWord of sentanceArr) {
        if (currentWord == word) {
            counter++;
        }
    }

    console.log(counter);
}

countStringOccurrences("This is a word and it also is a sentence",
    "is"
)