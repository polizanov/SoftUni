function password(inputData) {
    let username = inputData.shift();
    let pass = inputData.shift();
    let someText = inputData.shift();

    while (someText != pass) {

        someText = inputData.shift();
    }


    if (someText == pass) {
        console.log(`Welcome ${username}!`);
    }

}

password(["Nakov",
    "1234",
    "Pass",
    "1324",
    "1234"])


