function students() {
    displayStudents()
    document.querySelector("form")
        .addEventListener("submit", (e) => {
            e.preventDefault();

            let firstName = document.querySelector("input[name='firstName']").value;
            let lastName = document.querySelector("input[name='lastName']").value;
            let facultyNumber = document.querySelector("input[name='facultyNumber']").value;
            let grade = document.querySelector("input[name='grade']").value;

            if (firstName == "") {
                alert("First name cannot be empty string!")
                return;
            }

            if (lastName == "") {
                alert("Last name name cannot be empty string!")
                return;
            }

            if (facultyNumber == "") {
                alert("Faculty Number cannot be empty string!")
                return;
            }

            if (!Number(grade)) {
                alert("Grade should be number!")
                return;
            }

            sentRequest({ firstName, lastName, facultyNumber, grade });

            document.querySelector("input[name='firstName']").value = "";
            document.querySelector("input[name='lastName']").value = "";
            document.querySelector("input[name='facultyNumber']").value = "";
            document.querySelector("input[name='grade']").value = "";
        })
}

async function displayStudents() {
    let request = await fetch('http://localhost:3030/jsonstore/collections/students');

    if (!request.ok) {
        alert("Something went wrong!")
        return;
    }

    let tbodyElement = document.querySelector("#results tbody");
    tbodyElement.innerHTML = "";

    let data = await request.json();
    Object.values(data)
        .forEach(student => {
            let rowElement = document.createElement("tr");

            let firstName = document.createElement("td");
            firstName.textContent = student.firstName;
            rowElement.appendChild(firstName);

            let lastName = document.createElement("td");
            lastName.textContent = student.lastName;
            rowElement.appendChild(lastName);

            let facultyNumber = document.createElement("td");
            facultyNumber.textContent = student.facultyNumber;
            rowElement.appendChild(facultyNumber);

            let grade = document.createElement("td");
            grade.textContent = Number(student.grade).toFixed(2);
            rowElement.appendChild(grade);

            tbodyElement
                .appendChild(rowElement);
        });
}

async function sentRequest(obj) {
    let request = await fetch('http://localhost:3030/jsonstore/collections/students', {
        method: 'post',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(obj)
    });

    if (!request.ok) {
        alert("Something went wrong!")
        return;
    }

    displayStudents()
}

students()
