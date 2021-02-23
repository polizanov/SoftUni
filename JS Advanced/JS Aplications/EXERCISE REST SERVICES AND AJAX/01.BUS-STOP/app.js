function getInfo() {
    let validStops = ["1287", "1308", "1327", "2334"];
    let stopIdElement = document.getElementById("stopId");
    let url = `https://judgetests.firebaseio.com/businfo/${stopIdElement.value}.json`;
    let stopNameElement = document.getElementById("stopName");
    let ulBusesElement = document.getElementById("buses");

    if (!validStops.includes(stopIdElement.value)) {
        stopNameElement.textContent = "Error";
        clearLiElements();
        return;
    }

    fetch(url)
        .then((resposne) => resposne.json())
        .then((data) => {
            clearLiElements();
            stopNameElement.textContent = data.name;
            Object.entries(data.buses)
                .forEach(([busId, time]) => {
                    let curLi = document.createElement("li");
                    curLi.textContent = `Bus ${busId} arrives in ${time}`;
                    ulBusesElement.appendChild(curLi);
                })
        })

    function clearLiElements() {
        if ([...ulBusesElement.children].length > 0) {
            [...ulBusesElement.children].forEach(li => li.remove())
        }
    }
}