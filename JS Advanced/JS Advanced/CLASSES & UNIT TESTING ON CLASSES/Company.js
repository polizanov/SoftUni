class Company {
    constructor() {
        this.departments = [];
    }

    addEmployee(username, salary, position, department) {
        checkVlidation(username);
        checkVlidation(salary);
        checkVlidation(position);
        checkVlidation(department);

        this.departments.push([department, [username, salary, position]])

        function checkVlidation(element) {
            if (!element || element == undefined || element == "") {
                throw new Error("Invalid input!");
            }

            if (Number(element) && element < 0) {
                if (Number(element) && element < 0) {
                    throw new Error("Invalid input!");
                }
            }
        }

        return `New employee is hired. Name: ${username}. Position: ${position}`
    }

    bestDepartment() {
        let obj = {};
        let bestDepartment = '';
        let bestAvgSalary = 0;
        let output = '';
        this.departments.forEach(([department, arr]) => {
            if (!obj[department]) {
                obj[department] = []
            }

            obj[department].push(arr);
        })

        Object.entries(obj)
            .forEach(([curDepartment, matrixOfData]) => {
                let sumSalary = 0;
                matrixOfData
                    .forEach(curArr => {
                        let salary = Number(curArr[1]);
                        sumSalary += salary;
                    })
                let avgSalary = sumSalary / matrixOfData.length;
                if (avgSalary > bestAvgSalary) {
                    bestAvgSalary = avgSalary;
                    bestDepartment = curDepartment
                }

            });

        output += `Best Department is: ${bestDepartment}\nAverage salary: ${bestAvgSalary.toFixed(2)}\n`;

        obj[bestDepartment]
            .sort((a, b) => {
                if (a[1] == b[1]) {
                    return a[0].localeCompare(b[0]);
                }

                return b[1] - a[1];
            })
            .forEach(arr => {
                let [name, salary, possition] = arr;
                output += `${name} ${salary} ${possition}\n`;
            })

        return output.trim();
    }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment())
