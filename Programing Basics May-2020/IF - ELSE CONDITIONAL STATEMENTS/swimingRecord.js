function swimingRecord(recordInSec, distanceInMeters, timeInSec) {
    recordInSec = Number(recordInSec);
    distanceInMeters = Number(distanceInMeters);
    timeInSec = Number(timeInSec);

    timeForSwim = distanceInMeters * timeInSec;
    swowerTime = Math.floor(distanceInMeters / 15);
    sumSwowerTime = swowerTime * 12.5;
    sumTime = timeForSwim + sumSwowerTime;

    if (recordInSec < sumTime) {
        console.log(`No, he failed! He was ${(sumTime - recordInSec).toFixed(2)} seconds slower.`);
    } else if (recordInSec == sumTime) {
        console.log(`No, he failed! He was 0.00 seconds slower.`);
    } else {
        console.log(`Yes, he succeeded! The new world record is ${sumTime.toFixed(2)} seconds.`);
    }
}

swimingRecord("55555.67",
    "3017",
    "5.03")

