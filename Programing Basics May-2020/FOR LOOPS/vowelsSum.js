function vowersSum(word) {
    let points = 0;

    for (i = 0; i < word.length; i++) {
        curLetter = word[i];

        if (curLetter == 'a') {
            points += 1;
        } else if (curLetter == 'e') {
            points += 2;
        } else if (curLetter == 'i') {
            points += 3;
        } else if (curLetter == 'o') {
            points += 4;
        } else if (curLetter == 'u') {
            points += 5;
        }
    }

    console.log(points);
}

vowersSum("hello")