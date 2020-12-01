function neighborhoods(input) {
    let peopleInNeighborhoods = input.shift().split(", ");
    let people = new Map()

    while (input.length > 0) {
        let [curNeigh, curName] = input.shift().split(" - ");
        let arrOfCurName = [curName];

        if (peopleInNeighborhoods.includes(curNeigh)) {
            if (people.has(curNeigh)) {
                let oldName = people.get(curNeigh);
                people.set(curNeigh, oldName.concat(arrOfCurName));
            } else {
                people.set(curNeigh, arrOfCurName);
            }
        }
    }

    for (let i = 0; i < peopleInNeighborhoods.length; i++) {
        if (!people.has(peopleInNeighborhoods[i])) {
            let curNeigh = peopleInNeighborhoods[i];
            let curName = [];
            people.set(curNeigh, curName);
        }
    }

    let sortedPeople = Array.from(people.entries()).sort((a, b) => b[1].length - a[1].length);

    printData();

    function printData() {
        for (const kvp of sortedPeople) {
            console.log(`${kvp[0]}: ${kvp[1].length}`);
            for (let i = 0; i < kvp[1].length; i++) {
                if (kvp[1].length > 0) {
                    console.log(`--${kvp[1][i]}`);
                } else {
                    break;
                }
            }
        }
    }
}

neighborhoods(['Abbey Street, Herald Street, Bright Mews',
    'Bright Mews - Garry',
    'Bright Mews - Andrea',
    'Invalid Street - Tommy',
    'Abbey Street - Billy']
);