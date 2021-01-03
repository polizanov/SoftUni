function smallestTwoNumbers(input){
    let result = input.sort((a, b) => a - b).slice(0, 2);
    console.log(result.join(" "));
}

smallestTwoNumbers([3, 0, 10, 4, 7, 3]);