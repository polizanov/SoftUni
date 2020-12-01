function inventory(input) {
    let allData = [];
    class Hero {
        constructor(name, level, items) {
            this.name = name;
            this.level = level;
            this.items = items;
        }
    }

    input.forEach(element => {
        [name, level, items] = element.split(" / ");
        level = Number(level);
        let hero = new Hero(name, level, items);
        allData.push(hero);
    });

    allData
        .sort((a, b) => a.level - b.level)
        .forEach(element => {
            let sortIttems = element.items.split(", ").sort((a, b) => a.localeCompare(b)).join(", ");
            console.log(`Hero: ${element.name}`);
            console.log(`level => ${element.level}`);
            console.log(`items => ${sortIttems}`);
        })
    console.log(allData)
}

inventory([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara"
]
);