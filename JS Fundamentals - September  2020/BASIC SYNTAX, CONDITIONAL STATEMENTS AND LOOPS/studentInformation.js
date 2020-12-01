function studentInformation(studName, age, averageGrade) {
    age = Number(age);
    averageGrade = Number(averageGrade);

    console.log(`Name: ${studName}, Age: ${age}, Grade: ${(averageGrade).toFixed(2)}`);
}

studentInformation('John', 15, 5.54678)