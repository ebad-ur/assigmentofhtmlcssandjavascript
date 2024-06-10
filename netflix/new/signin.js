
function signIn() {
    // Get the values entered by the user for sign-in
    var signInEmail = document.getElementById('signInEmail').value;
    var signInPassword = document.getElementById('signInPassword').value;

    // Check if the email is registered
    if (localStorage.getItem(signInEmail)) {
        var registeredPassword = localStorage.getItem(signInEmail);

        // Display information in the console
        console.log("Entered Email:", signInEmail);
        console.log("Entered Password:", signInPassword);
        console.log("Registered Password:", registeredPassword);

        // Compare passwords (insecure for educational purposes only)
        if (signInPassword === registeredPassword) {
            console.log("Sign In successful!");
            // Open the new page in a new tab
            window.open("video.html", "_blank");
        } else  {
            alert("Wrong email or password. Please try again.");
        }
    } else {
        alert("Email is not registered. Please sign up.");
    }
}

