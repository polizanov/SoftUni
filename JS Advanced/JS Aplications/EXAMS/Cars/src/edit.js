import { html } from "../node_modules/lit-html/lit-html.js"
import { updateItem, getItemsDetails } from "./api/crud.js";

const editTemplate = (editFunc, data) => html`
<section id="edit-listing">
    <div class="container">

        <form @submit=${editFunc} id="edit-form">
            <h1>Edit Car Listing</h1>
            <p>Please fill in this form to edit an listing.</p>
            <hr>

            <p>Car Brand</p>
            <input type="text" id="brand" placeholder="Enter Car Brand" name="brand" value="${data.brand}">

            <p>Car Model</p>
            <input type="text" id="model" placeholder="Enter Car Model" name="model" value="${data.model}">

            <p>Description</p>
            <input type="text" id="description" placeholder="Enter Description" name="description" value="${data.description}">

            <p>Car Year</p>
            <input type="number" id="year" placeholder="Enter Car Year" name="year" value="${data.year}">

            <p>Car Image</p>
            <input type="text" id="imageUrl" placeholder="Enter Car Image" name="imageUrl" value="${data.imageUrl}">

            <p>Car Price</p>
            <input type="number" id="price" placeholder="Enter Car Price" name="price" value="${data.price}">

            <hr>
            <input type="submit" class="registerbtn" value="Edit Listing">
        </form>
    </div>
</section>`

export async function showEdit(context) {
    let carId = context.params.id;
    let data = await getItemsDetails(carId);
    

    context.render(editTemplate(editFunc, data));

    async function editFunc(e) {
        e.preventDefault();

        let brand = document.getElementById("brand").value;
        let model = document.getElementById("model").value;
        let description = document.getElementById("description").value;
        let year = Number(document.getElementById("year").value);
        let imageUrl = document.getElementById("imageUrl").value;
        let price = Number(document.getElementById("price").value);

        if (brand == "" || model == "" || description == "" || year == "" || imageUrl == "" || price == "") {
            alert("All fields are required!");
            return;
        }

        if(year == NaN || price == NaN){
            alert("Year and Price must be positive numbers!");
            return;
        }

        if (year < 0 || price < 0) {
            alert("Year and Price must be positive numbers!");
            return;
        }

        await updateItem(carId, { brand, model, description, year, imageUrl, price });
        context.page.redirect(`/details/${carId}`);
        document.getElementById("brand").value = "";
        document.getElementById("model").value = "";
        document.getElementById("description").value = "";
        document.getElementById("year").value = "";
        document.getElementById("imageUrl").value = "";
        document.getElementById("price").value = "";

    }
}