function houseParty(inputData) {
    let input = inputData.slice();
    let guests = [];
    let indexOfGuest = 0;

    for (let curPerson of input) {
        curPerson = curPerson.split(' ');
        let name = curPerson[0];
        if (curPerson.includes('not')) {
            if (guests.includes(name)) {
                guests = guests.filter(x => x !== name);
            } else {
                console.log(`${name} is not in the list!`);
            }
        } else {
            if (guests.includes(name)) {
                console.log(`${name} is already in the list!`)
            } else {
                guests[indexOfGuest++] = name;
            }
        }
    }

    console.log(guests.join('\n'));
}

houseParty(['Tom is going!',
    'Annie is going!',
    'Tom is going!',
    'Garry is going!',
    'Jerry is going!']
)