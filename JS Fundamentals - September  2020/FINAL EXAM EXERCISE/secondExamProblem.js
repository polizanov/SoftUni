function problem(input){
    let numElements = Number(input.shift());
    let pattern = /(U\$)(?<username>[A-Z][a-z]{2,})\1(P@\$)(?<password>[A-Za-z]{5,}\d+)\3/g
    let numValidRegistartions = 0;
    isMatch = false;

    for(let i = 0; i < numElements; i++){
        isMatch = false;
        let data = input[i];
        let dataMatch = data.matchAll(pattern);

        for(element of dataMatch){
            numValidRegistartions++;
            let username = element.groups.username;
            let password = element.groups.password;
            console.log('Registration was successful');
            console.log(`Username: ${username}, Password: ${password}`);
            isMatch = true;
        }

        if(isMatch){
            continue;
        }

        console.log('Invalid username or password');
    }

    console.log(`Successful registrations: ${numValidRegistartions}`);
}
