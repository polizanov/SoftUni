function addressBook(input) {
    let personData = {};
    for (const line of input) {
        let [personName, address] = line.split(":");

        personData[personName] = address;
    }

    Object.keys(personData)
        .sort((a, b) => a.localeCompare(b))
        .forEach(key => {
            console.log(`${key} -> ${personData[key]}`);
        })
}

addressBook(
    ['Tim:Doe Crossing',
        'Bill:Nelson Place',
        'Peter:Carlyle Ave',
        'Bill:Ornery Rd']
)