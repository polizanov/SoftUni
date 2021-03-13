import { html, render } from "../node_modules/lit-html/lit-html.js"

const bodyTemplate = html`
<button id="loadBooks">LOAD ALL BOOKS</button>
<table>
    <thead>
        <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Action</th>
        </tr>
    </thead>
    <tbody>

    </tbody>
</table>

<form id="add-form">
    <h3>Add book</h3>
    <label>TITLE</label>
    <input type="text" name="title" placeholder="Title...">
    <label>AUTHOR</label>
    <input type="text" name="author" placeholder="Author...">
    <input type="submit" value="Submit">
</form>

<form id="edit-form">
    <input type="hidden" name="id">
    <h3>Edit book</h3>
    <label>TITLE</label>
    <input type="text" name="title" placeholder="Title...">
    <label>AUTHOR</label>
    <input type="text" name="author" placeholder="Author...">
    <input type="submit" value="Save">
</form>`

render(bodyTemplate, document.querySelector("body"));

document.querySelector("body").addEventListener("click", (e) => {
    if (e.target.id == "loadBooks") {
        loadBooks();
    }

    if (e.target.tagName == "BUTTON" && e.target.textContent == "Edit") {
        editBook(e.target.value, e);
    }

    if (e.target.tagName == "BUTTON" && e.target.textContent == "Delete") {
        sentDeleteRequest(e.target.value);
    }
})

document.querySelector("#edit-form")
    .addEventListener("submit", (e) => {
        e.preventDefault()
        let id = e.target.querySelector("input[type='submit']").id


        let title = e.target.querySelector("input[name='title']").value;
        let author = e.target.querySelector("input[name='author']").value
        sentEditRequest(title, author, id);
    })

document.querySelector("#add-form")
    .addEventListener("submit", (e) => {
        e.preventDefault()

        let title = e.target.querySelector("input[name='title']").value;
        let author = e.target.querySelector("input[name='author']").value

        sentAddRequest(title, author);
    })




async function loadBooks() {
    let request = await fetch("http://localhost:3030/jsonstore/collections/books");

    const bookTemplate = (id, obj) => html`
    <tr>
        <td id="title">${obj.title}</td>
        <td id="author">${obj.author}</td>
        <td>
            <button value="${id}">Edit</button>
            <button value="${id}">Delete</button>
        </td>
    </tr>`

    if (request.ok) {
        let data = await request.json();
        let result = Object.entries(data).map(([id, obj]) => bookTemplate(id, obj))
        render(result, document.querySelector("tbody"))
        return
    }

    alert(request.statusText);
}

function editBook(id, e) {
    let addForm = document.querySelector("#add-form")
    let editForm = document.querySelector("#edit-form")

    addForm.style.display = "none";
    editForm.style.display = "block";

    let titleValue = e.target.parentElement.parentElement.querySelector("#title").textContent;
    let authorValue = e.target.parentElement.parentElement.querySelector("#author").textContent;

    editForm.querySelector("input[name='title']").value = titleValue;
    editForm.querySelector("input[name='author']").value = authorValue;
    editForm.querySelector("input[type='submit']").setAttribute("id", id)
}


async function sentEditRequest(title, author, id) {
    let request = await fetch(`http://localhost:3030/jsonstore/collections/books/${id}`, {
        method: 'put',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ author, title })
    })

    if (request.ok) {
        loadBooks();
        document.querySelector("#add-form").style.display = "block";
        document.querySelector("#edit-form").style.display = "none";
        return;
    }

    alert(request.statusText);
}

async function sentAddRequest(title, author) {
    let request = await fetch(`http://localhost:3030/jsonstore/collections/books`, {
        method: 'post',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ author, title })
    })

    if (request.ok) {
        loadBooks();
        let form = document.querySelector("#add-form");
        form.querySelector("input[name='title']").value = "";
        form.querySelector("input[name='author']").value = "";
        return;
    }

    alert(request.statusText);
}


async function sentDeleteRequest(id) {
    let request = await fetch(`http://localhost:3030/jsonstore/collections/books/${id}`, {
        method: 'delete',
        headers: { "Content-Type": "application/json" },
    })

    if (request.ok) {
        loadBooks();
        return;
    }

    alert(request.statusText);
}