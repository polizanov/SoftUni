function timeToWalk(steps, length, speed) {
    let distanceMeeters = steps * length;
    let speedInMeetersSec = speed / 3.6;
    let time = distanceMeeters / speedInMeetersSec;

    let additionalTime = Math.floor(distanceMeeters / 500);
    let additionalSeconds = additionalTime * 60;
    time += additionalSeconds;
    let minutes = Math.floor(time / 60)
    let hours = Math.floor(time / 3600);
    let seconds = Math.round(time - (minutes * 60));

    if (hours < 10) {
        hours = "0" + hours;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    if (seconds < 10) {
        seconds = "0" + seconds
    }

    console.log(`${hours}:${minutes}:${seconds}`);
}

timeToWalk(2564, 0.70, 5.5)