
let main;
let section;
export function setUpHome(mainElement, sectionElement) {
    main = mainElement;
    section = sectionElement;
}

export function showHome() {
    main.innerHTML = "";
    showContent();
    main.appendChild(section);
}

async function showContent() {
    let request = await fetch('http://localhost:3030/jsonstore/collections/myboard/posts');

    if (request.ok) {
        let data = await request.json();
        renderData(section, data);
    } else {
        alert("Something went wrong!")
    }
}

function renderData(section, data) {
    let parent = section.querySelector("#parent")
    parent.innerHTML = "";

    Object.values(data)
        .forEach(topic => {
            let topicDiv = document.createElement("div");
            topicDiv.setAttribute("class", "topic-container");
            topicDiv.innerHTML = `
            <div class="topic-name-wrapper">
                <div class="topic-name">
                    <a href="#" class="normal">
                        <h2 id="${topic._id}">${topic.title}</h2>
                    </a>
                <div class="columns">
                    <div>
                        <p>Date: <time>2020-10-10T12:08:28.451Z</time></p>
                            <div class="nick-name">
                                <p>Username: <span>${topic.username}</span></p>
                            </div>
                    </div>
                <div class="subscribers">
                        <p>Subscribers: <span>456</span></p>
                </div>
            </div>
            </div>
            </div>`
            parent.appendChild(topicDiv);
        });

    
}