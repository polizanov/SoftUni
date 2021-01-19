function carFactory(worker) {
    if (worker.dizziness == true) {
        worker.levelOfHydrated = worker.levelOfHydrated + worker.weight * 0.1 * worker.experience;
        worker.dizziness = false;
    }

    return worker;
}

carFactory({
    weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false
}


)