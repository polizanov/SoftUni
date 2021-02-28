function attachEvents() {
    let selectElement = document.querySelector("#posts");

    document.querySelector("body")
        .addEventListener("click", (e) => {
            if (e.target.tagName == "BUTTON" && e.target.id == "btnLoadPosts") {
                fetch(`http://localhost:3030/jsonstore/blog/posts`)
                    .then(r => r.json())
                    .then(data => {
                        renderOptionElements(Object.values(data));
                    })
            }

            if (e.target.tagName == "BUTTON" && e.target.id == "btnViewPost") {
                renderPostInfo(selectElement.value);
            }
        })

    function renderOptionElements(data) {
        data.forEach(curItem => {
            let optionElement = document.createElement("option");
            optionElement.value = curItem.id;
            optionElement.textContent = curItem.title;
            selectElement.appendChild(optionElement);
        });
    }

    async function renderPostInfo(id) {
        let [postRes, commnetRes] = await Promise.all([
            fetch(`http://localhost:3030/jsonstore/blog/posts`),
            fetch(`http://localhost:3030/jsonstore/blog/comments`)
        ])

        let postData = await postRes.json();
        let commnetData = await commnetRes.json();

        renderBodyData(Object.values(postData), id);
        renderCommnentsData(Object.values(commnetData), id)
    }

    function renderBodyData(postData, id) {
        let title = document.querySelector("#post-title");
        let body = document.querySelector("#post-body");
        postData
            .forEach(curPost => {
                if (curPost.id == id) {
                    title.textContent = "";
                    body.textContent = "";

                    title.textContent = curPost.title;
                    body.textContent = curPost.body;
                }
            })
    }

    function renderCommnentsData(commnetData, id) {
        let comments = document.querySelector("#post-comments");
        comments.innerHTML = ""
        commnetData
            .forEach(curComment => {
                if(curComment.postId == id){
                    let curLi = document.createElement("li");
                    curLi.setAttribute("id", `${id}`);
                    curLi.textContent = curComment.text;
                    comments.appendChild(curLi);
                }
            })
    }
}

attachEvents();