function filterEmployees(string, criteria) {
    let [key, value] = criteria.split("-")

    if(value == "all"){
        printSortObject(JSON.parse(string))
        return;
    }
    

    let filteredObj = JSON.parse(string)
        .filter((o) => o[key] == value);
    
    printSortObject(filteredObj);
    

    function printSortObject(obj) {
        let number = 0;
            obj.sort((a, b) => {
                if(a.first_name == b.first_name){
                   return a.last_name.localeCompare(b.last_name)
                }
                a.first_name.localeCompare(b.first_name)
            })
            .forEach(obj => {
                console.log(`${number++}. ${obj.first_name} ${obj.last_name} - ${obj.email}`);
            })
    }
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
 'last_name-Johnson'

)