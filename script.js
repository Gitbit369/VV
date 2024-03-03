// JavaScript code can go here to add interactivity to your webpage
// For example, you could add functionality to handle user interactions, perform calculations, or make requests to a server.

// In this example, let's write a simple function to display a message when the user clicks on a button.

// Wait for the HTML document to be fully loaded before running any JavaScript code
document.addEventListener("DOMContentLoaded", function() {
    // Get a reference to the button element
    var button = document.getElementById("myButton");

    // Add a click event listener to the button
    button.addEventListener("click", function() {
        // When the button is clicked, display an alert message
        alert("Button clicked! This is just a demo. You can add your own functionality here.");
    });
});
