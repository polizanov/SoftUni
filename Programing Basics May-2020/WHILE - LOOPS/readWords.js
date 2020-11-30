function readWoards(inputData) {
    let curWord = inputData.shift();

    while (curWord != 'Stop') {
        console.log(curWord);
        curWord = inputData.shift()
    }

}

readWoards(["Nakov",
    "SoftUni",
    "Sofia",
    "Bulgaria",
    "SomeText",
    "Stop",
    "AfterStop",
    "Europe",
    "HelloWorld"])
