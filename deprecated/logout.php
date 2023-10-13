<?php
    session_start();

    // Unset all session variables
    $_SESSION = array();

    // Destroy the session
    session_destroy();

    // Redirect the user to the homepage or any other desired page after logout
    header("Location: index.php"); // Change "index.php" to the appropriate page
    exit();
?>
