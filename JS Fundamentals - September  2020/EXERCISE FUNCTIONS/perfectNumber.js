function perfectNumber(number) {
    isFindAPerfectNumber(number);

    function isFindAPerfectNumber(number) {
        if (devision(number) == number) {
            console.log("We have a perfect number!");
        } else {
            console.log("It's not so perfect.")
        }
    }

    function devision(number) {
        let devisions = 0;

        for (let i = 0; i < number; i++) {
            if (number % i == 0) {
                devisions += i;
            }
        }

        return devisions
    }
}

perfectNumber(1236498);