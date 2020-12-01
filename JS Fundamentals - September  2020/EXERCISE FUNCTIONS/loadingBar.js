function loadingBar(number) {
    let leftPart = createLoadingLeftPart(number);
    let rightPart = createLoadingRightPart(number);

    creatingLoadingBar(number);

    function createLoadingRightPart(number) {
        let loadingRightPart = '';
        let totalChar = 10 - (number / 10);

        for (let i = 0; i < totalChar; i++) {
            loadingRightPart += '.' + '';
        }

        return loadingRightPart;
    }

    function createLoadingLeftPart(number) {
        let loadingLeftPart = '';
        let totalChar = number / 10;

        for (let i = 0; i < totalChar; i++) {
            loadingLeftPart += '%' + ''
        }

        return loadingLeftPart;
    }

    function creatingLoadingBar(number) {
        if (number == 100) {
            console.log('100% Complete!');
            console.log(`[${leftPart}${rightPart}]`);
        } else {
            console.log(`${number}% [${leftPart}${rightPart}]`);
            console.log('Still loading...');
        }

    }
}

loadingBar(100);