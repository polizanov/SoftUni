function generateReport(colNames) {
    let theadTrLinesElements = [...document.querySelectorAll("table thead tr th")];
    let checkedButtons = {};
    let allButtons = [];
    let data = [];
    let isEmpty = true;
    [...document.querySelectorAll("table thead tr th input")]
        .forEach(e => {
            let butName = e.name
            allButtons.push(butName);
            if (e.checked) {
                let butName = e.name
                checkedButtons[Number(theadTrLinesElements.indexOf(e.parentElement))] = butName
            }
        });

    [...document.querySelectorAll("table tbody tr")].forEach(line => {
        let obj = {};
        let arrOfTd = [...(line.children)];
        arrOfTd.forEach(td => {
            if (checkedButtons[arrOfTd.indexOf(td)]) {
                isEmpty = false
                obj[allButtons[arrOfTd.indexOf(td)]] = td.textContent
            }
        })
        data.push(obj)
    })

    if(!isEmpty){
        document.getElementById("output").value = JSON.stringify(data)
    }
    
}