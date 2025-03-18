document.addEventListener("DOMContentLoaded", function () {
    // Select login inputs
    const loginUsername = document.getElementById("login-username");
    const loginPassword = document.getElementById("login-password");
    const loginForm = document.getElementById("loginForm");

    // Select register inputs
    const registerUsername = document.getElementById("register-username");
    const registerEmail = document.getElementById("register-email");
    const registerPassword = document.getElementById("register-password");
    const registerConfirmPassword = document.getElementById("register-cn-password");
    const registerForm = document.getElementById("registerForm");

    // Validation patterns
    const usernamePattern = /^[a-zA-Z][a-zA-Z0-9_]{2,15}$/;
    const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*_])(?=.*\d).{8,}$/;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Validation function
    function validateInput(input, pattern, errorSpan, errorMessage) {
        if (!pattern.test(input.value.trim())) {
            errorSpan.textContent = errorMessage;
            return false;
        } else {
            errorSpan.textContent = "";
            return true;
        }
    }
    // Function to reset form fields
    function resetForm(form) {
        form.reset();
        form.querySelectorAll("span").forEach(span => span.textContent = "");
    }

    // Login validation (Real-time)
    loginUsername.addEventListener("input", function () {
        validateInput(loginUsername, usernamePattern, document.getElementById("login-username_err"), "Invalid username");
    });

    loginPassword.addEventListener("input", function () {
        validateInput(loginPassword, passwordPattern, document.getElementById("login-password_err"), "Password must be 8+ chars, with uppercase, lowercase, number, and special character");
    });

    // Login Form Submission
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission if invalid

        const usernameValid = validateInput(loginUsername, usernamePattern, document.getElementById("login-username_err"), "Invalid username");
        const passwordValid = validateInput(loginPassword, passwordPattern, document.getElementById("login-password_err"), "Password must be 8+ chars, with uppercase, lowercase, number, and special character");
        const closeLogin = document.getElementById("login-form");
        const overlay = document.querySelector('.overlay');

        if (usernameValid && passwordValid) {
            closeLogin.style.display = "none";
            overlay.style.display = "none";
            console.log("Login Successful!");
            alert("Login Successful!"); // Replace with actual authentication logic
        }
    });

    // Register validation (Real-time)
    registerUsername.addEventListener("input", function () {
        validateInput(registerUsername, usernamePattern, document.getElementById("register-username_err"), "Invalid username");
    });

    registerEmail.addEventListener("input", function () {
        validateInput(registerEmail, emailPattern, document.getElementById("register-email_err"), "Invalid email format");
    });

    registerPassword.addEventListener("input", function () {
        validateInput(registerPassword, passwordPattern, document.getElementById("register-password_err"), "Password must be 8+ chars, with uppercase, lowercase, number, and special character");
    });

    registerConfirmPassword.addEventListener("input", function () {
        const confirmPasswordError = document.getElementById("register-cn-password_err");
        if (registerConfirmPassword.value !== registerPassword.value) {
            confirmPasswordError.textContent = "Passwords do not match";
        } else {
            confirmPasswordError.textContent = "";
        }
    });

    // Register Form Submission
    registerForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission if invalid

        const usernameValid = validateInput(registerUsername, usernamePattern, document.getElementById("register-username_err"), "Invalid username");
        const emailValid = validateInput(registerEmail, emailPattern, document.getElementById("register-email_err"), "Invalid email format");
        const passwordValid = validateInput(registerPassword, passwordPattern, document.getElementById("register-password_err"), "Password must be 8+ chars, with uppercase, lowercase, number, and special character");
        const confirmPasswordError = document.getElementById("register-cn-password_err");
        const confirmPasswordValid = registerConfirmPassword.value === registerPassword.value;
        const closeRegister = document.getElementById("register-form");
        const overlay = document.querySelector('.overlay');
        if (!confirmPasswordValid) {
            confirmPasswordError.textContent = "Passwords do not match";
        } else {
            confirmPasswordError.textContent = "";
        }

        if (usernameValid && emailValid && passwordValid && confirmPasswordValid) {
            closeRegister.style.display = "none";
            overlay.style.display = "none";
            console.log("Registration Successful!"); // Replace with actual registration logic
            alert("Registration Successful!");
        }
    });
});
