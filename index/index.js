// Wait for the DOM content to load before executing the script
document.addEventListener("DOMContentLoaded", function () {

    // Handle Contact Form Submission
    const contactForm = document.getElementById("contact-form");
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // Get form data
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        // Display the form data in the console (You can send it to a server here)
        console.log("Name: ", name);
        console.log("Email: ", email);
        console.log("Message: ", message);

        // Reset the form
        contactForm.reset();

        // Display a success message (optional)
        alert("आपला संदेश पाठविला गेला आहे. धन्यवाद!");
    });

});
