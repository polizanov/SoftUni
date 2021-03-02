function createRecepe() {
    document.querySelector("main article form")
        .addEventListener("submit", (e) => {
            e.preventDefault();

            let nameElement = document.querySelector("input[name='name']");
            let imgElement = document.querySelector("input[name='img']");
            let ingredientsElement = document.querySelector("textarea[name='ingredients']");
            let preparationElement = document.querySelector("textarea[name='steps']");

            if (nameElement == "" || ingredientsElement == "" || preparationElement == "") {
                alert("Invalid Recipe!");
                return;
            }

            sentRecipe(nameElement.value, imgElement.value, ingredientsElement.value, preparationElement.value);

        })

    async function sentRecipe(name, img, ingredientsString, stepsString) {
        let authToken = sessionStorage.authToken;

        let ingredients = ingredientsString.split("\n");
        let steps = stepsString.split("\n");

        if (authToken == undefined) {
            alert("You don't have access!");
            return;
        }
        console.log(authToken);
        let request = await fetch(`http://localhost:3030/data/recipes`, {
            method: 'post',
            headers: {
                "Content-type": "application/json",
                "X-Authorization": `${authToken}`
            },
            body: JSON.stringify({ name, img, ingredients, steps }),
        })


        if(!request.ok){
            alert("Something whent wrong!");
            return;
        }

        alert("Your recipe was successfully sent!");
        clearFields();
    }

    function clearFields() {
        document.querySelector("input[name='name']").value = "";
        document.querySelector("input[name='img']").value = "";
        document.querySelector("textarea[name='ingredients']").value = "";
        document.querySelector("textarea[name='steps']").value = "";
    }
}

window.addEventListener("load", createRecepe())