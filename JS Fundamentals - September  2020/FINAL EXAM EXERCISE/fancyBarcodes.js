function fancyBarcodes(input) {
    let wordPattern = /@{1}#{1,}(?<name>[A-Z][A-Za-z\d]{4,}[A-Z])@{1}#{1,}/g;
    let findedWords = []
    let numProducts = Number(input.shift())

    let curMatch = wordPattern.exec(input);
    while (curMatch) {
        findedWords.push(curMatch[0])
        curMatch = wordPattern.exec(input);
    }

    for (let i = 0; i < numProducts; i++) {

        if (!findedWords.includes(input[i])) {
            console.log('Invalid barcode');
        } else {
            let curGroup = getGroup(input[i]);
            console.log(`Product group: ${curGroup}`);
        }
    }

    function getGroup(string) {
        let digitPattern = /\d/g;
        let digits = [];
        let inHaveDigits = false;
        let curMatch = digitPattern.exec(string);
        while (curMatch) {
            inHaveDigits = true
            digits.push(curMatch[0]);
            curMatch = digitPattern.exec(string);
        }
        if (!inHaveDigits) {
            return '00';
        } else {
            return digits.join("");
        }
    }

}

fancyBarcodes([
    '6',
    '@###Val1d1teM@###',
    '@#ValidIteM@#',
    '##InvaliDiteM##',
    '@InvalidIteM@',
    '@#Invalid_IteM@#',
    '@#ValiditeM@#'
]
)