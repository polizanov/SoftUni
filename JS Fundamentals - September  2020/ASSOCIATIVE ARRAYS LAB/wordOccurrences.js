function wordOccurrences(input) {
    let words = new Map();

    for (let i = 0; i < input.length; i++) {
        let curWord = input[i];

        if (words.has(curWord)) {
            let oldLength = words.get(curWord);
            words.set(curWord, ++oldLength);
        } else {
            curLength = 1;
            words.set(curWord, curLength);
        }
    }

    let sortedWords = Array.from(words.entries()).sort((a, b) => b[1] - a[1])

    for (const kvp of sortedWords) {
        console.log(`${kvp[0]} -> ${kvp[1]} times`);
    }

}

wordOccurrences(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence",
    "And", "finally", "the", "third", "sentence"])