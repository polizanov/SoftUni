function wordsTracker(input) {
    let words = input.shift().split(" ");
    let wordsObj = getObjFromArr(words);

    input.forEach(element => {
        for (const key of Object.keys(wordsObj)) {
            if (element == key) {
                wordsObj[key]++
            }
        }
    });

    Object.entries(wordsObj)
        .sort((a, b) => b[1] - a[1])
        .forEach(kvp => {
            console.log(`${kvp[0]} - ${kvp[1]}`);
        })

    function getObjFromArr(arr) {
        let obj = {};

        for (const key of arr) {
            obj[key] = 0;
        }
        return obj;
    }

}

wordsTracker([
    'this sentence', 'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurances', 'of', 'the'
    , 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]
);