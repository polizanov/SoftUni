import { html } from "../node_modules/lit-html/lit-html.js"
import { getMostResentItems } from "./api/crud.js"

const homeTemplate = (js, charp, java, python) => html`
            <!-- Home -->
            <section id="home-page" class="content">
                <h1>Recent Articles</h1>
                <section class="recent js">
                    <h2>JavaScript</h2>
                    <article>
                        ${js.content !== undefined && js.content.length > 0 ? html`
                        <h3>${js.title}</h3>
                        <p>${js.content}</p>
                        <a href="/details/${js._id}" class="btn details-btn">Details</a>
                        ` : html`
                        <h3 class="no-articles">No articles yet</h3>
                        `}
                    </article>
            
                </section>
                <section class="recent csharp">
                    <h2>C#</h2>
                    <article>
                        ${charp.content !== undefined && charp.content.length > 0 ? html`
                        <h3>${charp.title}</h3>
                        <p>${charp.content}</p>
                        <a href="/details/${charp._id}" class="btn details-btn">Details</a>
                        ` : html`
                        <h3 class="no-articles">No articles yet</h3>
                        `}
                    </article>
                </section>
                <section class="recent java">
                    <h2>Java</h2>
                    <article>
                        ${java.content !== undefined && java.content.length > 0 ? html`
                        <h3>${java.title}</h3>
                        <p>${java.content}</p>
                        <a href="/details/${java._id}" class="btn details-btn">Details</a>
                        ` : html`
                        <h3 class="no-articles">No articles yet</h3>
                        `}
                    </article>
                </section>
                <section class="recent python">
                    <h2>Python</h2>
                    <article>
                        ${python.content !== undefined && python.content.length > 0 ? html`
                        <h3>${python.title}</h3>
                        <p>${python.content}</p>
                        <a href="/details/${python._id}" class="btn details-btn">Details</a>
                        ` : html`
                        <h3 class="no-articles">No articles yet</h3>
                        `}
                    </article>
                </section>
            </section>`

// const homeTemplate = (data) => html`
//     <!-- Home -->
//     <section id="home-page" class="content">
//         <h1>Recent Articles</h1>
//         ${data.map(categoryTemplate)}
//     </section>
// `

// const categoryTemplate = (e) => html`
// <section class="recent">
//     <h2>${e.category}</h2>
//     <article>
//         ${e.content.length > 0 ? html`
//         <h3>${e.title}</h3>
//         <p>${e.content}</p>
//         <a href="/details/${e._id}" class="btn details-btn">Details</a>
//         ` : html`
//         <h2>${e.categoty}</h2>
//         <h3 class="no-articles">No articles yet</h3>
//         `}

//     </article>
// </section>
// `



export async function showHome(context) {
    let data = await getMostResentItems();

    let jsData = {}
    let charpData = {}
    let pythonData = {}
    let javaData = {}

    data.forEach(curObj => {
        if (curObj.category == "JavaScript") {
            jsData = Object.assign(curObj, jsData);
        }

        if (curObj.category == "Python") {
            pythonData = Object.assign(curObj, pythonData);
        }

        if (curObj.category == "C#") {
            charpData = Object.assign(curObj, charpData);
        }

        if (curObj.category == "Java") {
            javaData = Object.assign(curObj, javaData);
        }

    });

    context.render(homeTemplate(jsData, charpData, javaData, pythonData));

}