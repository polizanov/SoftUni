function getInfoByHttpRequest(){
    let url = 'https://swapi.dev/api/people/';
    let httpRequest = new XMLHttpRequest();
    let button = document.getElementsByTagName("button")[0];

    httpRequest.open("GET", url);
    httpRequest.addEventListener("loadend", (e) => {
        if(button.textContent == "Get people"){}
        let responsedText = JSON.parse(e.currentTarget.responseText);
        let resultsArr = responsedText.results;
        
        if(e.currentTarget.status !== 200){
            let curLi = document.createElement("li");
            curLi.textContent = `Not Found :(`;
            document.getElementsByTagName("ul")[0].appendChild(curLi);
            return;
        }

        resultsArr.forEach(curObj => {
            let curLi = document.createElement("li");
            curLi.textContent = `${curObj.name} -> Heigh: ${curObj.height}  Mass: ${curObj.mass}`;
            document.getElementsByTagName("ul")[0].appendChild(curLi);
        });

        button.remove()
    })

    
    button
    .addEventListener("click", () => {
        httpRequest.send();
    })
   
}

