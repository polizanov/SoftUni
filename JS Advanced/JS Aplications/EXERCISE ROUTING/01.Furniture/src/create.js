import { html } from "../node_modules/lit-html/lit-html.js"
import { createFurniture } from "./api/crud.js"

const htmlTemplate = (addFurniture, makeStyle, modelStyle, yearStyle, descriptionStyle, priceStyle, imgStyle) => html`
<div class="row space-top">
    <div class="col-md-12">
        <h1>Create New Furniture</h1>
        <p id="createMsg">Please fill all fields.</p>
    </div>
</div>
<form @submit=${addFurniture}>
    <div class="row space-top">
        <div class="col-md-4">
            <div class="form-group">
                <label class="form-control-label" for="new-make">Make</label>
                <input class=${"form-control" + (makeStyle ? " is-invalid" : "")} id="new-make" type="text" name="make">
            </div>
            <div class="form-group has-success">
                <label class="form-control-label" for="new-model">Model</label>
                <input class=${"form-control" + (modelStyle ? " is-invalid" : "")} id="new-model" type="text"
                    name="model">
            </div>
            <div class="form-group has-danger">
                <label class="form-control-label" for="new-year">Year</label>
                <input class=${"form-control" + (yearStyle ? " is-invalid" : "")} id="new-year" type="number"
                    name="year">
            </div>
            <div class="form-group">
                <label class="form-control-label" for="new-description">Description</label>
                <input class=${"form-control" + (descriptionStyle ? " is-invalid" : "")} id="new-description"
                    type="text" name="description">
            </div>
        </div>
        <div class="col-md-4">
            <div class="form-group">
                <label class="form-control-label" for="new-price">Price</label>
                <input class=${"form-control" + (priceStyle ? " is-invalid" : "")} id="new-price" type="number"
                    name="price">
            </div>
            <div class="form-group">
                <label class="form-control-label" for="new-image">Image</label>
                <input class=${"form-control" + (imgStyle ? " is-invalid" : "")} id="new-image" type="text" name="img">
            </div>
            <div class="form-group">
                <label class="form-control-label" for="new-material">Material (optional)</label>
                <input class="form-control" id="new-material" type="text" name="material">
            </div>
            <input type="submit" class="btn btn-info" value="Create" />
        </div>
    </div>
</form>`



export function showCreate(context) {
    context.render(htmlTemplate(addFurniture))

    let id = context.params.id;

    async function addFurniture(e) {
        e.preventDefault();

        let isValidInput = true;

        let make = document.querySelector("#new-make").value;
        let model = document.querySelector("#new-model").value;
        let year = document.querySelector("#new-year").value;
        let description = document.querySelector("#new-description").value;
        let price = document.querySelector("#new-price").value;
        let img = document.querySelector("#new-image").value;
        let material = document.querySelector("#new-material").value;
        let message = document.querySelector("#createMsg")

        if (make.length < 4 || model.length < 4) {
            context.render(htmlTemplate(addFurniture, make.length < 4, model.length < 4));
            message.textContent = "Make and Model must be at least 4 symbols long";
            message.style.color = "red";
            isValidInput = false;
        }

        if (Number(year) < 1950 || Number(year) > 2050) {
            context.render(htmlTemplate(addFurniture, make.length < 4, model.length < 4, Number(year) < 1950 || Number(year) > 2050));
            message.textContent = "Year must be between 1950 and 2050";
            message.style.color = "red";
            isValidInput = false;
        }

        if (description.length < 10) {
            context.render(htmlTemplate(addFurniture, make.length < 4, model.length < 4, Number(year) < 1950 || Number(year) > 2050,
                description.length < 10));

            message.textContent = "Description must be more than 10 symbols";
            message.style.color = "red";
            isValidInput = false;
        }

        console.log(price)
        console.log(price.length == price.length)
        if (price.length == 0 || Number(price) < 0) {
            context.render(htmlTemplate(addFurniture, make.length < 4, model.length < 4, Number(year) < 1950 || Number(year) > 2050,
                description.length < 10, price.length == 0 || Number(price) < 0));

            message.textContent = "Price must be a positive number";
            message.style.color = "red";
            isValidInput = false;
        }

        if (img == "") {
            context.render(htmlTemplate(addFurniture, make.length < 4, model.length < 4, Number(year) < 1950 || Number(year) > 2050,
                description.length < 10, Number(price) < 0, img == ""));

            message.textContent = "Image URL is required";
            message.style.color = "red";
            isValidInput = false;
        }

        if(!isValidInput){
            return;
        }

        await createFurniture({
            make,
            model,
            year,
            description,
            price,
            img,
            material,
        })


        context.render(htmlTemplate(addFurniture));
        message.textContent = "Please fill all fields.";
        message.style.color = "black";
        context.page.redirect("/")
    }
}