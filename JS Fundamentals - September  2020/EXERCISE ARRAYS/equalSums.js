function equalSum(array) {
    result = 'no';
    isThereNoIndex = true;
    for (let index = 0; index < array.length; index++) {
        let sumLeft = 0;
        let sumRight = 0;

        for (let curElement = 0; curElement < index; curElement++) {
            sumLeft += Number(array[curElement]);
        }

        for (let curEl = index + 1; curEl <= array.length - 1; curEl++) {
            sumRight += Number(array[curEl]);
        }

        if (sumLeft === sumRight) {
            isThereNoIndex = false;
            result = index;
            console.log(index);
            break;
        }

    }

    if (isThereNoIndex) {
        console.log(result);
    }
}

equalSum([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);