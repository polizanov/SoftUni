function fishTank(lSm, wSm, hSm, pur) {
    lSm = Number(lSm);
    wSm = Number(wSm);
    hSm = Number(hSm);
    pur = Number(pur);

    let v = lSm * wSm * hSm;
    let sumV = v * 0.001;
    let lit = pur * 0.01;

    result = sumV * (1 - lit);

    console.log(result);
}

fishTank("85",
    "75",
    "47",
    "17")
