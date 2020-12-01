function employers(input) {

    input.forEach(x => {
        console.log(`Name: ${x} -- Personal Number: ${x.length}`)
    });

}

employers([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]
)