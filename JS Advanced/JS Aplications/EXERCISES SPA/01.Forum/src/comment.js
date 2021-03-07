
let main;
let section;
export function setUpComment (mainElement, sectionElement){
    main = mainElement;
    section = sectionElement;
}

export function showComment(id){
    main.innerHTML = "";
    getInfo(id)
    main.appendChild(section);
}

async function getInfo(id){
    let request = await fetch(`http://localhost:3030/jsonstore/collections/myboard/posts/${id}`)

    if(request.ok){
        let data = await request.json();
        renderData(data, id)
    } else {
        alert("Something went wrong!");
    }
}

function renderData(data, postId){
    section.innerHTML = `
    <div class="container">
                <div class="theme-content">
                    
                    <!-- comment  -->
                    <div class="comment">
                        <header class="header">
                            <p><span>${data.username}</span> posted on <time>2020-10-10 12:08:28</time></p>
                        </header>
                        <div class="comment-main">
                            <div class="userdetails">
                                <img src="./static/profile.png" alt="avatar">
                            </div>
                            <div class="post-content">
                                <p>${data.post}</p>
                                
                            </div>
                        </div>
                        <div class="footer">
                            <p><span>5</span> likes</p>
                        </div>
                    </div>

                    <div id="contentCommnets">
                    </div>
                    
                    <div class="answer-comment">
                        <p><span>currentUser</span> comment:</p>
                        <div class="answer">
                            <form>
                                <textarea name="postText" id="comment" cols="30" rows="10"></textarea>
                                <div>
                                    <label for="username">Username <span class="red">*</span></label>
                                    <input type="text" name="username" id="username">
                                </div>
                                <button class="commentPost" value="${postId}">Post</button>
                            </form>
                        </div>
                    </div>
        
                </div>
            </div>`
}