function filterEmployees(data, criteria) {
    let [key, value] = criteria.split("-")
    let number = 0;

    JSON.parse(data)
        .filter(obj => obj[key] == value)
        .forEach(obj => {
            if (obj[key] == value || key == "all") {
                console.log(`${number++}. ${obj.first_name} ${obj.last_name} - ${obj.email}`);
            }
        })

}

filterEmployees(`[{
    "id": "1",
    "first_name": "Kaylee",
    "last_name": "Johnson",
    "email": "k0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Johnson",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  }, {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }, {
    "id": "4",
    "first_name": "Evanne",
    "last_name": "Johnson",
    "email": "ev2@hostgator.com",
    "gender": "Male"
  }]`,
    'all'
)