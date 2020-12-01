function meetings(input) {
    let appointments = {}
    for (line of input) {
        let [dayOfWeek, personName] = line.split(" ");

        if (appointments.hasOwnProperty(dayOfWeek)) {
            console.log(`Conflict on ${dayOfWeek}!`)
        } else {
            console.log(`Scheduled for ${dayOfWeek}`)
            appointments[dayOfWeek] = personName;
        }
    }

    for (const day in appointments) {
        console.log(`${day} -> ${appointments[day]}`);
    }
}

meetings(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim']
)