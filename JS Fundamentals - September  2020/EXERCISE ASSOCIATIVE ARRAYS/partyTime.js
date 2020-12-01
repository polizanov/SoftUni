function partyTime(input) {
    let guests = {};
    guests['vip'] = [];
    guests['regular'] = [];


    let indexOfParty = input.indexOf('PARTY')
    let listGuests = input.splice(0, indexOfParty);
    let commingGuest = input.splice(1);


    for (const guest of commingGuest) {
        if (listGuests.includes(guest)) {
            listGuests = listGuests.filter(x => x !== guest);
        }
    }

    for (const guest of listGuests) {
        if (isVip(guest)) {
            guests['vip'].push(guest);
            continue;
        }
        guests['regular'].push(guest);
    }

    let vipArr = guests['vip'];
    let regularArr = guests['regular'];

    console.log(listGuests.length);

    for (let guest of vipArr) {
        console.log(guest);
    }

    for (let guest of regularArr) {
        console.log(guest)
    }


    function isVip(guest) {
        return !isNaN(guest[0]);
    }
}

partyTime(
    ['m8rfQBvl',
        'fc1oZCE0',
        'UgffRkOn',
        '7ugX7bm0',
        '9CQBGUeJ',
        '2FQZT3uC',
        'dziNz78I',
        'mdSGyQCJ',
        'LjcVpmDL',
        'fPXNHpm1',
        'HTTbwRmM',
        'B5yTkMQi',
        '8N0FThqG',
        'xys2FYzn',
        'MDzcM9ZK',
        'PARTY',
        '2FQZT3uC',
        'dziNz78I',
        'mdSGyQCJ',
        'LjcVpmDL',
        'fPXNHpm1',
        'HTTbwRmM',
        'B5yTkMQi',
        '8N0FThqG',
        'm8rfQBvl',
        'fc1oZCE0',
        'UgffRkOn',
        '7ugX7bm0',
        '9CQBGUeJ'
    ]


);