<?php
include 'connection.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = mysqli_real_escape_string($conn, $_POST['email']);
    $password = mysqli_real_escape_string($conn, $_POST['password']);
    $hashed_password = password_hash($password, PASSWORD_BCRYPT); // Hash the password for security

    // Check if the email already exists in the database
    $check_query = "SELECT * FROM users WHERE email='$email'";
    $result = $conn->query($check_query);

    if ($result->num_rows > 0) {
        // Email already exists, return an error response
        echo "Email is already taken. Please choose another one.";
    } else {
        // Email doesn't exist, insert new user into the database
        $insert_query = "INSERT INTO users (email, password) VALUES ('$email', '$hashed_password')";
        if ($conn->query($insert_query) === TRUE) {
            // User registered successfully, set session variable to indicate user is logged in
            $_SESSION['logged_in'] = true;
            $_SESSION['email'] = $email; // Store user's email in session for future use
            header("Location: signup_info.php"); // Redirect to index.php after successful login
        } else {
            // Error occurred while inserting user into the database
            echo "Error: " . $insert_query . "<br>" . $conn->error;
        }
    }
}

$conn->close();
?>
