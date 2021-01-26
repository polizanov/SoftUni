function lockedProfile() {
    document.getElementById("main")
        .addEventListener("click", (e) => {
            let profileDiv = e.target.parentElement;
            let unlockButton = profileDiv.querySelector("input[value='unlock']");
            let displayDiv = profileDiv.querySelector("div");

            if (e.target.tagName == "BUTTON") {
                if (unlockButton.checked) {
                    if (e.target.textContent == "Show more") {
                        e.target.textContent = "Hide it";
                        displayDiv.style.display = "block"
                    } else if (e.target.textContent == "Hide it") {
                        e.target.textContent = "Show more"
                        displayDiv.style.display = "";
                    }
                }
            }

        })

}

