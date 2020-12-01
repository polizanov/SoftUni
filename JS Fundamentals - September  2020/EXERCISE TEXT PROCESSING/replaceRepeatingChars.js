function replaceRepeatingChars(input) {
    input = input.split("");
    let word = ''

    for (let i = 0; i < input.length; i++) {
        if (i == 0) {
            word += input[i];
        }

        if (!word.endsWith(input[i])) {
            word += input[i];
        }
    }

    console.log(word);
}

replaceRepeatingChars('qqqwerqwecccwd')