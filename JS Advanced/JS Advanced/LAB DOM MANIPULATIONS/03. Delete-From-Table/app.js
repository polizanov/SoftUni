function deleteByEmail() {
    let emails = document.getElementsByTagName("td");
    let input = document.getElementsByTagName("input")[0].value;
    let resultDivElement = document.getElementById("result");
    document.getElementsByTagName("input")[0].value = "";
    
    
    for(let i = 1; i < emails.length; i+=2){
        if(input == emails[i].textContent){
            let parent = emails[i].parentElement;
            parent.remove();
            resultDivElement.textContent = "Deleted";
        }
    }

    if(resultDivElement.textContent == ""){
        resultDivElement.textContent = "Not found."
    }
}