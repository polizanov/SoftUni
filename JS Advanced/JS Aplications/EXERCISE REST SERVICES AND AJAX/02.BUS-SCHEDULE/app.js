function solve() {
    let departBtn = document.getElementById("depart");
    let arriveBtn = document.getElementById("arrive");
    let curId = 'depot';
    let infoElement = document.querySelector(".info");
    let stopName;

    function depart() {
        updateButttosn();
        let url = `https://judgetests.firebaseio.com/schedule/${curId}.json`;
        fetch(url)
        .then((response => response.json()))
        .then((data) => {
            infoElement.textContent = `Next stop ${data.name}`;
            curId = data.next;
            stopName = data.name
        })
    }

    function arrive() {
        updateButttosn();
        infoElement.textContent = `Arriving at ${stopName}`;
    }

    function updateButttosn(){
        if(departBtn.disabled == true){
            departBtn.disabled = false ;
            arriveBtn.disabled = true;
        } else {
            departBtn.disabled = true;
            arriveBtn.disabled = false;
        }
    }

    return {
        depart,
        arrive
    };
}

let result = solve();