function create(words) {
   let content = document.getElementById("content");

   words.forEach(word => {
      let newDiv = document.createElement("div");
      let newParagraph = document.createElement("p");
      newParagraph.textContent = word;
      newParagraph.style.display = "none";

      content.appendChild(newDiv);
      newDiv.appendChild(newParagraph);
   })

   content.addEventListener("click", (e) => {
      if(e.target.tagName == "DIV" || e.target.tagName == "P"){
         let p = e.target.children[0] || e.target;
         p.style.display = "block";
      }
   })
}