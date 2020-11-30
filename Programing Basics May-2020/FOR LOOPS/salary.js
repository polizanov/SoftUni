function salary(inputData) {
    let numOpenTab = Number(inputData.shift());
    let salary = Number(inputData.shift());

    for (let numFee = 1; numFee <= numOpenTab; numFee++) {

        let nameCurPage = inputData.shift();

        switch (nameCurPage) {
            case 'Facebook':
                salary -= 150;
                break;
            case 'Instagram':
                salary -= 100;
                break;
            case 'Reddit':
                salary -= 50;
                break;
        }

        if (salary <= 0) {
            console.log("You have lost your salary.");
            break;
        }
    }


    if (salary > 0) {
        console.log(salary);
    }

}

salary(["3",
    "500",
    "Facebook",
    "Stackoverflow.com",
    "softuni.bg"])


