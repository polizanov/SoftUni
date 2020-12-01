function passwordValidator(password) {
    passwordValidation(password);

    function passwordValidation(password) {
        if (isLengthAreInRange(password) === true && isConsistsOnlyLettersAndDights(password) === true &&
            isConsistsLastTwoDights(password) === true) {
            console.log(`Password is valid`);
        } else {
            if (isLengthAreInRange(password) === false) {
                console.log(`Password must be between 6 and 10 characters`);
            }

            if (isConsistsOnlyLettersAndDights(password) === false) {
                console.log(`Password must consist only of letters and digits`);
            }

            if (isConsistsLastTwoDights(password) === false) {
                console.log('Password must have at least 2 digits');
            }
        }
    }

    function isLengthAreInRange(password) {
        let isInRange = false;
        if (password.length >= 6 && password.length <= 10) {
            isInRange = true;
        }

        return isInRange;
    }

    function isConsistsOnlyLettersAndDights(password) {
        let isConsists = false;

        for (let i = 0; i < password.length; i++) {
            if (password[i].charCodeAt(0) >= 65 && password[i].charCodeAt(0) <= 90 ||
                password[i].charCodeAt(0) >= 97 && password[i].charCodeAt(0) <= 122 ||
                password[i].charCodeAt(0) >= 48 && password[i].charCodeAt(0) <= 57) {
                isConsists = true
            } else {
                isConsists = false;
                break;
            }
        }

        return isConsists;
    }

    function isConsistsLastTwoDights(password) {
        let isLastCharsAreDigths = false;
        let curCharAreDight = 0

        for (let i = 0; i < password.length; i++) {
            if (password[password.length - 1 - i].charCodeAt(0) >= 48 &&
                password[password.length - 1 - i].charCodeAt(0) <= 57) {
                curCharAreDight++;
                continue;
            } else {
                break;
            }
        }

        if (curCharAreDight >= 2) {
            isLastCharsAreDigths = true;
        }

        return isLastCharsAreDigths;
    }
}

passwordValidator('MyPass12');