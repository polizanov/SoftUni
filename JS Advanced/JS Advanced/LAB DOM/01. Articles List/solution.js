function createArticle() {
	let inputTitleVlue = document.getElementById("createTitle").value;
	let inputContentValue = document.getElementById("createContent").value;

	if (inputTitleVlue.length > 0 & inputContentValue.length > 0) {
		let h3Element = document.createElement('h3');
		h3Element.textContent = inputTitleVlue;
		document.getElementById("createTitle").value = ""

		let pElement = document.createElement("p");
		pElement.textContent = inputContentValue;
		document.getElementById("createContent").value = ""


		let artcleElement = document.createElement("article");
		artcleElement.appendChild(h3Element);
		artcleElement.appendChild(pElement);

		let getArticle = document.getElementById("articles");
		getArticle.appendChild(artcleElement);
	}


}