function bonusPoints(points) {
    points = Number(points);
    let bonusPoints = 0;

    if (points > 1000) {
        bonusPoints = points * 0.10;
    } else if (points > 100) {
        bonusPoints = points * 0.20;
    } else if (points <= 100) {
        bonusPoints = 5;
    }

    if (points % 2 == 0) {
        bonusPoints += 1;
    } else if (points % 5 == 0) {
        bonusPoints += 2;
    }

    console.log(bonusPoints);
    console.log(points + bonusPoints);

}

bonusPoints("175");