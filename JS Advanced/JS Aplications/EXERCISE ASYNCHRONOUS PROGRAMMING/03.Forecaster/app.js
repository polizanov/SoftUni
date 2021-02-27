function attachEvents() {
    let locationNameElement = document.querySelector("#location");

    let codeSymbols = {
        "sunny": "&#x2600",
        "partly sunny": "&#x26C5",
        "overcast": "&#x2601",
        "rain": "&#x2614",
        "degrees": "&#176",
    }

    document.querySelector("#submit")
        .addEventListener("click", () => {
            fetch(`http://localhost:3030/jsonstore/forecaster/locations`)
                .then(r => r.json())
                .then(data => {
                    let isFound = false;
                    let forecastDiv = document.querySelector("#forecast");
                    forecastDiv.style.display = "block";

                    for (const curObj of Object.values(data)) {
                        if (curObj.name == locationNameElement.value) {
                            isFound = true;

                            if (forecastDiv.innerHTML == "Error") {
                                forecastDiv.innerHTML = "";
                                createForecastDivElements(forecastDiv);
                            }

                            generateData(curObj.code);
                        }
                    }

                    if (!isFound) {
                        throw new Error("Error");
                        
                    }
                })
                .catch(err => {
                    let forecastDiv = document.querySelector("#forecast");
                    forecastDiv.innerHTML = "Error";
                })
        })

    async function generateData(code) {
        let todayUrl = `http://localhost:3030/jsonstore/forecaster/today/${code}`
        let upcommingUrl = `http://localhost:3030/jsonstore/forecaster/upcoming/${code}`

        let [todayRes, upcommingRes] = await Promise.all([
            fetch(todayUrl),
            fetch(upcommingUrl)
        ])

        let todayForecast = await todayRes.json();
        let forecast = await upcommingRes.json()

        modifyTodayForecastDom(todayForecast);
        modifyUpcommingForecastDom(forecast);

    }

    function modifyUpcommingForecastDom(forecast) {
        let upcommingDiv = document.querySelector("#upcoming");
        clearElement(upcommingDiv);
        let forecastInfo = Object.values(forecast)[0];

        let htmlString = `<div class="forecast-info">
                    <span class="upcoming">
                        <span class="symbol">${codeSymbols[`${forecastInfo[0].condition.toLowerCase()}`]}</span>
                        <span class="forecast-data">${forecastInfo[0].low}${'&#176'}/${forecastInfo[0].high}${'&#176'}</span>
                        <span class="forecast-data">${forecastInfo[0].condition}</span>
                    </span>
                    <span class="upcoming">
                        <span class="symbol">${codeSymbols[`${forecastInfo[1].condition.toLowerCase()}`]}</span>
                        <span class="forecast-data">${forecastInfo[1].low}${'&#176'}/${forecastInfo[1].high}${'&#176'}</span>
                        <span class="forecast-data">${forecastInfo[1].condition}</span>
                    </span>
                    <span class="upcoming">
                        <span class="symbol">${codeSymbols[`${forecastInfo[2].condition.toLowerCase()}`]}</span>
                        <span class="forecast-data">${forecastInfo[2].low}${'&#176'}/${forecastInfo[2].high}${'&#176'}</span>
                        <span class="forecast-data">${forecastInfo[2].condition}</span>
                    </span>
                </div>`;

        upcommingDiv.insertAdjacentHTML("beforeend", htmlString);
    }

    function modifyTodayForecastDom(todayForecast) {
        let currentDiv = document.querySelector("#current");
        clearElement(currentDiv);

        let currentDivHtml = `<div class="forecast">
                    <span class="condition symbol">${codeSymbols[`${todayForecast.forecast.condition.toLowerCase()}`]}</span>
                    <span class="condition">
                        <span class="forecast-data">${todayForecast.name}</span>
                        <span class="forecast-data">${todayForecast.forecast.low}${'&#176'}/${todayForecast.forecast.high}${'&#176'}</span>
                        <span class="forecast-data">${todayForecast.forecast.condition}</span>
                    </span>
                </div>`

        currentDiv.insertAdjacentHTML("beforeend", currentDivHtml);
    }
}

function clearElement(element) {
    if ([...element.children].length > 1) {
        [...element.children]
            .forEach(child => {
                child.remove();
            });

        let div = document.createElement("div");
        div.setAttribute("class", "label");
        element.id == "current" ? div.textContent = "Current conditions" : div.textContent = "Three-day forecast"
        element.appendChild(div);
    }

}

function createForecastDivElements(forecastDiv) {
    let curDiv = document.createElement("div");
    curDiv.setAttribute("id", "current");
    let firstLabelDiv = document.createElement("div");
    firstLabelDiv.setAttribute("class", "label");
    firstLabelDiv.textContent = "Current conditions";

    let upcommingDiv = document.createElement("div");
    upcommingDiv.setAttribute("id", "upcoming");
    let secondLabelDiv = document.createElement("div");
    secondLabelDiv.setAttribute("class", "label");
    secondLabelDiv.textContent = "Three-day forecast";

    curDiv.appendChild(firstLabelDiv);
    upcommingDiv.appendChild(secondLabelDiv);

    forecastDiv.appendChild(curDiv);
    forecastDiv.appendChild(upcommingDiv);
}


attachEvents();