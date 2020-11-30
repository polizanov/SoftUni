function radius(rad) {
    rad = Number(rad);
    let degreese = rad * (180 / Math.PI);

    console.log(degreese.toFixed(0));
}

radius("3.1416");