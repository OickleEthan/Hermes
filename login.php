<?php
include 'connection.php'; // Include your database connection file

// Retrieve user input from the form
$email = $_POST['email'];
$password = $_POST['password'];

// Query the database to check if the user exists with the provided email and password
$sql = "SELECT * FROM users WHERE email = '$email' AND password = '$password'";
$result = $conn->query($sql);

// Check if a matching user is found
if ($result->num_rows > 0) {
    // User is found, log them in
    session_start(); // Start a new session
    $row = $result->fetch_assoc();
    $_SESSION['user_email'] = $email; // Store user email in the session variable
    $_SESSION['user_name'] = $row['name']; // Store user name in the session variable
    $_SESSION['logged_in'] = true; // Set a flag to indicate the user is logged in
    header("Location: index.php"); // Redirect to index.php after successful login
    exit(); // Stop further execution of the script
} else {
    // User is not found, redirect back to the login page with an error message
    header("Location: login.html?error=1"); // Redirect with an error code
    exit();
}

// Close the database connection
$conn->close();
?>
