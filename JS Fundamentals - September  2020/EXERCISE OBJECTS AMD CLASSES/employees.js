function employees(inputArray) {
    let employees = {};

    inputArray.forEach(element => {
        employees.name = element;
        employees.personalNumber = element.length;
        console.log(`Name: ${employees.name} -- Personal Number: ${employees.personalNumber}`);
    });
}

employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]
)