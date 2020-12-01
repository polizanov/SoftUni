function stringSubstring(word, sentance) {
    let wordForCheck = word.toLowerCase();
    sentance = sentance.toLowerCase().split(" ");

    if (sentance.includes(wordForCheck)) {
        console.log(word);
        return;
    }

    console.log(`${word} not found!`)
}

stringSubstring('python',
    'JavaScript is the best programming language'
)