<?php
include 'connection.php'; // Include your database connection file

// Retrieve user input from the form
$email = $_POST['email'];
$password = $_POST['password'];

// Query the database to get the hashed password for the provided email
$sql = "SELECT email, password FROM users WHERE email = '$email'";
$result = $conn->query($sql);

// Check if a matching user is found
if ($result->num_rows > 0) {
    // User is found, verify the password
    $row = $result->fetch_assoc();
    $hashed_password = $row['password']; // Get the hashed password from the database
    if (password_verify($password, $hashed_password)) {
        // Password is correct, log the user in
        session_start(); // Start a new session
        $_SESSION['user_email'] = $email; // Store user email in the session variable
        $_SESSION['logged_in'] = true; // Set a flag to indicate the user is logged in
        header("Location: index.php"); // Redirect to index.php after successful login
        exit(); // Stop further execution of the script
    } else {
        // Password is incorrect, redirect back to the login page with an error message
        header("Location: index.php?error=1"); // Redirect with an error code
        exit();
    }
} else {
    // User is not found, redirect back to the login page with an error message
    header("Location: index.php?error=1"); // Redirect with an error code
    exit();
}

// Close the database connection
$conn->close();
?>
