import { html } from "../node_modules/lit-html/lit-html.js"
import { createItem } from "./api/crud.js";

const createTemplate = (createFunc) => html`
<section id="create-listing">
    <div class="container">
        <form @submit=${createFunc} id="create-form">
            <h1>Create Car Listing</h1>
            <p>Please fill in this form to create an listing.</p>
            <hr>

            <p>Car Brand</p>
            <input type="text" id="brand" placeholder="Enter Car Brand" name="brand">

            <p>Car Model</p>
            <input type="text" id="model" placeholder="Enter Car Model" name="model">

            <p>Description</p>
            <input type="text" id="description" placeholder="Enter Description" name="description">

            <p>Car Year</p>
            <input type="number" id="year" placeholder="Enter Car Year" name="year">

            <p>Car Image</p>
            <input type="text" id="imageUrl" placeholder="Enter Car Image" name="imageUrl">

            <p>Car Price</p>
            <input type="number" id="price" placeholder="Enter Car Price" name="price">

            <hr>
            <input type="submit" id="" class="registerbtn" value="Create Listing">
        </form>
    </div>
</section>
`

export async function showCreate(context) {
    context.render(createTemplate(createFunc));

    async function createFunc(e) {
        e.preventDefault();

        let brand = document.getElementById("brand").value;
        let model = document.getElementById("model").value;
        let description = document.getElementById("description").value;
        let year = Number(document.getElementById("year").value);
        let imageUrl = document.getElementById("imageUrl").value;
        let price = Number(document.getElementById("price").value);

        console.log(year)

        if (brand == "" || model == "" || description == "" || year == "" || imageUrl == "" || price == "") {
            alert("All fields are required!");
            return;
        }

        if(year == NaN || price == NaN){
            alert("Year and Price must be positive numbers!");
            return;
        }

        if(year < 0 || price < 0){
            alert("Year and Price must be positive numbers!");
            return;
        }

    

        await createItem({ brand, model, description, year, imageUrl, price });
        context.page.redirect("/all-listings");
        document.getElementById("brand").value = "";
        document.getElementById("model").value = "";
        document.getElementById("description").value = "";
        document.getElementById("year").value = "";
        document.getElementById("imageUrl").value = "";
        document.getElementById("price").value = "";

    }
}