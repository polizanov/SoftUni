function heardDelivery(input) {
    let neighborhoodHouses = input.shift().split('@').map(Number);
    let lastIndex = 0;
    isVlaentinesDay = false;

    let command = input.shift().split(' ');

    while (command[0] !== 'Love!') {
        commandNum = Number(command[1]);

        let action = jumpCommand(neighborhoodHouses, commandNum);

        if (isVlaentinesDay) {
            isVlaentinesDay = false;
        } else {
            neighborhoodHouses = action;
        }

        command = input.shift().split(' ');
    }

    console.log(`Cupid's last position was ${lastIndex}.`);
    isSuccessful(neighborhoodHouses);


    function jumpCommand(arr, jumpNum) {
        let jumpSize = jumpNum + lastIndex;

        if (jumpSize >= arr.length) {
            jumpSize = 0
        }

        lastIndex = jumpSize


        if (arr[jumpSize] == 0) {
            isVlaentinesDay = true;
            console.log(`Place ${jumpSize} already had Valentine's day.`);
            return;
        }

        arr[jumpSize] -= 2;

        if (arr[jumpSize] == 0) {
            isVlaentinesDay = true;
            console.log(`Place ${jumpSize} has Valentine's day.`);
            return;
        }

        return arr;
    }

    function isSuccessful(arr) {
        let numFailed = 0
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] !== 0) {
                numFailed++
            }
        }

        if (numFailed == 0) {
            console.log(`Mission was successful.`);
            return;
        } else {
            console.log(`Cupid has failed ${numFailed} places.`);
            return;
        }
    }
}

heardDelivery(
    [
        '20@40@20', 'Jump 2',
        'Jump 2', 'Jump 8',
        'Jump 3', 'Jump 1',
        'Love!'
    ]

)
