function companyUsers(input) {
    let companiesData = {};

    for (const line of input) {
        let [companyName, employeeId] = line.split(" -> ");

        if (!companiesData.hasOwnProperty(companyName)) {
            companiesData[companyName] = []
        }

        if (!companiesData[companyName].includes(employeeId)) {
            companiesData[companyName].push(employeeId);
        }
    }

    Object.keys(companiesData)
        .sort((a, b) => a.localeCompare(b))
        .forEach(key => {
            console.log(key);
            let valuesArr = companiesData[key];
            for (const value of valuesArr) {
                console.log(`-- ${value}`);
            }
        })
}

companyUsers(
    [
        'SoftUni -> AA12345',
        'SoftUni -> BB12345',
        'Microsoft -> CC12345',
        'HP -> BB12345'
    ]

)