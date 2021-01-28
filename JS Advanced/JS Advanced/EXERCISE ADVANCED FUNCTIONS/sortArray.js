function sortArray(arr, string) {
    let sort = {
        "asc": () => arr.sort((a, b) => a - b),
        "desc": () => arr.sort((a, b) => b - a),
    }

    return sort[string]()
}

sortArray([14, 7, 17, 6, 8], 'asc')
sortArray([14, 7, 17, 6, 8], 'desc')

