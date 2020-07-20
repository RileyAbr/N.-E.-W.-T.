import codes from "./secretCodes.js";

const codeForm = document.getElementById("code-form");
const numberOfCodes = codes.length;

const handleFormSubmit = (event) => {
    event.preventDefault();

    let codeInput = document.getElementById("search-input");
    let codeInputValue = codeInput.value.toUpperCase();

    console.log(codeInputValue);

    if (codes.includes(codeInputValue)) {
        for (let i = 0; i < codes.length; i++) {
            if (codeInputValue === codes[i]) {
                alert(`Secret Code #${i} discovered`);

                document
                    .getElementById(`secret-image-${i + 1}`)
                    .style.setProperty("display", "block");
            }
        }
    } else {
        alert(`This code is invalid. Please try again`);
    }
};

codeForm.addEventListener("submit", handleFormSubmit);

const submitCode = (event) => {
    let codeInput = document.getElementById("search-input");

    event.preventDefault();

    console.log(codeInput.value);
};
