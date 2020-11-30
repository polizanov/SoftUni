function jorney(buget, sezon) {
    buget = Number(buget);
    let typeJorney = '';
    let whereIsJorney = '';
    let price = 0;

    if (buget <= 100) {
        whereIsJorney = 'Somewhere in Bulgaria';
        switch (sezon) {
            case 'summer':
                typeJorney = 'Camp';
                price = buget * 0.30;
                break;
            case 'winter':
                typeJorney = 'Hotel';
                price = buget * 0.70;
                break;
        }
    } else if (buget <= 1000) {
        whereIsJorney = 'Somewhere in Balkans';
        switch (sezon) {
            case 'summer':
                typeJorney = 'Camp';
                price = buget * 0.40;
                break;
            case 'winter':
                typeJorney = 'Hotel';
                price = buget * 0.80;
                break;
        }
    } else if (buget > 1000) {
        whereIsJorney = 'Somewhere in Europe';
        switch (sezon) {
            case 'summer':
            case 'winter':
                typeJorney = 'Hotel';
                price = buget * 0.90;
                break;
        }
    }

    if (whereIsJorney == 'Somewhere in Europe') {
        typeJorney == 'Hotel';
    }


    console.log(whereIsJorney);
    console.log(`${typeJorney} - ${(price).toFixed(2)}`)

}

jorney("1500", 'summer')