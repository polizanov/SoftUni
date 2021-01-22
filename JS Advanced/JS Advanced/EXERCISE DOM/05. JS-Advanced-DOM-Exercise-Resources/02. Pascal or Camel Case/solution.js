function solve() {
  let methods = {
    "Camel Case": (input) => {
      let sentance = input.split(" ");
      return sentance[0].toLowerCase() + sentance.slice(1)
        .map(w => w[0].toUpperCase() + w.slice(1).toLowerCase())
        .join("");
    },
    "Pascal Case": (input) => {
      let sentance = input.split(" ");
      return sentance.map(w => w[0].toUpperCase() + w.slice(1).toLowerCase())
        .join("");
    }
  }

  let text = document.getElementById("text").value;
  let modifayer = document.getElementById("naming-convention").value;

  let result = document.getElementById("result");
  if (!methods[modifayer]) {
    result.textContent = "Error!";
    return;
  }

  result.textContent = methods[modifayer](text);
}