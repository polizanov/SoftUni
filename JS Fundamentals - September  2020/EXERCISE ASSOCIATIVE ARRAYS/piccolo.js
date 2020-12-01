function piccolo(input) {
    let parkingData = [];

    for (let i = 0; i < input.length; i++) {
        let [command, carNumber] = input[i].split(", ");

        switch (command) {
            case 'IN':
                if (!parkingData.includes(carNumber)) {
                    parkingData.push(carNumber);
                }
                break;
            case 'OUT':
                if (parkingData.includes(carNumber)) {
                    parkingData = parkingData.filter(x => x !== carNumber);
                }
                break;
        }
    }

    if (parkingData.length > 0) {
        console.log(parkingData.sort((a, b) => a.localeCompare(b)).join("\n"));
    } else {
        console.log('Parking Lot is Empty');
    }

}

piccolo(
    ['IN, CA2844AA',
        'IN, CA1234TA',
        'OUT, CA2844AA',
        'OUT, CA1234TA']

)