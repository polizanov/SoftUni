function solve() {
   let button = document.getElementById("searchBtn");
   let searchField = document.getElementById("searchField");
   let getTableLines = Array.from(document.querySelectorAll("tbody > tr"));

   button.addEventListener("click", () => {
      getTableLines.map(a => a.removeAttribute("class"));
      
      getTableLines.forEach(curLine => {
         let curString = curLine.textContent;
         
         if(curString.includes(searchField.value) && searchField.value !== ""){
            curLine.setAttribute("class", "select");
         }
         
      })

      searchField.value = "";
   })
   
}