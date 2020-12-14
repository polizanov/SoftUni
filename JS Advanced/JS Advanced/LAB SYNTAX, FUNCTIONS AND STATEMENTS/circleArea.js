function sircleArea(element) {
    let typeOfElement = typeof (element)

    if (typeOfElement == 'number') {
        let area = Math.PI * Math.pow(element, 2);
        console.log(area.toFixed(2));
        return;
    }

    console.log(`We can not calculate the circle area, because we receive a ${typeOfElement}.`);
    return;
}

sircleArea('name')