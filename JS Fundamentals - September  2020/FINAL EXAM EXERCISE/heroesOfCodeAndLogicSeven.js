function heroesOfCode(input) {
    let numHeroes = Number(input.shift());
    let heroes = {};

    for (let i = 0; i < numHeroes; i++) {
        let [heroName, headPoints, manaPoints] = input.shift().split(" ");

        if (!heroes.hasOwnProperty(heroName)) {
            heroes[heroName] = { headPoints, manaPoints };
            headPoints = Number(headPoints);
            manaPoints = Number(manaPoints);
        } else {
            heroes[heroNmae] = {
                headPoints: heroes[heroName].headPoints + headPoints,
                manaPoints: heroes[heroName].manaPoints + manaPoints
            }
        }

        heroes[heroName].headPoints = validateHeadPonts(heroes[heroName].headPoints);
        heroes[heroName].manaPoints = validateManaPoints(heroes[heroName].manaPoints);
    }

    let command = input.shift();
    while (command !== 'End') {
        let curCommand = command.split(" - ");

        switch (curCommand[0]) {
            case 'CastSpell':
                heroes = castSpellCase(heroes, curCommand);
                break;
            case 'TakeDamage':
                heroes = takeDamageCase(heroes, curCommand);
                break;
            case 'Recharge':
                heroes = rechargeCase(heroes, curCommand);
                break;
            case 'Heal':
                heroes = healCase(heroes, curCommand);
                break;
        }

        command = input.shift();
    }



    function healCase(obj, arr) {
        let [heroName, amount] = arr.slice(1);
        amount = Number(amount);

        let oldPoints = Number(obj[heroName].headPoints);
        obj[heroName].headPoints = oldPoints + amount;

        if (obj[heroName].headPoints > 100) {
            obj[heroName].headPoints = 100;
            console.log(`${heroName} healed for ${100 - oldPoints} HP!`);
            return obj;
        }

        console.log(`${heroName} healed for ${amount} HP!`);
        return obj;
    }

    Object.entries(heroes)
        .sort((a, b) => {
            if (a[1].headPoints == b[1].headPoints) {
                return a[0].localeCompare(b[0])
            }

            return b[1].headPoints - a[1].headPoints
        })
        .forEach(kvp => {
            console.log(kvp[0]);
            console.log(`  HP: ${kvp[1].headPoints}`);
            console.log(`  MP: ${kvp[1].manaPoints}`);
        });

    function rechargeCase(obj, arr) {
        let [heroName, amount] = arr.slice(1);
        amount = Number(amount);

        let oldPoints = Number(obj[heroName].manaPoints);
        obj[heroName].manaPoints = oldPoints + amount;


        if (obj[heroName].manaPoints > 200) {
            obj[heroName].manaPoints = 200;
            console.log(`${heroName} recharged for ${200 - oldPoints} MP!`);
            return obj;
        }

        console.log(`${heroName} recharged for ${amount} MP!`);
        return obj;
    }

    function castSpellCase(obj, arr) {
        let [heroName, MPneeded, spelName] = arr.slice(1);
        MPneeded = Number(MPneeded);

        if (obj[heroName].manaPoints >= MPneeded) {
            obj[heroName].manaPoints -= MPneeded;
            console.log(`${heroName} has successfully cast ${spelName} and now has ${obj[heroName].manaPoints} MP!`);
            return obj;
        }

        console.log(`${heroName} does not have enough MP to cast ${spelName}!`);
        return obj;
    }

    function takeDamageCase(obj, arr) {
        let [heroName, damage, attacker] = arr.slice(1);
        damage = Number(damage);

        obj[heroName].headPoints -= damage;

        if (obj[heroName].headPoints > 0) {
            console.log(`${heroName} was hit for ${damage} HP by ${attacker} and now has ${obj[heroName].headPoints} HP left!`);
            return obj;
        }

        delete obj[heroName];
        console.log(`${heroName} has been killed by ${attacker}!`);
        return obj;
    }

    function validateHeadPonts(points) {
        if (points > 100) {
            points = 100;
        }
        return points;
    }

    function validateManaPoints(points) {
        if (points > 200) {
            points = 200;
        }
        return points;
    }
}

heroesOfCode([
    '2',
    'Solmyr 85 120',
    'Kyrre 99 50',
    'Heal - Solmyr - 10',
    'Recharge - Solmyr - 50',
    'TakeDamage - Kyrre - 66 - Orc',
    'CastSpell - Kyrre - 15 - ViewEarth',
    'End'
]


)