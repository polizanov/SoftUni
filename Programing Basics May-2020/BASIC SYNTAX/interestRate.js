function rate(deposit, term, pur) {
    deposit = Number(deposit);
    term = Number(term);
    pur = Number(pur);

    let curInterest = deposit * pur / 100;
    let interestForMount = curInterest / 12;

    console.log(curInterest);
    console.log(interestForMount)

    let curPrice = deposit + (term * interestForMount);
    console.log(curPrice);

}

rate("200",
    "3",
    "5.7")


