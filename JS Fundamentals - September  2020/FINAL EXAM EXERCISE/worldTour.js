function worldTour(input) {
    let travelStops = input.shift();

    let command = input.shift();
    while (command !== 'Travel') {
        let curCommand = command.split(':');

        switch (curCommand[0]) {
            case 'Add Stop':
                travelStops = addStopCase(travelStops, curCommand);
                break;
            case 'Remove Stop':
                travelStops = removeStopCase(travelStops, curCommand);
                break;
            case 'Switch':
                travelStops = switchCase(travelStops, curCommand);
                break;
        }

        console.log(travelStops);
        command = input.shift();
    }

    console.log(`Ready for world tour! Planned stops: ${travelStops}`);

    function addStopCase(string, arr) {
        let [index, stringForPush] = arr.slice(1);
        index = Number(index);

        if (index < 0 || index >= string.length) {
            return string;
        }

        let firstPart = string.substring(0, index);
        let secondPart = string.substring(index);
        string = firstPart + stringForPush + secondPart;
        return string;
    }

    function removeStopCase(string, arr) {
        let [startIndex, endIndex] = arr.slice(1).map(Number);
        endIndex;

        if (startIndex < 0 || startIndex >= string.length) {
            return string;
        }

        if (endIndex < 0 || endIndex >= string.length) {
            return string;
        }



        let firstPart = string.substring(0, startIndex);
        let secondPart = string.substring(endIndex + 1);
        string = firstPart + secondPart
        return string;
    }


    function switchCase(string, arr) {
        let [oldString, newString] = arr.slice(1);

        if (string.includes(oldString) && oldString !== newString) {
            string = string.replace(oldString, newString);
        }

        return string;
    }
}

worldTour([
    'Hawai::Cyprys-Greece',
    'Add Stop:7:Rome',
    'Remove Stop:11:16',
    'Switch:Hawai:Bulgaria',
    'Travel'
]
)