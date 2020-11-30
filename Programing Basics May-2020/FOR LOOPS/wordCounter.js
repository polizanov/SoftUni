function wordCounter(text) {
    let words = 0
    let counter = 0

    for (let i = 0; i <= text.length; i++) {
        if (text[i] == ' ') {
            counter++;
        }


    }
    words = counter + 1;

    if (words > 10) {
        console.log(`The message is too long to be send! Has ${words} words.`);
    } else {
        console.log('The message was send successfully!');
    }

}

wordCounter("This message has ten words and you can send it!")