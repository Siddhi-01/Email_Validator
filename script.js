function validateEmail() {
    var emailInput = document.getElementById("email");
    var resultParagraph = document.getElementById("result");

    var email = emailInput.value.trim();

    // Regular expression for basic email validation
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
        resultParagraph.textContent = "Please enter an email address.";
    } else if (!emailRegex.test(email)) {
        resultParagraph.textContent = "Invalid email format. Please enter a valid email address.";
    } else {
        resultParagraph.textContent = "Email address is valid!";
    }
}
