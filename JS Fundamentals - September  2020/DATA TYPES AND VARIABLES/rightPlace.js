function rightPlace(string, char, secondString) {
    let newString = '';
    for (let i = 0; i < string.length; i++) {
        if (string[i] == '_') {
            newString += char;
        } else {
            newString += string[i];
        }

    }

    if (newString === secondString) {
        console.log('Matched');
    } else {
        console.log('Not Matched');
    }
}

rightPlace('Str_ng', 'i', 'String')