function holiday(inputData) {
    let index = 0;
    let destination = inputData[index++];
    let minBuget = Number(inputData[index++]);


    while (destination !== 'End') {
        while (minBuget > 0) {
            let curSum = Number(inputData[index++]);
            minBuget -= curSum;
        }

        console.log(`Going to ${destination}!`);


        destination = inputData[index++];
        minBuget = Number(inputData[index++]);
    }

}

holiday(["France",
    "2000",
    "300",
    "300",
    "200",
    "400",
    "190",
    "258",
    "360",
    "Portugal",
    "1450",
    "400",
    "400",
    "200",
    "300",
    "300",
    "Egypt",
    "1900",
    "1000",
    "280",
    "300",
    "500",
    "End"])
