function solve() {
  let inputData = document.getElementById("input").innerText;
  inputData = inputData.split(". ");
  let numParagraphs = 0
  if(inputData.length <= 3){
    numParagraphs = 1
  } else {
    numParagraphs = Math.ceil(inputData.length / 3);
  }

  while(inputData.length > 0){
    let oputputData = "";
    for(let i = 0; i < 3; i++){
      let curSentence = inputData.shift();

      if(inputData.length > 0){
        oputputData = oputputData + curSentence + ". ";
      } else {
        oputputData = oputputData + curSentence;
      }
      
      
      if(inputData.length == 0){
        break;
      }
    }

    let newPElement = document.createElement("p");
    newPElement.textContent = oputputData;
    let outputDivElement = document.getElementById("output");
    outputDivElement.appendChild(newPElement);
  }

}

