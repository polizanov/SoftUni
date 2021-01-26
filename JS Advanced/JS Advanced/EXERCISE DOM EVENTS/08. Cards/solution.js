function solve() {
   let topSide = document.getElementById("player1Div");
   let bottonSide = document.getElementById("player2Div");
   let topSpan = document.getElementsByTagName("span")[0];
   let bottonSpan = document.getElementsByTagName("span")[2];
   let sectionElement = document.getElementsByClassName("cards")[0];
   let history = document.getElementById("history");
   let isNeedClearing = false;

   sectionElement.addEventListener("click", (e) => {
      if(isNeedClearing){
         topSpan.textContent = "";
         bottonSpan.textContent = "";
         isNeedClearing = false;
      }
      e.target.src = "images/whiteCard.jpg";
      console.log(e.target)

      let parentId = e.target.parentElement.id;

      if (parentId == "player1Div") {
         topSpan.textContent = e.target.name;
      } else if (parentId == "player2Div") {
         bottonSpan.textContent = e.target.name;
      }

      if(Number(bottonSpan.textContent) > 0 && Number(topSpan.textContent) > 0){
         getBordersColors();
         if(history.textContent.length > 0){
            history.textContent += ` [${Math.max(Number(topSpan.textContent), Number(bottonSpan.textContent))} vs ${Math.min(Number(topSpan.textContent), Number(bottonSpan.textContent))}]`;
         } else {
            history.textContent += `[${Math.max(Number(topSpan.textContent), Number(bottonSpan.textContent))} vs ${Math.min(Number(topSpan.textContent), Number(bottonSpan.textContent))}]`;
         }
         isNeedClearing = true;
      }
   })


   function getBordersColors() {
      if (Number(bottonSpan.textContent) > Number(topSpan.textContent)) {
         greenBorder(bottonSide, bottonSpan);
         redBorder(topSide, topSpan);
      } else if (Number(topSpan.textContent) > Number(bottonSpan.textContent)) {
         greenBorder(topSide, topSpan);
         redBorder(bottonSide, bottonSpan);
      }
   }

   function redBorder(sideElement, spanElement) {
      Array.from(sideElement.children)
         .forEach(curImg => {
            if (curImg.name == spanElement.textContent) {
               curImg.style.border = "2px solid red";
            }
         })
   }

   function greenBorder(sideElement, spanElement) {
      Array.from(sideElement.children)
         .forEach(curImg => {
            if (curImg.name == spanElement.textContent) {
               curImg.style.border = "2px solid green";
            }
         })
   }

}