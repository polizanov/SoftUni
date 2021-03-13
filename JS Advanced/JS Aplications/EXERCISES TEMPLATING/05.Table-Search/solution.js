import { html, render } from "../node_modules/lit-html/lit-html.js"

function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   window.addEventListener("load", getInfo());
   let tbodyElement = document.querySelector("tbody")

   async function getInfo() {
      let request = await fetch("http://localhost:3030/jsonstore/advanced/table");

      if (request.ok) {
         let data = await request.json();
         let result = Object.values(data).map(template);
         render(result, tbodyElement);
         return;
      }

      alert(request.statusText);
   }

   function onClick() {
      let value = document.querySelector("#searchField").value;

      if(value == ""){
         return;
      }

      [...tbodyElement.children].forEach(tr => tr.removeAttribute("class"));

      [...tbodyElement.children]
         .forEach(tr => {
            if(tr.textContent.toLocaleLowerCase().includes(value.toLocaleLowerCase())){
               tr.setAttribute("class", "select");
            }
         })

         document.querySelector("#searchField").value = "";
   }

   const template = (e) => html`
   <tr>
      <td>${e.firstName} ${e.lastName}</td>
      <td>${e.email}</td>
      <td>${e.course}</td>
   </tr>`
}

solve()