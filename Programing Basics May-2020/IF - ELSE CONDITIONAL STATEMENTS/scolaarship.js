function scolarship(incomeInLv, averageGrade, minSalary) {
    incomeInLv = Number(incomeInLv);
    averageGrade = Number(averageGrade);
    minSalary = Number(minSalary);
    moneySocial = 0;
    moneyEx = 0;

    if (incomeInLv < minSalary && averageGrade > 4.50) {
        moneySocial = minSalary * 0.35;
    }

    if (averageGrade >= 5.50) {
        moneyEx = averageGrade * 25;
    }

    if (moneySocial > moneyEx) {
        console.log(`You get a Social scholarship ${moneySocial} BGN`);
    } else if (moneyEx > moneySocial) {
        console.log(`You get a scholarship for excellent results ${moneyEx} BGN`)
    } else if (moneyEx == moneyEx && moneyEx != 0 && moneySocial != 0) {
        console.log(`You get a Social scholarship ${moneySocial} BGN`);
    }

    if (moneySocial == 0 && moneyEx == 0) {
        console.log('You cannot get a scholarship!')
    }

}

scolarship(480.00, 4.60, 450.00)

