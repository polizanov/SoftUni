function colorize() {
    Array.from(document.querySelectorAll("table tr"))
    .filter((x, y) => y % 2 == 1)
    .forEach(line => {
        line.style.backgroundColor = "Teal"
    })
}