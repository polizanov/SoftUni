function counterCtrice(inputArray) {
    let input = inputArray.slice();
    let intitalEnergy = Number(input[0]);
    let indexOfInput = 1;
    let curWonBattels = 0;


    while (intitalEnergy >= 0) {
        let distance = input[indexOfInput++];

        if (distance == 'End of battle') {
            break;
        } else {
            distance = Number(distance);
        }

        if (intitalEnergy >= distance) {
            curWonBattels++;
            intitalEnergy -= distance;
        } else {
            console.log(`Not enough energy! Game ends with ${curWonBattels} won battles and ${intitalEnergy} energy`);
            isNotEnoughtEnergy = true;
            return;
        }

        if (curWonBattels % 3 == 0) {
            intitalEnergy += curWonBattels;
        }
    }
    
    console.log(`Won battles: ${curWonBattels}. Energy left: ${intitalEnergy}`);
}

counterCtrice(
    [
        '100', '10', '10',
        '10', '1', '2',
        '3', '73', '10'
    ]
)