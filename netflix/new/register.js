
function register() {
    // Get the values entered by the user
    var email = document.getElementById('emailInput').value;
    var password = document.getElementById('passwordInput').value;

    // Check if the email is already registered
    if (localStorage.getItem(email)) {
        alert("Email is already registered!");
       
        

    } else {
        // Store the email and password in localStorage
        localStorage.setItem(email, password);
        console.log("Registration successful!");

        // Display the registered email and password in the console
        console.log("Registered Email:", email);
        console.log("Registered Password:", password);
        window.alert("Registration successful! You can now sign in.");
    }
}
