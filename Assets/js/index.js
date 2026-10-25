const name = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");
const form = document.getElementById("form");

const formAlert = document.getElementById("formAlert");






const validateInputs = (e) => {
    e.preventDefault();

    formAlert.classList.add("d-none");
    formAlert.classList.remove("alert-danger", "alert-success");

    if (name.value.trim() === "") {
        showAlert("Name is required", "danger");
        name.focus();
        return;
    }

    if (email.value.trim() === "") {
        showAlert("Email is required", "danger");
        email.focus();
        return;
    }

    if (message.value.trim() === "") {
        showAlert("Message is required", "danger");
        message.focus();
        return;
    }

    showAlert("Form submitted successfully!", "success");
};


const showAlert = (text, type) => {
    formAlert.textContent = text;
    formAlert.classList.add(`alert-${type}`);
    formAlert.classList.remove("d-none");
};


