function solve(num1, num2) {
    num1 = Number(num1);
    num2 = Number(num2);

    let time = (num1 * 60) + num2;
    let totalTime = time + 15;

    let hours = Math.floor(totalTime / 60);
    let min = totalTime % 60

    if (hours > 23) {
        hours = hours - 24;
    }

    if (min < 10) {
        console.log(`${hours}:0${min}`);
    } else {
        console.log(`${hours}:${min}`)
    }

}
