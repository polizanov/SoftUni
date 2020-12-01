function schoolGrades(input) {
    let students = new Map();

    for (let i = 0; i < input.length; i++) {
        let curName = input[i].split(" ")[0];
        let curGrades = input[i].split(" ").filter((x, y) => y !== 0).map(Number);


        if (students.has(curName)) {
            oldGrades = students.get(curName);
            students.set(curName, oldGrades.concat(curGrades));
        } else {
            students.set(curName, curGrades);
        }
    }

    let sortedStudents = Array.from(students.entries()).sort((a, b) => {
        let firtAverageGrade = a[1].reduce((acc, a) => acc + a, 0) / a[1].length;
        let secondAverageGrade = b[1].reduce((acc, a) => acc + a, 0) / b[1].length;

        return firtAverageGrade - secondAverageGrade;
    })

    for (const kvp of sortedStudents) {
        console.log(`${kvp[0]}: ${kvp[1].join(", ")}`);
    }

}

schoolGrades(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']
)