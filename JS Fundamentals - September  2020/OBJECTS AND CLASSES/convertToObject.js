function convertToObject(JSONString) {
    let object = JSON.parse(JSONString);

    for (key in object) {
        console.log(`${key}: ${object[key]}`)
    }
}

convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');