function sumTable() {
    let sum = 0;
    [...document.querySelectorAll("table tbody tr td")]
        .filter((x, y) => y % 2 == 1).
        forEach(line => {
            sum += Number(line.textContent)
        })

    document.getElementById("sum").textContent = sum;
}