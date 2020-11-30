function walking(inputData) {
    let index = 0;
    let steps = inputData[index++];
    let totalSteps = 0;

    while (totalSteps <= 10000) {
        if (steps == 'Going home') {
            steps = Number(inputData[index++]);
            totalSteps += steps;
            break;
        }

        steps = Number(steps);
        totalSteps += steps;
        steps = inputData[index++];
    }

    if (totalSteps >= 10000) {
        console.log('Goal reached! Good job!');
        console.log(`${totalSteps - 10000} steps over the goal!`);
    } else {
        console.log(`${10000 - totalSteps} more steps to reach goal.`)
    }

}

walking(["1500",
    "300",
    "2500",
    "3000",
    "Going home",
    "200"])

