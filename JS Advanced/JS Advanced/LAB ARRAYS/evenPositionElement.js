function evenPositionElement(input) {
    return input.filter((x, y) => y % 2 == 0)
        .join(" ");

}

console.log(evenPositionElement(['20', '30', '40']))