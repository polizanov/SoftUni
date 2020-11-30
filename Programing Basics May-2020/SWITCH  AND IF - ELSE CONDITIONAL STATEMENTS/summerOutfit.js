function summerOutfit(degreese, period) {
    degreese = Number(degreese);
    let outfit = '';
    let shoes = '';

    if (degreese >= 10 && degreese <= 18) {
        switch (period) {
            case 'Morning':
                outfit = 'Sweatshirt';
                shoes = 'Sneakers';
                break;
            case 'Afternoon':
                outfit = 'Shirt';
                shoes = 'Moccasins';
                break;
            case 'Evening':
                outfit = 'Shirt';
                shoes = 'Moccasins';
                break;
        }
    } else if (degreese > 18 && degreese <= 24) {
        switch (period) {
            case 'Morning':
                outfit = 'Shirt';
                shoes = 'Moccasins';
                break;
            case 'Afternoon':
                outfit = 'T-Shirt';
                shoes = 'Sandals';
                break;
            case 'Evening':
                outfit = 'Shirt';
                shoes = 'Moccasins';
                break;
        }
    } else if (degreese >= 25) {
        switch (period) {
            case 'Morning':
                outfit = 'T-Shirt';
                shoes = 'Sandals';
                break;
            case 'Afternoon':
                outfit = 'Swim Suit';
                shoes = 'Barefoot';
                break;
            case 'Evening':
                outfit = 'Shirt';
                shoes = 'Moccasins';
                break;
        }
    }

    console.log(`It's ${degreese} degrees, get your ${outfit} and ${shoes}.`);

}

summerOutfit("16",
    "Morning")
