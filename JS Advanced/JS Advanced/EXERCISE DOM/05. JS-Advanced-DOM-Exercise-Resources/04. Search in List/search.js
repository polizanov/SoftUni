function search() {
   let numMatches = 0;
   [...(document.querySelectorAll("ul li"))]
   .forEach(line => {
      let inputValue = document.getElementById("searchText").value;
      if(line.textContent.includes(inputValue)){
         numMatches++;
         line.style.fontWeight = "bold"
         line.style.textDecoration = "underline"
      }
   })

   document.getElementById("result").textContent = `${numMatches} matches found`
}
