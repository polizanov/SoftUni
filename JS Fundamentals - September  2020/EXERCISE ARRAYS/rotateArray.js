function rotateArray(inputData) {
    let input = inputData.slice();
    let ammountRotation = input.pop();

    if (ammountRotation > input.length) {
        ammountRotation = input.length - ammountRotation % input.length;
    }

    let output = [];
    output = input.slice(ammountRotation, input.length);

    for (let i = 0; i < ammountRotation; i++) {
        output.push(input[i]);
    }
    
    console.log(output.join(" "));
}

rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15']);