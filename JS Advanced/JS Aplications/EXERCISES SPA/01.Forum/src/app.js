
import { setUpCreate, showCreate } from "./create.js";
import { setUpHome, showHome } from "./homePage.js";
import { setUpComment, showComment } from "./comment.js"

window.addEventListener("load", () => {
    let main = document.querySelector("main");
    console.log(main)

    setUpCreate(main, document.getElementById("createPost"));
    setUpHome(main, document.getElementById("topicContent"));
    setUpComment(main, document.getElementById("commentContent"));

    let pages = {
        "newTopic": showCreate,
        "home": showHome,
    }

    showHome();
    setUpNav(pages)


})

function setUpNav(pages) {
    document.querySelector("body").addEventListener("click", (e) => {
        e.preventDefault()
        if (e.target.tagName == "A") {
            let handler = pages[e.target.id];
            if (typeof handler == "function") {
                handler();
            }
        }

        if (e.target.tagName == "H2") {
            showComment(e.target.id);
            showCommentData(e.target.id);
        }

        if (e.target.className == "commentPost") {
            let form = e.target.parentElement;
            addCommnet(e.target, form);
        }
    })

}

function addCommnet(button, form) {
    let id = button.value;

    let comment = form.querySelector("#comment").value;
    let username = form.querySelector("#username").value;

    if (comment == "" || username == "") {
        alert("Username or commnet cannot be empty!");
        return;
    }

    sentCommnet(id, username, comment)

    form.querySelector("#comment").value = "";
    form.querySelector("#username").value = "";
}

async function sentCommnet(id, username, comment) {
    let request = await fetch(`http://localhost:3030/jsonstore/collections/myboard/comments/${id}`, {
        method: 'post',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, comment })
    })

    if (request.ok) {
        showCommentData(id);
    } else {
        alert("Something went wrong!");
    }
}

async function showCommentData(id) {
    let request = await fetch(`http://localhost:3030/jsonstore/collections/myboard/comments/${id}`);

    if (request.ok) {
        let comments = await request.json()
        renderAllCommnets(comments)
    }

    function renderAllCommnets(data) {

        let contentDiv = document.querySelector("#contentCommnets")
        Object.values(data)
            .forEach(comment => {
                let commentDiv = document.createElement("div");
                commentDiv.setAttribute("class", "comment");

                commentDiv.innerHTML = `
            <header class="header">
            <p><span>${comment.username}</span> posted on <time>2020-10-10 12:08:28</time></p>
        </header>
        <div class="comment-main">
            <div class="userdetails">
                <img src="./static/profile.png" alt="avatar">
            </div>
            <div class="post-content">
                <p>${comment.comment}</p>
                
            </div>
        </div>
        <div class="footer">
            <p><span>5</span> likes</p>
        </div>`

                contentDiv.appendChild(commentDiv);
            })
    }
}