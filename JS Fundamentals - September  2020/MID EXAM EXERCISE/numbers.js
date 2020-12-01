function numbers(inputData) {
    let allNumbers = inputData.split(" ").map(Number);
    let averageSum = getAverageSum(allNumbers);
    let numbrersGreatherThanAvg = allNumbers.filter(x => x > averageSum).sort((a, b) => b - a);

    if (numbrersGreatherThanAvg.length <= 5) {
        if (numbrersGreatherThanAvg.length == 0) {
            console.log('No');
            return;
        }
        console.log(numbrersGreatherThanAvg.join(" "));
        return;
    } else {
        console.log(getTopFiveNums(numbrersGreatherThanAvg).join(' '));
        return;
    }

    function getAverageSum(arr) {
        let sum = 0
        let averageSum = 0;

        for (const element of arr) {
            sum += element;
        }
        averageSum = sum / arr.length;
        return averageSum
    }

    function getTopFiveNums(arr) {
        let topNumbers = [];

        for (let i = 0; i < 5; i++) {
            topNumbers[i] = numbrersGreatherThanAvg.shift()
        }
        return topNumbers;
    }
}

numbers('-1 -2 -3 -4 -5 -6');