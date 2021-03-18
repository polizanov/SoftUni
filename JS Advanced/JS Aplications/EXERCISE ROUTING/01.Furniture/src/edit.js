import { html } from "../node_modules/lit-html/lit-html.js";
import { getFurnitureDetails, updateFurniture } from "./api/crud.js"

const htmlTemplate = (e, editFurniture, makeStyle, modelStyle, yearStyle, descriptionStyle, priceStyle, imgStyle) => html`
<div class="row space-top">
    <div class="col-md-12">
        <h1>Edit Furniture</h1>
        <p id="editMsg">Please fill all fields.</p>
    </div>
</div>
<form @submit=${editFurniture}>
    <div class="row space-top">
        <div class="col-md-4">
            <div class="form-group">
                <label class="form-control-label" for="new-make">Make</label>
                <input class=${"form-control" + (makeStyle ? " is-invalid" : "")} id="new-make" type="text" name="make"
                    value="${e.make}">
            </div>
            <div class="form-group has-success">
                <label class="form-control-label" for="new-model">Model</label>
                <input class=${"form-control" + (modelStyle ? " is-invalid" : "")} id="new-model" type="text"
                    name="model" value="${e.model}">
            </div>
            <div class="form-group has-danger">
                <label class="form-control-label" for="new-year">Year</label>
                <input class=${"form-control" + (yearStyle ? " is-invalid" : "")} id="new-year" type="number"
                    name="year" value="${e.year}">
            </div>
            <div class="form-group">
                <label class="form-control-label" for="new-description">Description</label>
                <input class=${"form-control" + (descriptionStyle ? " is-invalid" : "")} id="new-description"
                    type="text" name="description" value="${e.description}">
            </div>
        </div>
        <div class="col-md-4">
            <div class="form-group">
                <label class="form-control-label" for="new-price">Price</label>
                <input class=${"form-control" + (priceStyle ? " is-invalid" : "")} id="new-price" type="number"
                    name="price" value="${e.price}">
            </div>
            <div class="form-group">
                <label class="form-control-label" for="new-image">Image</label>
                <input class=${"form-control" + (imgStyle ? " is-invalid" : "")} id="new-image" type="text" name="img"
                    value="${e.img}">
            </div>
            <div class="form-group">
                <label class="form-control-label" for="new-material">Material (optional)</label>
                <input class="form-control" id="new-material" type="text" name="material" value="${e.material}">
            </div>
            <input type="submit" class="btn btn-info" value="Edit" />
        </div>
    </div>
</form>`

export async function showEditPage(context) {
    let id = context.params.id;
    let data = await getFurnitureDetails(id);
    context.render(htmlTemplate(data, editFurniture));

    async function editFurniture(e) {
        e.preventDefault();

        let make = document.querySelector("#new-make").value;
        let model = document.querySelector("#new-model").value;
        let year = document.querySelector("#new-year").value;
        let description = document.querySelector("#new-description").value;
        let price = document.querySelector("#new-price").value;
        let img = document.querySelector("#new-image").value;
        let material = document.querySelector("#new-material").value;
        let message = document.querySelector("#editMsg")

        if (make.length < 4 || model.length < 4) {
            context.render(htmlTemplate(data, editFurniture, make.length < 4, model.length < 4));
            message.textContent = "Make and Model must be at least 4 symbols long";
            message.style.color = "red";
            return;
        }

        if (Number(year) < 1950 || Number(year) > 2050) {
            context.render(htmlTemplate(data, editFurniture, make.length < 4, model.length < 4, Number(year) < 1950 || Number(year) > 2050));
            message.textContent = "Year must be between 1950 and 2050";
            message.style.color = "red";
            return;
        }

        if (description.length < 10) {
            context.render(htmlTemplate(data, editFurniture, make.length < 4, model.length < 4, Number(year) < 1950 || Number(year) > 2050,
                description.length < 10));

            message.textContent = "Description must be more than 10 symbols";
            message.style.color = "red";
            return;
        }

        if (Number(price) < 0) {
            context.render(htmlTemplate(data, editFurniture, make.length < 4, model.length < 4, Number(year) < 1950 || Number(year) > 2050,
                description.length < 10, Number(price) < 0));

            message.textContent = "Price must be a positive number";
            message.style.color = "red";
            return;
        }

        if (img == "") {
            context.render(htmlTemplate(data, editFurniture, make.length < 4, model.length < 4, Number(year) < 1950 || Number(year) > 2050,
                description.length < 10, Number(price) < 0, img == ""));

            message.textContent = "Image URL is required";
            message.style.color = "red";
            return;
        }

        await updateFurniture(id, {
            make,
            model,
            year,
            description,
            price,
            img,
            material,
        })


        context.render(htmlTemplate(data, editFurniture));
        message.textContent = "Please fill all fields.";
        message.style.color = "black";
        context.page.redirect("/")
    }
}