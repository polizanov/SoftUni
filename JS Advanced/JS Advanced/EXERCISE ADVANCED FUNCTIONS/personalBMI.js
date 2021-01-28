function personalBMI(name, age, weight, height) {
    let BMI = ((h, w) => Math.round(w / Math.pow(h / 100, 2)))(height, weight);
    let status = ((bmi) => {
        if (bmi < 18.5) {
            return "underweight";
        } else if (bmi < 25) {
            return "normal";
        } else if (bmi < 30) {
            return "overweight";
        } else if (bmi >= 30) {
            return "obese";
        }
    })(BMI)

    let personalInfo = {
        age,
        weight,
        height,
    };

    let pacient = {
        name,
        personalInfo,
        BMI,
        status,
    };

    if(status == "obese"){
        pacient['recommendation'] = "admission required"
    }

    return pacient;
}

console.log(personalBMI('Honey Boo Boo', 9, 57, 137))