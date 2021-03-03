document.querySelector("body")
    .addEventListener("click", (e) => {
        if (e.target.tagName == "BUTTON" && e.target.id == "loadBooks") {
            displayBooks()
        }

        if (e.target.tagName == "BUTTON" && e.target.textContent == "Edit") {
            document.querySelector("#edit").setAttribute("name", `${e.target.name}`);
            editBook(e.target)
        }

        if (e.target.tagName == "BUTTON" && e.target.textContent == "Delete") {
            deleteBook(e.target.name)
        }

    })

document.querySelector("#submit")
    .addEventListener("submit", (e) => {
        e.preventDefault();
        let title = document.querySelector("input[name='title']").value;
        let author = document.querySelector("input[name='author']").value;

        if (title == "" || author == "") {
            alert('Title and Author cannot be empty string')
            return
        }

        sentReequest(title, author);
    })

document.querySelector("#edit")
    .addEventListener("submit", (e) => {
        e.preventDefault();
        let id = document.querySelector("#edit").name;

        let title = document.querySelectorAll("input[name='title']")[1].value;
        let author = document.querySelectorAll("input[name='author']")[1].value;

        editBookRequest(author, title, id);
    })



async function displayBooks() {
    let request = await fetch(`http://localhost:3030/jsonstore/collections/books`);
    let data = await request.json();
    let tbodyElement = document.querySelector("table tbody");
    tbodyElement.innerHTML = ""
    Object.entries(data)
        .forEach(([id, curObj]) => {
            if (!curObj.hasOwnProperty("_id")) {
                curObj._id = id
            }

            let rowElement = document.createElement("tr")
            let nameElement = document.createElement("td")
            nameElement.textContent = curObj.title;
            rowElement.appendChild(nameElement);

            let authorElement = document.createElement("td");
            authorElement.textContent = curObj.author;
            rowElement.appendChild(authorElement);

            let tdElement = document.createElement("td");
            rowElement.appendChild(tdElement);

            let editBtn = document.createElement("button");
            editBtn.textContent = 'Edit';
            editBtn.setAttribute("name", `${curObj._id}`)
            tdElement.appendChild(editBtn);

            let deleteBtn = document.createElement("button");
            deleteBtn.textContent = 'Delete';
            deleteBtn.setAttribute("name", `${curObj._id}`);
            tdElement.appendChild(deleteBtn);

            tbodyElement
                .appendChild(rowElement);
        });
}

async function sentReequest(title, author) {
    let request = await fetch("http://localhost:3030/jsonstore/collections/books", {
        method: 'post',
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ author, title })
    });

    if (request.ok) {
        alert("Your book information was successfully sent!");
        displayBooks();
        clearFields();
        return;
    }

    alert("Something went wrong!");
    return;
}

function editBook(target) {
    document.querySelector("#submit").style.display = "none";
    document.querySelector("#edit").style.display = "block";
    let formElement = target.parentElement.parentElement;

    let bookInformation = [...formElement.children]
    let bookName = bookInformation[0].textContent;
    let bookAuthor = bookInformation[1].textContent;

    document.querySelectorAll("input[name='title']")[1].value = bookName;
    document.querySelectorAll("input[name='author']")[1].value = bookAuthor;
}

async function editBookRequest(author, title, id) {
    let request = await fetch(`http://localhost:3030/jsonstore/collections/books/${id}`, {
        method: 'put',
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ author, title })
    })

    if (request.ok) {
        alert("Your book was successfully edited");
        displayBooks();
        document.querySelector("#submit").style.display = "block";
        document.querySelector("#edit").style.display = "none";
        document.querySelectorAll("input[name='title']")[1].value = "";
        document.querySelectorAll("input[name='author']")[1].value = "";
        return;
    }

    alert("Sorry, your book wasn't successfully edited!");
    document.querySelector("#submit").style.display = "block";
    document.querySelector("#edit").style.display = "none";
    document.querySelectorAll("input[name='title']")[1].value = "";
    document.querySelectorAll("input[name='author']")[1].value = "";
    return;

}

async function deleteBook(id) {
    let request = await fetch(`http://localhost:3030/jsonstore/collections/books/${id}`, {
        method: 'delete'
    });

    if (request.ok) {
        alert("Your book was was successfully deleted");
        displayBooks();
    }
}

function clearFields() {
    document.querySelector("input[name='title']").value = ""
    document.querySelector("input[name='author']").value = ""
}