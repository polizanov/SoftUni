function destinationMapper(text) {
    let pattern = /(=|\/)(?<destination>[A-Z][A-Za-z]{2,})\1/g;

    let matchesIterator = text.matchAll(pattern);
    let matches = []

    for (let curMatch of matchesIterator) {
        matches.push(curMatch.groups.destination)
    }

    travelPoints = getTravelPoints(matches);
    console.log(`Destinations: ${matches.join(", ")}`);
    console.log(`Travel Points: ${travelPoints}`);

    function getTravelPoints(arr) {
        let travelPoints = 0;

        for (let destination of arr) {
            travelPoints += destination.length;
        }

        return travelPoints;
    }
}

destinationMapper('=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=');