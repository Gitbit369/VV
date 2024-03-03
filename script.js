// JavaScript code can go here to add interactivity to your webpage
// For example, you could add functionality to handle user interactions, perform calculations, or make requests to a server.

// In this example, let's enhance the functionality by adding smooth scrolling to anchor links.

// Wait for the HTML document to be fully loaded before running any JavaScript code
document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling for anchor links
    var anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(function(anchorLink) {
        anchorLink.addEventListener("click", function(event) {
            event.preventDefault();
            var targetId = anchorLink.getAttribute("href").substr(1);
            var targetElement = document.getElementById(targetId);
            if (targetElement) {
                var offsetTop = targetElement.offsetTop;
                window.scrollTo({
                    top: offsetTop,
                    behavior: "smooth"
                });
            }
        });
    });

    // Get a reference to the button element
    var button = document.getElementById("myButton");

    // Add a click event listener to the button
    button.addEventListener("click", function() {
        // When the button is clicked, display an alert message
        alert("Button clicked! This is just a demo. You can add your own functionality here.");
    });
});
