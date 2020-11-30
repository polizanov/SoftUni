function moving(inputData) {
    let index = 0;
    let hight = Number(inputData[index++]);
    let weight = Number(inputData[index++]);
    let leght = Number(inputData[index++]);
    let command = inputData[index++];
    let totalSpace = 0

    freeSpace = hight * weight * leght;

    while (command != 'Done') {
        command = Number(command);
        totalSpace += command;

        if (totalSpace > freeSpace) {
            break;
        }

        command = inputData[index++];
    }

    if (freeSpace >= totalSpace) {
        console.log(`${freeSpace - totalSpace} Cubic meters left.`);
    } else if (freeSpace < totalSpace) {
        console.log(`No more free space! You need ${totalSpace - freeSpace} Cubic meters more.`);
    }

}

moving(["10",
    "1",
    "2",
    "4",
    "6",
    "Done"])

