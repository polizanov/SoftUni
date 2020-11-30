function area(figure, a, b, c) {
    a = Number(a);
    b = Number(b);
    c = Number(c);

    if (figure == 'square') {
        result = Math.pow(a, 2);
        console.log(result.toFixed(3));
    } else if (figure == 'rectangle') {
        result = a * b;
        console.log(result.toFixed(3));
    } else if (figure == 'circle') {
        result = Math.PI * Math.pow(a, 2);
        console.log(result.toFixed(3));
    } else if (figure == 'triangle') {
        result = (a * b) / 2;
        console.log(result.toFixed(3));
    }

}

area("triangle",
    "4.5",
    "20")

