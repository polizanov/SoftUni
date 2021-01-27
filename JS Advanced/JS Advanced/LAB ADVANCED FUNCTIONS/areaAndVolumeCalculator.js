function area() {
    return this.x * this.y;
};

function vol() {
    return this.x * this.y * this.z;
};

function solve(area, vol, input) {
    let objData = JSON.parse(input);

    let mappedArray = objData.map(function(curCordinates){
        let result = {
            "area": Math.abs(area.call(curCordinates)),
            "volume": Math.abs(vol.call(curCordinates)),
        }

        return result
    })

    return mappedArray;
}


console.log(solve(area, vol, `[
    {"x":"10","y":"-22","z":"10"},
    {"x":"47","y":"7","z":"-5"},
    {"x":"55","y":"8","z":"0"},
    {"x":"100","y":"100","z":"100"},
    {"x":"55","y":"80","z":"250"}
    ]`))
