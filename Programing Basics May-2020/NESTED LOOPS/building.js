function building(inputData) {
    let numFloors = Number(inputData[0]);
    let numRooms = Number(inputData[1]);

    for (let curFloor = numFloors; curFloor >= 1; curFloor--) {
        let typeFloor = '';
        let output = '';

        if (curFloor === numFloors) {
            typeFloor = 'L';
        } else if (curFloor % 2 === 0) {
            typeFloor = 'O';
        } else if (curFloor % 2 === 1) {
            typeFloor = 'A';
        }

        for (let curRoom = 0; curRoom < numRooms; curRoom++) {
            output += `${typeFloor}${curFloor}${curRoom} `;

        }
        console.log(output);
    }

}

building(["6", "4"])