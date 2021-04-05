import { html } from "../node_modules/lit-html/lit-html.js"
import { getAllItems } from "./api/crud.js"

const catalogTemplate = (data) => html`
<!-- catalogue -->
<section id="catalog-page" class="content catalogue">
    <h1>All Articles</h1>

    ${data.length > 0 ? data.map(curArticleTemplate) : html`
    <h3 class="no-articles">No articles yet</h3>
    `}
</section>
`

const curArticleTemplate = (e) => html`
<a class="article-preview" href="/details/${e._id}">
    <article>
        <h3>Topic: <span>${e.title}</span></h3>
        <p>Category: <span>${e.category}</span></p>
    </article>
</a>`

export async function showItems(context) {
    let data = await getAllItems();
    context.render(catalogTemplate(data));
}