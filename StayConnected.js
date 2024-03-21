// Function to handle login form submission
function login(event) {
    event.preventDefault(); // Prevent default form submission

    // Get user input from login form
    var userId = document.getElementById("loginUserId").value;
    var password = document.getElementById("loginPassword").value;

    // Perform authentication (you can replace this with your authentication logic)
    // For demonstration purposes, let's assume authentication is successful if userId and password are not empty
    if (userId.trim() !== '' && password.trim() !== '') {
        // Authentication successful
        // Redirect to index.html
        window.location.href = "index.html";
    } else {
        // Authentication failed
        alert("Invalid username or password. Please try again.");
    }
}

// Function to handle registration form submission
function register(event) {
    event.preventDefault(); // Prevent default form submission

    // Get user input from registration form
    var userId = document.getElementById("registerUserId").value;
    var email = document.getElementById("registerEmail").value;
    var password = document.getElementById("registerPassword").value;

    // Perform registration (you can replace this with your registration logic)
    // For demonstration purposes, let's assume registration is successful if all fields are not empty
    if (userId.trim() !== '' && email.trim() !== '' && password.trim() !== '') {
        // Registration successful
        // Redirect to index.html
        window.location.href = "index.html";
    } else {
        // Registration failed
        alert("Please fill in all the required fields.");
    }
}

// Event listeners for form submissions
document.getElementById("loginForm").addEventListener("submit", login);
document.getElementById("registerForm").addEventListener("submit", register);
