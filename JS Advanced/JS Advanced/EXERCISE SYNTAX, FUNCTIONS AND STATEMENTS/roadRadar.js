function roadRadar(input) {
    let speed = input[0];
    let area = input[1];
    let limit = 0;

    switch (area) {
        case 'motorway':
            limit = 130;
            break;
        case 'interstate':
            limit = 90
            break;
        case 'city':
            limit = 50;
            break;
        case 'residential':
            limit = 20;
            break;
    }

    if (speed <= limit) {
        return;
    }

    let limitDifference = speed - limit;

    if (limitDifference <= 20) {
        console.log('speeding');
    } else if (limitDifference <= 40) {
        console.log('excessive speeding');
    } else {
        console.log('reckless driving');
    }
}

roadRadar([ 40, 'city' ])