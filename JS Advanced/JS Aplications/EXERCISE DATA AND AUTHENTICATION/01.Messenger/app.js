function attachEvents() {
    document.getElementById("main")
        .addEventListener("click", (e) => {
            let url = 'http://localhost:3030/jsonstore/messenger'
            if (e.target.tagName == 'INPUT' && e.target.id == 'submit') {
                let authorElement = document.querySelector("input[name='author']");
                let messageElement = document.querySelector("input[name='content']");
                let obj = {
                    author: `${authorElement.value}`,
                    content: `${messageElement.value}`,
                }
                  
                fetch(url, { method: 'POST', body: JSON.stringify(obj)})
                authorElement.value = "";
                messageElement.value = "";
            }

            if(e.target.tagName == 'INPUT' && e.target.id == 'refresh'){
                fetch(url)
                .then((r) => r.json())
                .then((data) => {
                    let output = '';
                    Object.values(data)
                    .forEach(obj => {
                        output += `${obj.author}: ${obj.content}\n`
                    });

                    document.getElementById("messages").textContent = output;
                })
            }
        })
}


attachEvents();