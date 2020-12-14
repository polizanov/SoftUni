function aggregateElements(input) {
    let sumOfElements = input.reduce((acc, a) => acc + a, 0);
    let sumOfReversedElements = input.map(a => 1 / a).reduce((acc, a) => acc + a, 0);

    console.log(sumOfElements);
    console.log(sumOfReversedElements);
    console.log(input.join(""));

}

aggregateElements([1, 2, 3])