function makeADictionary(input) {
    let dicttionary = {};
    let allData = [];

    input.forEach(element => {
        element = JSON.parse(element);
        for (const key in element) {
            dicttionary[key] = element[key];
        }
    })

    let proparties = Object.keys(dicttionary).sort((a, b) => a.localeCompare(b));

    for (let i = 0; i < proparties.length; i++) {
        console.log(`Term: ${proparties[i]} => Definition: ${dicttionary[proparties[i]]}`);
    }

}

makeADictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
]
)

