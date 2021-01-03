function sumFirstAndLast(input) {
    let numbers = input.map(Number);
    return numbers[0] + numbers[numbers.length - 1];
}

console.log(sumFirstAndLast(['20', '30', '40']))