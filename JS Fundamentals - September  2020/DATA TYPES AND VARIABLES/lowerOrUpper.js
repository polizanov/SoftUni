function lowerOrUpper(letter) {
    if (letter.charCodeAt(0) > 100 && letter.charCodeAt(0) < 132) {
        console.log('lower-case');
    } else {
        console.log('upper-case');
    }
}

lowerOrUpper('f')