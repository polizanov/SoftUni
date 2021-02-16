function addDestination() {
    let inputElements = Array.from(document.querySelectorAll("#input input"));
    let cityElement = inputElements[0];
    let countryElement = inputElements[1];
    let seasonsElement = document.getElementById("seasons");

    if (cityElement.value == "" || countryElement.value == "") {
        cityElement.value = ""
        countryElement.value = ""
        return;
    }

    let seasonBox = document.getElementById(seasonsElement.value);
    let curBoxValue = Number(seasonBox.value);
    seasonBox.value = ++curBoxValue


    let trHtmlString = `<tr>
    <td>${cityElement.value}, ${countryElement.value}</td>
    <td>${seasonsElement.value[0].toUpperCase() + seasonsElement.value.slice(1)}</td>
</tr>`

    document.getElementById("destinationsList")
        .insertAdjacentHTML("beforeend", trHtmlString);

    cityElement.value = ""
    countryElement.value = ""

} 