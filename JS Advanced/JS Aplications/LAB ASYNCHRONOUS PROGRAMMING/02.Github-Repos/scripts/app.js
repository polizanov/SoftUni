function loadRepos() {
	let username = document.getElementById("username").value;
	let ulElement = document.getElementById("repos");
	clearUl(ulElement);

	fetch(`https://api.github.com/users/${username}/repos`)
		.then(r => {
			if (r.status == 404) {
				throw new Error(`${r.status} Not Found`);
			}
			return r.json()
		})
		.then(data => {
			data.forEach(curObj => {
				let curLi = document.createElement("li");
				let aElement = document.createElement("a");
				aElement.setAttribute("href", `${curObj.html_url}`)
				aElement.textContent = curObj.html_url;
				curLi.textContent = `${curObj.full_name}/`;
				curLi.appendChild(aElement);
				ulElement.appendChild(curLi)
			});
		})
		.catch(err => {
			let curLi = document.createElement("li");
			curLi.textContent = err;
			ulElement.appendChild(curLi);
		})


	function clearUl(element) {
		if ([...element.children].length > 0) {
			[...element.children].forEach(li => li.remove());
		}
	}
}

