const codeForm = document.getElementById("code-form");

const handleFormSubmit = (event) => {
    event.preventDefault();

    let codeInput = document.getElementById("search-input");
    console.log(codeInput.value);
};

codeForm.addEventListener("submit", handleFormSubmit);

const submitCode = (event) => {
    let codeInput = document.getElementById("search-input");

    event.preventDefault();

    console.log(codeInput.value);
};
