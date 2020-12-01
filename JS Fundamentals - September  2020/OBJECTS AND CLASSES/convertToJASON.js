function convertToJason(name, lastName, hairColor) {
    let person = {};

    person['name'] = name;
    person['lastName'] = lastName;
    person['hairColor'] = hairColor;
    person = JSON.stringify(person);
    console.log(person)
}

convertToJason('George',
    'Jones',
    'Brown'
)