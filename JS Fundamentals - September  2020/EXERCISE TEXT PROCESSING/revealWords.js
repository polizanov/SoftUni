function revealWords(words, sentance) {
    words = words.split(", ");

    for (const currentWord of words) {
        let wordForReplace = "*".repeat(currentWord.length);
        sentance = sentance.replace(wordForReplace, currentWord);
    }

    console.log(sentance)

}

revealWords('great',
    'softuni is ***** place for learning new programming languages'

);