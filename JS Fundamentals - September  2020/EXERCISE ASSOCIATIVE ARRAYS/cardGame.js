function cardGame(input) {
    let persons = {};
    let personsPoints = {};

    while (input.length > 0) {
        let [personName, personCards] = input.shift().split(": ");

        let personKeys = Object.keys(persons);

        if (personKeys.includes(personName)) {
            let oldCards = persons[personName];
            persons[personName] = oldCards.concat(", " + personCards)
        } else {
            persons[personName] = personCards;
        }
    }

    let personData = Object.entries(persons);

    for (const kvp of personData) {
        let personName = kvp[0];
        let set = new Set(kvp[1].split(", "));
        let personCards = Array.from(set);


        for (let i = 0; i < personCards.length; i++) {
            let personKeys = Object.keys(personsPoints);
            let oldPoints = 0
            if (personKeys.includes(personName)) {
                oldPoints = Number(personsPoints[personName]);
                personsPoints[personName] = getPoints(personCards[i]) + oldPoints;
            } else {
                personsPoints[personName] = getPoints(personCards[i]) + oldPoints;
            }
        }
    }

    Object.entries(personsPoints).forEach(kvp => {
        console.log(`${kvp[0]}: ${kvp[1]}`);
    })


    function getPoints(element) {
        let result = 0
        let value = 0;
        let power = 0;
        if (element.length > 2) {
            value = Number(`${element[0]}${element[1]}`);
            power = element[element.length - 1];
        } else {
            value = element[0];
            power = element[1];
        }

        switch (value) {
            case "J":
                value = 11;
                switch (power) {
                    case 'S':
                        result = 4 * value
                        break;
                    case 'H':
                        result = 3 * value;
                        break;
                    case 'D':
                        result = 2 * value;
                        break;
                    case 'C':
                        result = 1 * value
                        break;
                }
                break;
            case 'Q':
                value = 12;
                switch (power) {
                    case 'S':
                        result = 4 * value
                        break;
                    case 'H':
                        result = 3 * value;
                        break;
                    case 'D':
                        result = 2 * value;
                        break;
                    case 'C':
                        result = 1 * value
                        break;
                }
                break;
            case 'K':
                value = 13;
                switch (power) {
                    case 'S':
                        result = 4 * value
                        break;
                    case 'H':
                        result = 3 * value;
                        break;
                    case 'D':
                        result = 2 * value;
                        break;
                    case 'C':
                        result = 1 * value
                        break;
                }
                break;
            case 'A':
                value = 14;
                switch (power) {
                    case 'S':
                        result = 4 * value
                        break;
                    case 'H':
                        result = 3 * value;
                        break;
                    case 'D':
                        result = 2 * value;
                        break;
                    case 'C':
                        result = 1 * value
                        break;
                }
                break;
            default:
                value = Number(value);
                switch (power) {
                    case 'S':
                        result = 4 * value
                        break;
                    case 'H':
                        result = 3 * value;
                        break;
                    case 'D':
                        result = 2 * value;
                        break;
                    case 'C':
                        result = 1 * value
                        break;
                }
        }

        return result;
    }
}

cardGame(
    [
        'Peter: 2C, 4H, 9H, AS, QS',
        'Tomas: 3H, 10S, JC, KD, 5S, 10S',
        'Andrea: QH, QC, QS, QD',
        'Tomas: 6H, 7S, KC, KD, 5S, 10C',
        'Andrea: QH, QC, JS, JD, JC',
        'Peter: JD, JD, JD, JD, JD, JD'
    ]

)