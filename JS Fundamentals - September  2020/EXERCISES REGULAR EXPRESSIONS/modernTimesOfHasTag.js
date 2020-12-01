function modernTimes(text) {
    let match = text.match(/#[A-Za-z]+/g);

    for (let word of match) {
        word = word.slice(1);
        console.log(word);
    }
}

modernTimes('Nowadays everyone uses # to tag a #special word in #socialMedia')