function playingCards(face, suit) {
    let obj = {
        face,
        suit,
        "validFaces": ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'],
        "validSuit": ['S', 'H', 'D', 'C'],

        toString() {
            if (this.validFaces.includes(face) && this.validSuit.includes(suit)) {
                let unicode = {
                    "S": "\u2660 ",
                    "H": "\u2665",
                    "D": "\u2666 ",
                    "C": "\u2663 ",
                }
                return `${face}${unicode[suit]}`;
            }

            throw new Error("Error")
        }
    }

    return obj.toString()
}

console.log(playingCards('1', 'C'))