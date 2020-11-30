function sumSec(sec1, sec2, sec3) {
    sec1 = Number(sec1);
    sec2 = Number(sec2);
    sec3 = Number(sec3);

    let sumSec = sec1 + sec2 + sec3;

    let mins = Math.floor(sumSec / 60);
    let sec = sumSec % 60;

    if (sec < 10) {
        console.log(`${mins}:0${sec}`);
    } else {
        console.log(`${mins}:${sec}`);
    }

}

sumSec("35", "45", "44")