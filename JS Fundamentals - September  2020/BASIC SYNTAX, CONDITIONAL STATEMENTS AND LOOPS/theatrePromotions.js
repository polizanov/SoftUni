function theatre(typeOfDay, age) {
    age = Number(age);
    let priceForTicket = '';

    if (age >= 0 && age <= 18) {
        switch (typeOfDay) {
            case 'Weekday':
                priceForTicket = '12$';
                break;
            case 'Weekend':
                priceForTicket = '15$';
                break;
            case 'Holiday':
                priceForTicket = '5$';
        }
    } else if (age > 18 && age <= 64) {
        switch (typeOfDay) {
            case 'Weekday':
                priceForTicket = '18$';
                break;
            case 'Weekend':
                priceForTicket = '20$';
                break;
            case 'Holiday':
                priceForTicket = '12$';
        }
    } else if (age > 64 && age <= 122) {
        switch (typeOfDay) {
            case 'Weekday':
                priceForTicket = '12$';
                break;
            case 'Weekend':
                priceForTicket = '15$';
                break;
            case 'Holiday':
                priceForTicket = '10$';
        }
    } else {
        priceForTicket = 'Error!'
    }

    console.log(priceForTicket);
}

theatre('Weekday',
    42
)