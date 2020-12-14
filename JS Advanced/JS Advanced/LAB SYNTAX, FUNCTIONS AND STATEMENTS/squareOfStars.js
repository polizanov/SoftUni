function sqareOfStars(num) {
    let char = '*'
    let line = char.repeat(num)

    print(num, line);


    function print(number, line) {
        if (number == undefined) {
            number = 5
            line = char.repeat(number)
        }

        for (let i = 0; i < number; i++) {
            let elements = line.split("");
            console.log(elements.join(" "));
        }
    }
}

sqareOfStars(54)