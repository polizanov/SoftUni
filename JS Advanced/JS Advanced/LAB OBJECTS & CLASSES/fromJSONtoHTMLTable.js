function getTable(input) {
    let htmlText = '<table>\n';
    let keys = new Set(input.map(i => Object.keys(i)).flat());
    let titles = Array.from(keys);
    htmlText += '<tr><th>' + titles.join('</th><th>') + '</th></tr>\n';
    let escapedData = [];


    for (let curObj of input) {
        let escapedValues = [];
        let values = Object.values(curObj);
        values.forEach(value => {
            escapedValue = value.toString().replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#39;")
            escapedValues.push(escapedValue);
        });
        escapedData.push(escapedValues);
    }  

    if (escapedData.length > 0) {
        escapedData.forEach(curData => {
            htmlText += "<tr><td>"
            htmlText += curData.join("</td><td>");
            htmlText += "</td></tr>\n"
        })
    }

    htmlText += '</table>'

    console.log(htmlText);

}

getTable([{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]);


