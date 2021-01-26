function solve() {
  let [inputData, outputData] = document.getElementsByTagName("textarea");
  let [generateBtn, buyBtn] = document.getElementsByTagName("button");
  let tbodyElement = document.getElementsByTagName("tbody")[0];


  generateBtn.addEventListener("click", () => {
    JSON.parse(inputData.value).forEach(obj => {
      let htmlString = `
      <tr>
      <td>
          <img
              src="${obj.img}">
      </td>
      <td>
          <p>${obj.name}</p>
      <td>
          <p>${obj.price}</p>
      </td>
      <td>
          <p>${obj.decFactor}</p>
      </td>
      <td>
          <input type="checkbox"/>
      </td>
      </tr>`;

      tbodyElement.insertAdjacentHTML("beforeend", htmlString);
      inputData.value = "";
    });
  });

  buyBtn.addEventListener("click", () => {
    let outputResult = "";
    let boughtFurniture = [];
    let totalprice = 0;
    let averageDecorationFactor = 0;

    Array.from(document.querySelectorAll("tbody tr"))
      .forEach(curTr => {
        let isClicked = curTr.querySelector("input").checked;
        if (isClicked) {
          let [currentName, currentPrice, currentFactor] = curTr.getElementsByTagName("p");
          boughtFurniture.push(currentName.textContent);
          totalprice += Number(currentPrice.textContent);
          averageDecorationFactor += Number(currentFactor.textContent);
        }
      })

      if(boughtFurniture.length > 0){
        outputResult += `Bought furniture: ${boughtFurniture.join(", ")}\nTotal price: ${totalprice.toFixed(2)}\nAverage decoration factor: ${averageDecorationFactor / boughtFurniture.length}`;
      }

      outputData.value = outputResult;
  })


}


