import {html, render} from "../node_modules/lit-html/lit-html.js"
import {towns} from "./towns.js"

let townsDiv = document.querySelector("#towns")
const template = (arr) => html`<ul>${arr.map(nestedTemplate)}</ul>`
const nestedTemplate = (e) => html`<li>${e}</li>`
render(template(towns), townsDiv);
attachEvent()


function attachEvent(){
   document.querySelector("article")
      .addEventListener("click", (e) => {
         if(e.target.tagName == "BUTTON" && e.target.textContent == "Search"){
            let searchValue = document.querySelector("#searchText").value;

            if(searchValue.length == 0){
               alert("Please write town!");
               return;
            }
            
            let result = findTown(searchValue);
            document.querySelector("#result").textContent = `${result} ${result == 1 ? "match": "matches"} found`;
         }
      })

   function findTown(value){
      let mathes = 0;
      [...townsDiv.querySelectorAll("li")].forEach(li => {
         if(li.textContent.toLocaleLowerCase().includes(value)){
            li.setAttribute("class", "active");
            mathes++
         }
      }) 
      return mathes;
   }
}
