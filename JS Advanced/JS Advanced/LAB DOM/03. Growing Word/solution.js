function growingWord() {
  let wordParagraph = document.querySelector("#exercise > p");
  
  let initialPixel = 2;
  let colors = {
    "blue": "green",
    "green": "red",
    "red": "blue",
  };

  if(!wordParagraph.hasAttribute("style")){
    wordParagraph.setAttribute("style", `color:blue;  font-size: ${initialPixel}px`);
  } else {
    let currentSize = wordParagraph.style["font-size"];
    initialPixel = currentSize.substr(0, currentSize.length - 2) * 2;
    let currentColor = wordParagraph.style.color;
    wordParagraph.setAttribute("style", 
    `color:${colors[currentColor]}; font-size: ${initialPixel}px`)
  }
}

