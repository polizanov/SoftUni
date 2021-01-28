function argumentInfo() {
    let argumentsObj = [];
    let argumentsSize = {};

    [...arguments].forEach(arg => {
        let type = typeof (arg);

        if (!argumentsSize[type]) {
            argumentsSize[type] = 0;
        }

        argumentsSize[type]++
        argumentsObj.push({ type, "value": arg })
    })

    argumentsObj
        .forEach(obj => {
            console.log(`${obj.type}: ${obj.value}`)
        })

    Object.entries(argumentsSize)
        .sort((a, b) => b[1] - a[1])
        .forEach(obj => {
            console.log(`${obj[0]} = ${obj[1]}`)
        })
}

argumentInfo('cat', 42, 55, function () { console.log('Hello world!'); })