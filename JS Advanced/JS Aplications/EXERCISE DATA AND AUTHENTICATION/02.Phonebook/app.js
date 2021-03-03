function attachEvents() {
    let phonebookUl = document.getElementById('phonebook');

    document.getElementsByTagName("body")[0]
        .addEventListener("click", (e) => {
            let url = `http://localhost:3030/jsonstore/phonebook`
            if (e.target.tagName == 'BUTTON' && e.target.id == 'btnLoad') {
               displayNumbers(url);
            }

            if (e.target.tagName == 'BUTTON' && e.target.id == 'btnCreate') {
                sentNumber(url);
            }

        })

    function displayNumbers(url){
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

    function sentNumber(url){
        let personInput = document.getElementById("person");
                let phoneInput = document.getElementById("phone");

                let obj = {
                    "person": `${personInput.value}`,
                    "phone": `${phoneInput.value}`
                }

                fetch(url, { method: 'POST', body: JSON.stringify(obj) });

                personInput.value = "";
                phoneInput.value = "";
    }

    function deleteNumber(key, curDelete) {
        curDelete.addEventListener("click", () => {
            let urlDelete = `http://localhost:3030/jsonstore/phonebook/${key}`;
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