function cappyJuice(input){
    let juices = {};
    let bottleData = {};

    for (const line of input) {
        let [name, quantity] = line.split(" => ");
        quantity = Number(quantity);

        if(!juices.hasOwnProperty(name)){
            juices[name] = quantity;
        } else {
            juices[name] = juices[name] + quantity;
        }

        if(juices[name] >= 1000){
            bottleData[name] = 0;
        }
    }
    
    for (const juice in bottleData) {
        console.log(`${juice} => ${Math.floor(juices[juice] / 1000)}`);
    }
}

cappyJuice(
    ['Orange => 2000',
'Peach => 1432',
'Banana => 450',
'Peach => 600',
'Strawberry => 549']

    
)