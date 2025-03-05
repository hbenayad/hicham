document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        let valid = true;

        // Name Validation
        if (name === "") {
            alert("Please enter your name.");
            valid = false;
        }

        // Email Validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.match(emailPattern)) {
            alert("Please enter a valid email address.");
            valid = false;
        }

        // Message Validation
        if (message.length < 10) {
            alert("Your message should be at least 10 characters long.");
            valid = false;
        }

        // Submit if valid
        if (valid) {
            alert("Form submitted successfully!");
            form.submit();
        }
    });
});