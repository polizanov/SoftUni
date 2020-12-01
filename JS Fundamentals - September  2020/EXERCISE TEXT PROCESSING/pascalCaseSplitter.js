function pascalCaseSplitter(input) {
    let elementsOfInput = input.split('');
    let indexesUpperCase = [];
    let wordsOfInput = [];

    for (let i = 0; i < elementsOfInput.length; i++) {
        let currrentChar = elementsOfInput[i];
        if (currrentChar.charCodeAt(0) >= 65 && currrentChar.charCodeAt(0) <= 90) {
            indexesUpperCase.push(i);
        }
    }

    for (let i = 0; i < indexesUpperCase.length; i++) {
        let currentWord = input.substring(indexesUpperCase[i], indexesUpperCase[i + 1]);
        wordsOfInput.push(currentWord)
    }

    console.log(wordsOfInput.join(", "));
}

pascalCaseSplitter('ThisIsSoAnnoyingToDo')