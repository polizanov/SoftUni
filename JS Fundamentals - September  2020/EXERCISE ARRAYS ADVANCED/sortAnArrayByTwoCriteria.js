function sortingArray(inputArray) {
    let sortArray = inputArray.sort(function sortArr(a, b) {
        if (a.length > b.length) {
            return 1
        } else if (b.length > a.length) {
            return -1
        } else {
            return a.localeCompare(b)
        }
    });

    console.log(sortArray.join('\n'))
}

sortingArray(["Isacc", "Theodor", "Jack", "Harrison", "George", "AAAA"])