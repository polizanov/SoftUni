function makeReservation(container) {
    let wrapper = document.getElementById("wrapper")
    wrapper
        .addEventListener("click", (e) => {
            let fullNameElement = document.getElementById("fullName");
            let emailElement = document.getElementById("email");
            let phoneNumberElement = document.getElementById("phoneNumber");
            let adressElement = document.getElementById("address");
            let postCode = document.getElementById("postalCode");
            let submitBtn = document.getElementById("submit");
            let editBtn = document.getElementById("edit");
            let continueBtn = document.getElementById("continue");

            if (e.target.tagName == "BUTTON" && e.target.textContent == "Submit") {
                if (fullNameElement.value == "" || emailElement.value == "") {
                    fullNameElement.value = "";
                    emailElement.value = "";
                    phoneNumberElement.value = "";
                    adressElement.value = "";
                    postCode.value = "";
                    return
                }

                liElementsString = `
                <li>Name: ${fullNameElement.value}</li>
                <li>E-mail: ${emailElement.value}</li>
                <li>Phone: ${phoneNumberElement.value}</li>
                <li>Address: ${adressElement.value}</li>
                <li>Postal Code: ${postCode.value}</li>`;

                document.getElementById("infoPreview")
                    .insertAdjacentHTML("beforeend", liElementsString);

                e.target.disabled = true;
                editBtn.disabled = false;
                continueBtn.disabled = false;


                fullNameElement.value = "";
                emailElement.value = "";
                phoneNumberElement.value = "";
                adressElement.value = "";
                postCode.value = "";
            }

            if (e.target.tagName == "BUTTON" && e.target.textContent == "Edit") {
                let liPreviewElements = Array.from(document.querySelectorAll("#infoPreview li"));

                fullNameElement.value = liPreviewElements[0].textContent.split(": ").slice(1);
                emailElement.value = liPreviewElements[1].textContent.split(": ").slice(1);
                phoneNumberElement.value = liPreviewElements[2].textContent.split(": ").slice(1);
                adressElement.value = liPreviewElements[3].textContent.split(": ").slice(1);
                postCode.value = liPreviewElements[4].textContent.split(": ").slice(1);

                liPreviewElements.forEach(li => li.remove());
                submitBtn.disabled = false;
                e.target.disabled = true;
                continueBtn.disabled = true;
            }

            if (e.target.tagName == "BUTTON" && e.target.textContent == "Continue") {
                submitBtn.disabled = true;
                editBtn.disabled = true;
                e.target.disabled = true;

                let conteinerHtmlElements = `
                <h2>Payment details</h2>
                <select id="paymentOptions" class="custom-select">
                <option selected disabled hidden>Choose</option>
                <option value="creditCard">Credit Card</option>
                <option value="bankTransfer">Bank Transfer</option>
                </select>
                <div id="extraDetails"></div>`

                document.getElementById("container")
                    .insertAdjacentHTML("beforeend", conteinerHtmlElements);

                document.getElementById("paymentOptions")
                    .addEventListener("change", (e) => {
                        if (e.target.value == "creditCard") {
                            let creditCardElements = `<div class="inputLabel">Card Number<input></div><br>
                            <div class="inputLabel">Expiration Date<input></div><br>
                            <div class="inputLabel">Security Numbers<input></div><br>
                            <button id="ckeckOut">Check Out</button>`

                            if (Array.from(document.getElementById("extraDetails").children).length > 0) {
                                Array.from(document.getElementById("extraDetails").children).forEach(x => x.remove());
                            }

                            document.getElementById("extraDetails")
                                .insertAdjacentHTML("beforeend", creditCardElements)

                            document.getElementById("ckeckOut")
                                .addEventListener("click", () => {
                                    Array.from(wrapper.children).forEach(x => x.remove())
                                    let htmlWrapper = `<h4>Thank you for your reservation!</h4>`;
                                    wrapper.insertAdjacentHTML("beforeend", htmlWrapper);

                                })
                        }

                        if (e.target.value == "bankTransfer") {
                            let bankTransferHtml = `<p>You have 48 hours to transfer amount to:
                            <br>
                            IBAN: GR96 0810 0010 0000 0123 4567 890
                        </p>
                        <button id="ckeckOut">Check Out</button>`

                            if (Array.from(document.getElementById("extraDetails").children).length > 0) {
                                Array.from(document.getElementById("extraDetails").children).forEach(x => x.remove());
                            }

                            document.getElementById("extraDetails")
                                .insertAdjacentHTML("beforeend", bankTransferHtml);

                            document.getElementById("ckeckOut")
                                .addEventListener("click", () => {
                                    Array.from(wrapper.children).forEach(x => x.remove())
                                    let htmlWrapper = `<h4>Thank you for your reservation!</h4>`;
                                    wrapper.insertAdjacentHTML("beforeend", htmlWrapper);

                                })
                        }


                    })

            }
        })
}