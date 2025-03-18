document.addEventListener("DOMContentLoaded", function () {
    const appointmentForm = document.getElementById("appointmentForm");

    // Input fields
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");
    const dateInput = document.getElementById("date");
    const timeInput = document.getElementById("time");
    const treatmentInput = document.getElementById("treatment");

    // Error spans
    const nameError = document.getElementById("name_err");
    const emailError = document.getElementById("email_err");
    const phoneError = document.getElementById("phone_err");
    const dateError = document.getElementById("date_err");
    const timeError = document.getElementById("time_err");
    const treatmentError = document.getElementById("treatment_err");

    // Validation patterns
    const namePattern = /^[a-zA-Z\s]{3,}$/;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phonePattern = /^[6789]\d{9}$/;

    // Function to validate input and show errors
    function validateInput(input, pattern, errorSpan, errorMessage) {
        if (!pattern.test(input.value.trim())) {
            errorSpan.textContent = errorMessage;
            return false;
        } else {
            errorSpan.textContent = "";
            return true;
        }
    }

    // Real-time validation
    nameInput.addEventListener("input", function () {
        validateInput(nameInput, namePattern, nameError, "Enter a valid name (at least 3 letters)");
    });

    emailInput.addEventListener("input", function () {
        validateInput(emailInput, emailPattern, emailError, "Enter a valid email address");
    });

    phoneInput.addEventListener("input", function () {
        validateInput(phoneInput, phonePattern, phoneError, "Enter a valid 10-digit phone number");
    });

    dateInput.addEventListener("input", function () {
        const today = new Date().toISOString().split("T")[0]; // Get today's date
        if (dateInput.value < today) {
            dateError.textContent = "Please select a future date";
        } else {
            dateError.textContent = "";
        }
    });

    timeInput.addEventListener("input", function () {
        if (!timeInput.value) {
            timeError.textContent = "Please select a time";
        } else {
            timeError.textContent = "";
        }
    });

    treatmentInput.addEventListener("change", function () {
        if (!treatmentInput.value) {
            treatmentError.textContent = "Please select a treatment";
        } else {
            treatmentError.textContent = "";
        }
    });

    // Form submission handling
    appointmentForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission if invalid

        const nameValid = validateInput(nameInput, namePattern, nameError, "Enter a valid name (at least 3 letters)");
        const emailValid = validateInput(emailInput, emailPattern, emailError, "Enter a valid email address");
        const phoneValid = validateInput(phoneInput, phonePattern, phoneError, "Enter a valid 10-digit phone number");
        const dateValid = dateInput.value !== "";
        const timeValid = timeInput.value !== "";
        const treatmentValid = treatmentInput.value !== "";

        if (!dateValid) {
            dateError.textContent = "Please select a date";
        } else {
            dateError.textContent = "";
        }

        if (!timeValid) {
            timeError.textContent = "Please select a time";
        } else {
            timeError.textContent = "";
        }

        if (!treatmentValid) {
            treatmentError.textContent = "Please select a treatment";
        } else {
            treatmentError.textContent = "";
        }

        if (nameValid && emailValid && phoneValid && dateValid && timeValid && treatmentValid) {
            alert("Appointment booked successfully! on " + timeInput.value);
            appointmentForm.reset();
        }
    });
});
