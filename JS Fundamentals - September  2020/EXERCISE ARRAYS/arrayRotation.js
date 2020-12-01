function arrayRotation(inputArray, rotationNum) {
    let rotationSwaps = rotationNum % inputArray.length;
    let rotatedArray = [];
    let output = '';

    for (let i = 0; i < inputArray.length - rotationSwaps; i++) {
        rotatedArray.push(inputArray[i + rotationSwaps]);
    }

    if (rotationSwaps !== 0) {
        for (let i = 0; i < rotationSwaps; i++) {
            rotatedArray.push(inputArray[i]);
        }
    }

    for (let i = 0; i < rotatedArray.length; i++) {
        output += rotatedArray[i] + ' '
    }

    console.log(output)
}

arrayRotation([2, 4, 15, 31], 5);