function attachEvents() {
    let phonebookUl = document.getElementById('phonebook');

    document.getElementsByTagName("body")[0]
        .addEventListener("click", (e) => {
            let url = `https://phonebook-nakov.firebaseio.com/phonebook.json`
            if (e.target.tagName == 'BUTTON' && e.target.id == 'btnLoad') {
                clearElements([...phonebookUl.children]);
                fetch(url)
                    .then((response) => response.json())
                    .then((data) => {
                        Object.entries(data)
                            .forEach(([key, obj]) => {
                                let curLi = document.createElement("li");
                                curLi.textContent = `${obj.person}: ${obj.phone}`;
                                let curDelete = document.createElement("button");
                                curDelete.textContent = "Delete";
                                curLi.appendChild(curDelete);
                                phonebookUl.appendChild(curLi);
                                deleteNumber(key, curDelete);
                            });


                    })
            }

            if (e.target.tagName == 'BUTTON' && e.target.id == 'btnCreate') {
                let personInput = document.getElementById("person");
                let phoneInput = document.getElementById("phone");

                let obj = {
                    "person": `${personInput.value}`,
                    "phone": `${phoneInput.value}`
                }

                console.log(JSON.stringify(obj))
                fetch(url, { method: 'POST', body: JSON.stringify(obj) })

                personInput.value = "";
                phoneInput.value = "";
            }

        })

    function deleteNumber(key, curDelete) {
        curDelete.addEventListener("click", () => {
            let urlDelete = `https://phonebook-nakov.firebaseio.com/phonebook/${key}.json`;
            fetch(urlDelete, { method: 'DELETE' })
        })
    }

    function clearElements(arr) {
        if (arr.length > 0) {
            arr.forEach(li => li.remove());
        }
    }
}

attachEvents();