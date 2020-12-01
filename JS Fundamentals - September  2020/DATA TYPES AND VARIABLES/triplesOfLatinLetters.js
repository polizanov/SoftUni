function triplesOfLatinLatters(num) {
    for (firstLetter = 0; firstLetter < num; firstLetter++) {
        let outputFirstLetter = String.fromCharCode(97 + firstLetter);
        for (secondLetter = 0; secondLetter < num; secondLetter++) {
            let outputSecondLetter = String.fromCharCode(97 + secondLetter);
            for (thirdLetter = 0; thirdLetter < num; thirdLetter++) {
                let outputThirdLetter = String.fromCharCode(97 + thirdLetter);
                console.log(outputFirstLetter + outputSecondLetter + outputThirdLetter);
            }
        }
    }
}

triplesOfLatinLatters(3)