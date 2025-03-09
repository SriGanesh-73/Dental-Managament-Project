document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.getElementById("menu-btn2"); // Selecting the menu icon
    const menuContainer = document.getElementById("container");
    menuButton.addEventListener("click", function () {
        menuContainer.classList.toggle("active"); // Toggle class to expand/collapse menu
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const dropdown = document.getElementById("dropdown");

    dropdown.addEventListener("click", function (event) {
        event.stopPropagation(); // Prevents closing when clicking inside
        dropdown.classList.toggle("active");
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", function (event) {
        if (!dropdown.contains(event.target)) {
            dropdown.classList.remove("active");
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const dropdownBtn = document.getElementById("dropdown1"); // Selecting the menu icon
    dropdownBtn.addEventListener("click", function () {
        dropdownBtn.classList.toggle("active"); // Toggle class to expand/collapse menu
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const menuOpenBtn = document.getElementById("menu-btn1");
    const overlay = document.querySelector(".overlay");
    menuOpenBtn.addEventListener("click", function () {
        const menuOpen = document.body.classList.toggle("menu-open");
        overlay.style.display = menuOpen ? "block" : "none";
        menuOpenBtn.textContent = menuOpen ? "✖" : "☰";
    });
    overlay.addEventListener("click", function () {
        overlay.style.display = "none";
        document.body.classList.remove("menu-open");
        menuOpenBtn.textContent = "☰"; // Reset menu icon
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const overlay = document.querySelector(".overlay");
    const loginForm = document.getElementById("login-form");
    const registerForm = document.getElementById("register-form");
    const no_account = document.getElementById('no-account');
    const have_account = document.getElementById('have-account'); 

    document.getElementById("open-login").addEventListener("click", function () {
        overlay.style.display = "block";
        loginForm.style.display = "block";
        registerForm.style.display = "none";
    });

    document.getElementById("open-register").addEventListener("click", function () {
        overlay.style.display = "block";
        registerForm.style.display = "block";
        loginForm.style.display = "none";
    });

    document.getElementById("close-login").addEventListener("click", function () {
        overlay.style.display = "none";
        loginForm.style.display = "none";
    });

    document.getElementById("close-register").addEventListener("click", function () {
        overlay.style.display = "none";
        registerForm.style.display = "none";
    });
    no_account.addEventListener("click", function () {
        overlay.style.display = "block";
        loginForm.style.display = "none";
        registerForm.style.display = "block";
    });
    have_account.addEventListener("click", function () {
        overlay.style.display = "block";
        registerForm.style.display = "none";
        loginForm.style.display = "block";
    });

    // Close when clicking outside the form
    overlay.addEventListener("click", function () {
        overlay.style.display = "none";
        loginForm.style.display = "none";
        registerForm.style.display = "none";
    });
});
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // Find image inside the container and animate it
            const img = entry.target.querySelector(".hidden");
            if (img) {
                img.classList.add("show");
            }
        } else {
            // Remove the animation when scrolled out
            const img = entry.target.querySelector(".hidden");
            if (img) {
                img.classList.remove("show");
            }
        }
    });
}, { threshold: 0.2 });

// Observe only the .scroll-container elements
document.querySelectorAll(".scroll-container").forEach((container) => observer.observe(container));

    
