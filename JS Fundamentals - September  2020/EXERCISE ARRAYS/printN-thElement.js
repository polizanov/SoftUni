function printelement(inputData) {
    let input = inputData;
    let step = Number(input.pop());
    let output = []

    for (let i = 0; i < input.length; i++) {
        if (i % step == 0) {
            output.push(input[i]);
        }
    }

    console.log(output.join(" "));

}
printelement(['5', '20', '31', '4', '20', '2'])