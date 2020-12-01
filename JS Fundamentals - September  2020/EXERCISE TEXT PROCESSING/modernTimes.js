function modernTimes(text) {
    let wordsWithHashTag = getModerWord(text);
    let validWords = validateWorsd(wordsWithHashTag);

    console.log(validWords.join("\n"));

    function getModerWord(arr) {
        let output = [];
        let wordsInArray = text.split(" ");
        output = wordsInArray.filter(x => x[0] === '#' && x.length > 1);

        return output;
    }

    function validateWorsd(arr) {
        let validWords = [];
        for (let word of arr) {
            word = word.substring(1);
            for (let i = 0; i < word.length; i++) {
                if (word.charCodeAt(i) < 65 || word.charCodeAt(i) > 90 && word.charCodeAt(i) < 97 || word.charCodeAt(i) > 122) {
                    word = 'x'
                    break;
                }
            }
            if (word !== "x") {
                validWords.push(word);
            }
        }

        return validWords;
    }
}


modernTimes('Nowadays everyone uses # to tag a #special word in #socialMedia')