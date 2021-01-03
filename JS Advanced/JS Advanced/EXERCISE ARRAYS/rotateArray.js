function rotateArray(input) {
    let rotation = Number(input.pop());
    rotation = rotation % input.length;

    for (let i = 0; i < rotation; i++) {
        let lastElement = input.pop();
        input.unshift(lastElement);
    }

    console.log(input.join(" "));
}

rotateArray(['1',
    '2',
    '3',
    '4',
    '2']


)