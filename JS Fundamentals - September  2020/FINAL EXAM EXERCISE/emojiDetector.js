function emojiDetector(input) {
    let text = input.shift();
    let numbersPttern = /\d/g;
    let emojies = /(:{2}|\*{2})(?<values>[A-Z][a-z]{2,})(\1)/g;
    let allNumbers = text.matchAll(numbersPttern);
    let threshold = getThreshold(allNumbers);
    let curMatch = [];
    let coolEmojies = []

    curMatch = emojies.exec(text)
    let counter = 0;
    while (curMatch) {
        counter++;
        let curEmoji = curMatch.groups.values;
        let sumOfCharecters = sumAscii(curEmoji);

        if (sumOfCharecters > threshold) {
            coolEmojies.push(curMatch[0]);
        }
        curMatch = emojies.exec(text)
    }

    console.log(`Cool threshold: ${threshold}`)
    console.log(`${counter} emojis found in the text. The cool ones are:`);
    console.log(coolEmojies.join("\n"));



    function getThreshold(iterator) {
        let numbers = []
        let multiplyed = 0

        for (let num of iterator) {
            numbers.push(num[0]);
        }

        multiplyed = numbers.reduce((acc, a) => acc * a, 1);

        return multiplyed;
    }

    function sumAscii(text) {
        text = text.split('');
        let sum = 0
        for (char of text) {
            sum += char.charCodeAt(0)
        }
        return sum;
    }
}

emojiDetector([
    "It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**."
]

)