<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="signup_styles.css">
    <title>Additional Information</title>
</head>
<body>
    <button type="button" onclick="window.location.href='index.php'">Hermes</button>
    <h2>Enter Additional Information</h2>
    <form action="info_handler.php" method="POST">
        <label for="first_name">First Name:</label>
        <input type="text" id="first_name" name="first_name" required><br><br>

        <label for="last_name">Last Name:</label>
        <input type="text" id="last_name" name="last_name" required><br><br>

        <label for="date_of_birth">Date of Birth:</label>
        <input type="date" id="date_of_birth" name="date_of_birth" required><br><br>

        <label for="sex">Sex:</label>
        <select id="sex" name="sex" required>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
        </select><br><br>

        <label for="phone_number">Phone Number:</label>
        <input type="tel" id="phone_number" name="phone_number" required><br><br>

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required><br><br>

        <label for="address">Address:</label>
        <input type="text" id="address" name="address" required><br><br>

        <label for="postal_code">Postal Code:</label>
        <input type="text" id="postal_code" name="postal_code" required><br><br>

        <label for="country">Country:</label>
        <input type="text" id="country" name="country" required><br><br>

        <label for="province">Province:</label>
        <input type="text" id="province" name="province" required><br><br>

        <label for="city">City:</label>
        <input type="text" id="city" name="city" required><br><br>

        <button type="submit">Submit</button>
    </form>
</body>
</html>
