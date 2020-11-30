function shop(hours, day) {
    hours = Number(hours);

    if (hours >= 10 && hours <= 18) {
        switch (day) {
            case 'Monday':
            case 'Tuesday':
            case 'Wednesday':
            case 'Thursday':
            case 'Friday':
            case 'Saturday':
                console.log('open');
                break;
            default:
                console.log('closed');
                break;
        }

    } else {
        console.log('closed')
    }

}

shop("19",
    "Friday")

