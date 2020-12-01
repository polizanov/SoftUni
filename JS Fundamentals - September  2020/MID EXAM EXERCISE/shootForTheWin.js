function shootForTheWin(input) {
    let sequence = input.shift().split(' ').map(Number);
    let command = input.shift();
    let shootCounter = 0;

    while (command !== 'End') {
        command = Number(command);
        if (command >= sequence.length || command < 0) {
            command = input.shift();
            continue;
        }

        shootTargets(command, sequence);
        shootCounter++;
        command = input.shift()
    }

    console.log(`Shot targets: ${shootCounter} -> ${sequence.join(" ")}`);

    function shootTargets(index, arr) {
        let shootTarget = arr[index];

        for (let i = 0; i < arr.length; i++) {
            if (i == index) {
                arr[i] = -1;
                continue;
            }

            if (i !== index && arr[i] !== -1) {
                if (arr[i] <= shootTarget) {
                    arr[i] = arr[i] + shootTarget;
                } else {
                    arr[i] = arr[i] - shootTarget;
                }
            }
        }
        return arr;
    }
}

shootForTheWin(['24 50 36 70', '0', '4', '3', '1', 'End']);