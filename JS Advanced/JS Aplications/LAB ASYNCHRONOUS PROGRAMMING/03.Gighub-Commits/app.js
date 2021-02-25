function loadCommits() {
    let usernameElement = document.getElementById("username");
    let repoElement = document.getElementById("repo");
    let ulElement = document.getElementById("commits");

    clearUl(ulElement);
    fetch(`https://api.github.com/repos/${usernameElement.value}/${repoElement.value}/commits`)
        .then(res => {
            if (res.status == 404) {
                console.log(res)
                throw new Error(`Error: ${res.status}(Not Found)`)
            }
            return res.json()
        })
        .then(data => {
            data.forEach(curObj => {
                let curLi = document.createElement("li");
                curLi.textContent = `${curObj.commit.author.name}: ${curObj.commit.message}`;
                ulElement.appendChild(curLi);
            });
        })
        .catch(err => {
            console.log(err)
            let curLi = document.createElement("li");
            curLi.textContent = err;
            ulElement.appendChild(curLi);
        })
}

function clearUl(element) {
    if ([...element.children].length > 0) {
        [...element.children].forEach(li => li.remove());
    }
}
