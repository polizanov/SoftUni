function solve() {
   let autorElement = document.getElementById("creator");
   let titleElement = document.getElementById("title");
   let categoryElement = document.getElementById("category");
   let contentElement = document.getElementById("content");
   let createElement = document.querySelector("main section");
   let archiveOl = document.querySelector("section[class='archive-section'] ol");
   let archiveArr = [];


   document.getElementsByTagName("body")[0]
      .addEventListener("click", (e) => {
         e.preventDefault()


         if (e.target.tagName == "BUTTON" && e.target.textContent == "Create") {
            let newArtileString = `<article>
            <h1>${titleElement.value}</h1>
            <p>Categoty:<strong>${categoryElement.value}</strong></p>
            <p>Creator:<strong>${autorElement.value}</strong></p>
            <p>${contentElement.value}</p>
            <div class="buttons">
                <button class="btn delete">Delete</button>
                <button class="btn archive">Archive</button>
            </div>
        </article>`;

            createElement.insertAdjacentHTML("beforeend", newArtileString)
      }

         if (e.target.tagName == "BUTTON" && e.target.textContent == "Archive") {
            let articleElement = e.target.parentElement.parentElement;
            let title = articleElement.querySelector("h1").textContent
            archiveArr.push(title);
            articleElement.remove();


            if (Array.from(archiveOl.children).length > 0) {
               Array.from(archiveOl.children).forEach(li => li.remove())
            }
            archiveArr
               .sort((a, b) => a.localeCompare(b))
               .forEach(curTitle => {
                  let newLi = document.createElement("li");
                  newLi.textContent = curTitle;
                  archiveOl.appendChild(newLi);
               })
         }

         if (e.target.tagName == "BUTTON" && e.target.textContent == "Delete") {
            let articleElement = e.target.parentElement.parentElement;
            articleElement.remove();
         }
      })
}
