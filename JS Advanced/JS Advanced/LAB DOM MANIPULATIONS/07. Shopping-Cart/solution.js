function solve() {
   let products = {}
   let textArea = document.getElementsByTagName("textarea")[0];
   document.querySelector(".shopping-cart").addEventListener("click", (event) => {
      if (event.target.tagName === "BUTTON" && event.target.className == "add-product") {
         let divProduct = event.target.parentElement.parentElement;
         let name = divProduct.querySelector(".product-title").textContent;
         let price = divProduct.querySelector(".product-line-price").textContent;
         products[name] = !products[name] ? products[name] = Number(price) : products[name] = products[name] + Number(price);
         textArea.value += `Added ${name} for ${price} to the cart.\n`;
      }
   })

   document.querySelector("button[class='checkout']")
      .addEventListener("click", () => {
         Array.from(document.querySelectorAll("button"))
            .forEach(btn => btn.disabled = true)

         let sumPrice = Object.values(products)
            .reduce((acc, a) => acc + a, 0)
         textArea.value += `You bought ${Object.keys(products).join(", ")} for ${sumPrice.toFixed(2)}.`
      })
}
