function mirrorWords(input) {
    let pattern = /([@|#]){1}(?<firstWord>[A-Za-z]{3,})\1{2}(?<secondWord>[A-Za-z]{3,})\1/g;
    let mirrorWords = [];

    let curMatch = [];
    let pairCounter = 0;
    curMatch = pattern.exec(input);
    while (curMatch) {
        pairCounter++;
        let firstWord = curMatch.groups.firstWord;
        let secondWord = curMatch.groups.secondWord;
        let reversedecondWord = secondWord.split("").reverse().join("");

        if (reversedecondWord == firstWord) {
            mirrorWords.push(`${firstWord} <=> ${secondWord}`);
        }

        curMatch = pattern.exec(input);
    }

    if (pairCounter == 0) {
        console.log('No word pairs found!');
        console.log('No mirror words!');
        return;
    }

    console.log(`${pairCounter} word pairs found!`);

    if (mirrorWords.length == 0) {
        console.log('No mirror words!');
        return;
    }

    console.log('The mirror words are:');
    console.log(mirrorWords.join(", "));

}

mirrorWords(['#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@']
)