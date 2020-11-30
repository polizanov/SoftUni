function cinemaTickets(inputData) {
    let index = 0;
    let filmName = inputData[index++];
    let totalSpace = 0;
    let kidsTicket = 0;
    let standardTicket = 0;
    let studentsTicket = 0;
    let curOperation = 0;
    let cinemaSpace = 0;
    let students = 0;
    let standard = 0;
    let kids = 0;

    while (filmName !== 'Finish') {
        let space = Number(inputData[index++]);

        let typeTicket = inputData[index++];

        while (typeTicket !== 'End') {
            curOperation++
            switch (typeTicket) {
                case 'student':
                    studentsTicket++;
                    break;
                case 'standard':
                    standardTicket++;
                    break;
                case 'kid':
                    kidsTicket++
            }

            if (curOperation == space) {
                totalSpace = studentsTicket + standardTicket + kidsTicket;
                console.log(`${filmName} - ${(totalSpace / space * 100).toFixed(2)}% full.`);
                cinemaSpace += totalSpace;
                students += studentsTicket;
                standard += standardTicket;
                kids += kidsTicket;

                curOperation = 0;
                totalSpace = 0;
                kidsTicket = 0;
                standardTicket = 0;
                studentsTicket = 0;
                break;

            }

            typeTicket = inputData[index++];

            if (typeTicket == 'End') {
                totalSpace = studentsTicket + standardTicket + kidsTicket;
                console.log(`${filmName} - ${(totalSpace / space * 100).toFixed(2)}% full.`);
                cinemaSpace += totalSpace;
                students += studentsTicket;
                standard += standardTicket;
                kids += kidsTicket;

                curOperation = 0;
                totalSpace = 0;
                kidsTicket = 0;
                standardTicket = 0;
                studentsTicket = 0;
            }
        }
        filmName = inputData[index++];

    }

    console.log(`Total tickets: ${cinemaSpace}`);
    console.log(`${(students / cinemaSpace * 100).toFixed(2)}% student tickets.`);
    console.log(`${(standard / cinemaSpace * 100).toFixed(2)}% standard tickets.`);
    console.log(`${(kids / cinemaSpace * 100).toFixed(2)}% kids tickets.`);

}

cinemaTickets(["Taxi",
    "10",
    "standard",
    "kid",
    "student",
    "student",
    "standard",
    "standard",
    "End",
    "Scary Movie",
    "6",
    "student",
    "student",
    "student",
    "student",
    "student",
    "student",
    "Finish"])
