function project(name, numPr) {
    let namedPerson = name;
    let numProjects = Number(numPr);
    let timeInHours = numProjects * 3;

    console.log(`The architect ${namedPerson} will need ${timeInHours} hours to complete ${numProjects} project/s.`);
}

project('Darin', '4')