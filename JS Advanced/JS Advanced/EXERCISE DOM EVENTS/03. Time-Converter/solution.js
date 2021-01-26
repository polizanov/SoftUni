function attachEventsListeners() {
    let daysData = document.getElementById("days");
    let hoursData = document.getElementById("hours");
    let minutesData = document.getElementById("minutes");
    let secondsData = document.getElementById("seconds");

    let convertActions = {
        "daysBtn": () => convertData(Number(daysData.value) * 60 * 60 * 24),
        "hoursBtn": () => convertData(Number(hoursData.value) * 60 * 60),
        "minutesBtn": () => convertData(Number(minutesData.value) * 60),
        "secondsBtn": () => convertData(Number(secondsData.value)),
    }


    document.getElementsByTagName("main")[0]
        .addEventListener("click", (e) => {
            if (e.target.type !== "text") {
                let idName = e.target.id

                if (convertActions[idName]) {
                    convertActions[idName]()
                }
            }
        })


    function convertData(seconds) {
        let minutes = seconds / 60;
        let hours = seconds / (60 * 60);
        let days = seconds / (60 * 60 * 24);

        daysData.value = days;
        hoursData.value = hours;
        minutesData.value = minutes;
        secondsData.value = seconds;
    }
}