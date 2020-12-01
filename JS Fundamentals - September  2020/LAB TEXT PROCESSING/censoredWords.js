function censoredWords(sentanse, word) {
    while (sentanse.includes(word)) {
        let replaceWord = '*'.repeat(word.length);
        sentanse = sentanse.replace(word, replaceWord);
    }

    console.log(sentanse)
}

censoredWords("A small sentence with some words", "small")