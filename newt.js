import codes from "./secretCodes.js";

const codeMessage = "Enter the secret codes:";
const codeForm = document.getElementById("code-form");
const codeLabel = document.getElementById("code-label");
const numberOfCodes = codes.length;

codeLabel.innerText = codeMessage;

// Temporary changes the label text and restarts the animation
const tempCodeLabelTextChange = (tempMessage) => {
    codeLabel.style.animation = "none";
    setTimeout(() => {
        codeLabel.style.animation = "";
    }, 10);

    codeLabel.innerText = tempMessage;

    setTimeout(() => {
        codeLabel.innerText = codeMessage;
    }, 4200);
};

//
const handleFormSubmit = (event) => {
    event.preventDefault();

    let codeInput = document.getElementById("code-input");
    let codeInputValue = codeInput.value.toUpperCase();

    console.log(codeInputValue);

    if (codes.includes(codeInputValue)) {
        for (let i = 0; i < codes.length; i++) {
            if (codeInputValue === codes[i]) {
                tempCodeLabelTextChange(
                    `Congratulations, you found code #${i + 1}`
                );
                if (i + 1 == codes.length) {
                    document
                        .getElementById("finale-message")
                        .style.setProperty("display", "block");
                } else {
                    document
                        .getElementById(`secret-image-${i + 1}`)
                        .style.setProperty("display", "block");
                }
            }
        }
    } else {
        tempCodeLabelTextChange("Error: Code is invalid");
    }
};

codeForm.addEventListener("submit", handleFormSubmit);
