document.getElementById('signInForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Clear previous error messages
    document.getElementById('emailError').style.display = 'none';
    document.getElementById('passwordError').style.display = 'none';

    let isValid = true;

    // Get form values
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Email validation
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!email.match(emailRegex)) {
        isValid = false;
        document.getElementById('emailError').style.display = 'block';
        document.getElementById('emailError').textContent = 'Please enter a valid email address.';
    }

    // Password validation (at least 6 characters)
    if (password.length < 6) {
        isValid = false;
        document.getElementById('passwordError').style.display = 'block';
        document.getElementById('passwordError').textContent = 'Password must be at least 6 characters long.';
    }

    // If form is valid, show a success message or proceed with form submission
    if (isValid) {
        alert('Sign In Successful!');
        // Redirect to the homepage after the user clicks OK on the alert
        window.location.href = "http://127.0.0.1:3000/web%20development%20project.html/home.html";  // You can replace '/' with your homepage URL
    }
});
