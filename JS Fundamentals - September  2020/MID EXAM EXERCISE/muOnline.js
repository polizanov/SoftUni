function muOnline(inputData) {
    let input = inputData.slice().split("|");
    let totalBitcoins = 0;
    let totalHealth = 100;
    let countRoom = 0;

    while (input.length > 0) {
        countRoom++;
        let curRoom = input.shift();
        let curCommand = curRoom.split(" ")[0];

        switch (curCommand) {
            case "potion":
                let potionHealth = Number(curRoom.split(" ")[1]);
                totalHealth += potionHealth;
                if (totalHealth > 100) {
                    potionHealth = potionHealth - (Math.abs(100 - totalHealth))
                    totalHealth = 100;
                }
                console.log(`You healed for ${potionHealth} hp.`);
                console.log(`Current health: ${totalHealth} hp.`);
                break;
            case 'chest':
                let findedBitcoins = Number(curRoom.split(" ")[1]);
                totalBitcoins += findedBitcoins;
                console.log(`You found ${findedBitcoins} bitcoins.`);
                break;
            default:
                let monsterHealth = Number(curRoom.split(" ")[1]);
                totalHealth -= monsterHealth;
                if (totalHealth > 0) {
                    console.log(`You slayed ${curCommand}.`);
                    continue;
                } else {
                    console.log(`You died! Killed by ${curCommand}.`);
                    console.log(`Best room: ${countRoom}`);
                    return;
                }
        }
    }
    console.log(`You've made it!`);
    console.log(`Bitcoins: ${totalBitcoins}`);
    console.log(`Health: ${totalHealth}`);
}

muOnline('cat 10|potion 30|orc 10|chest 10|snake 25|chest 110')