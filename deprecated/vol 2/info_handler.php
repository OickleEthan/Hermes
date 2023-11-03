<?php
include 'connection.php';

// Get data from the form
$email = $_POST['email']; // Assuming you have an input field for email in your form
$first_name = $_POST['first_name'];
$last_name = $_POST['last_name'];
$date_of_birth = $_POST['date_of_birth'];
$sex = $_POST['sex'];
$phone_number = $_POST['phone_number'];
$address = $_POST['address'];
$postal_code = $_POST['postal_code'];
$country = $_POST['country'];
$province = $_POST['province'];
$city = $_POST['city'];

// SQL query to update data for the specified email
$sql = "UPDATE users SET 
        first_name='$first_name', 
        last_name='$last_name', 
        date_of_birth='$date_of_birth', 
        sex='$sex', 
        phone_number='$phone_number', 
        address='$address', 
        postal_code='$postal_code', 
        country='$country', 
        province='$province', 
        city='$city' 
        WHERE email='$email'";

// Execute the query
if ($conn->query($sql) === TRUE) {
    // Set session variables to indicate that the user is logged in
    session_start();
    $_SESSION['logged_in'] = true;
    $_SESSION['email'] = $email;
    
    header("Location: index.php"); // Redirect to index.php after successful login
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Close the database connection
$conn->close();
?>
