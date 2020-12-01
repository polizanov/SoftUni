function removeOccurrences(input) {
    let [word, text] = input
    let oldWord = '';
    while (oldWord !== text) {
        oldWord = text;
        text = text.replace(word, "");
    }

    console.log(text);
}

removeOccurrences('ice', 'kicegiciceeb')