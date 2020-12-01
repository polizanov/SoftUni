function sizeTheFire(input) {
    let fireCommand = input.shift().split('#');
    let allWater = Number(input.shift());
    let effort = 0;
    let totalFire = 0;
    let celsArr = []

    while (fireCommand.length > 0) {
        let command = fireCommand.shift().split(' = ');
        let typeFire = command[0];
        let water = Number(command[1])

        switch (typeFire) {
            case 'High':
                if (water >= 81 && water <= 125 && water <= allWater) {
                    allWater -= water;
                    let cells = water;
                    totalFire += cells;
                    effort += cells * 0.25;
                    celsArr.push(cells);
                }
                break;
            case 'Medium':
                if (water >= 51 && water <= 80 && water <= allWater) {
                    allWater -= water;
                    let cells = water;
                    totalFire += cells;
                    effort += cells * 0.25;
                    celsArr.push(cells);
                }
                break;
            case 'Low':
                if (water >= 1 && water <= 50 && water <= allWater) {
                    allWater -= water;
                    let cells = water;
                    totalFire += cells;
                    effort += cells * 0.25;
                    celsArr.push(cells);
                }
                break;
        }
    }
    
    printCels(celsArr);
    console.log(`Effort: ${effort.toFixed(2)}`);
    console.log(`Total Fire: ${totalFire}`);

    function printCels(arr) {
        console.log('Cells:');

        for (let i = 0; i < arr.length; i++) {
            console.log(` - ${arr[i]}`);
        }
    }
}

sizeTheFire(['High = 89#Low = 28#Medium = 77#Low = 23', '1250']

)