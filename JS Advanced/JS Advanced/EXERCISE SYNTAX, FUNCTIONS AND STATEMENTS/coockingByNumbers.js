function cookingByNumbers(input) {
    num = Number(input.shift());

    for (let command of input) {
        switch (command) {
            case 'chop':
                num = num / 2;
                console.log(num);
                break;
            case 'dice':
                num = Math.sqrt(num);
                console.log(num);
                break;
            case 'spice':
                num++;
                console.log(num);
                break;
            case 'bake':
                num = num * 3;
                console.log(num);
                break;
            case 'fillet':
                let numForSubstract = num * 0.20;
                num -= numForSubstract;
                console.log(num);
                break;

        }
    }

}

cookingByNumbers(['9', 'dice', 'spice', 'chop', 'bake', 'fillet']);