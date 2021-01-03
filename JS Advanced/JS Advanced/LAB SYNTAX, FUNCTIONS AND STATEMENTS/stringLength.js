function stringLength(first, second, third) {
    let sumOfLength = first.length + second.length + third.length;
    let averageScore = Math.floor(sumOfLength / 3);

    console.log(sumOfLength);
    console.log((averageScore));
}

stringLength('pasta', '5', '22.3');