function smallestTwoNumbers(inputData) {
    let sortSmallestNumbers = inputData.sort((a, b) => a - b);
    let getTwoSmalestNumbers = sortSmallestNumbers.slice(0, 2);
    console.log(getTwoSmalestNumbers.join(' '));

}

smallestTwoNumbers([3, 0, 10, 4, 7, 3]);