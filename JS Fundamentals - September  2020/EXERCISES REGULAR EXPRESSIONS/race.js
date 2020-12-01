function race(input) {
    let validNames = input.shift().split(", ");
    let racers = {};
    let place = 1;

    for (line of input) {

        if (line == 'end of race') {
            break;
        }

        let name = line.match(/[A-Za-z]/g).join("");
        let distance = line.match(/[\d]/g).map(Number);

        if (validNames.includes(name)) {
            if (!racers.hasOwnProperty(name)) {
                racers[name] = 0;
            }

            racers[name] += distance.reduce((acc, a) => acc + a, 0);
        }
    }


    let sortedRacers = Object.keys(racers)
        .sort((a, b) => racers[b] - racers[a])
        .slice(0, 3);

    for (let curRacer of sortedRacers) {
        switch (place) {
            case 1: console.log(`1st place: ${curRacer}`);
                place++;
                break;
            case 2: console.log(`2nd place: ${curRacer}`);
                place++;
                break;
            case 3: console.log(`3rd place: ${curRacer}`);
                place++;
                break;
        }
    }

}

race([
    'George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'
]
)