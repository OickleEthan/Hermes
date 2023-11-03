<!-- I'm going to give you some code. I want you to modify this code based on a description that I will give you.
 Feel free to create any new files that you may need in order to complete the task. You may want to use CSS, 
 JS, HTML, or php!  -->

<?php
    session_start(); // Start the session to access session variables
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Register a service - Hermes</title>
    <link rel="shortcut icon" href="../assets/logo.ico" />
    <link rel="stylesheet" href="../styles.css">
    <link rel="stylesheet" href="account_styles.css">
</head>

<body>
    <table>
        <tr>
            <th colspan="2">
                <button type="button" class="hermes" onclick="window.location.href='../index.php'">Hermes</button>
            </th>
            <th colspan="2">
                <div class="search-container">
                    <form action="/search" method="GET">
                        <input type="text" placeholder="Search..." name="query">
                        <button type="submit"><i class="fa fa-search"></i></button>
                    </form>
                </div>
            </th>
            <th>
                <div class="dropdown">
                    <button class="dropbtn">
                        <img src="../assets/outline_account_circle_black_24dp.png" alt="Image" width="25" height="25">
                    </button>
                    <div class="dropdown-content">
                        <?php if (isset($_SESSION['logged_in']) && $_SESSION['logged_in'] === true) { ?>
                            <a class="menu-item" href="#" id="MessagesButton">Messages</a>
                            <a class="menu-item" href="#" id="NotificationsButton">Notifications</a>
                            <a class="menu-item" href="#" id="WorkButton">Work</a>
                            <a class="menu-item" href="#" id="WishListButton">Wish List</a>
                            <hr class="breakpoint">
                            <a class="menu-item" href="../account/account.php" id="AccountButton">Account</a>
                            <a class="menu-item" href="#" id="ServiceButton">Request a Service</a>
                            <a class="menu-item" href="#">Register a Service</a>
                            <hr class="breakpoint">
                            <a class="menu-item" href="#">Help</a>
                            <a class="menu-item" href="logout_handler.php">Log out</a>
                        <?php } else { ?>
                            <a class="menu-item" href="#" id="LogInButton">Log in</a>
                            <a class="menu-item" href="#" id="SignUpButton">Sign Up</a>
                            <hr class="breakpoint">
                            <a class="menu-item" href="#">Register a Service</a>
                            <a class="menu-item" href="#">Help</a>
                        <?php } ?>
                </div>
                </div>
                <div id="loginModal" class="modal">
                    <div class="modal-content">
                        <div class="modal-header">
                            <img src="assets/logo.ico" alt="Logo" class="logo">
                            <span class="close">&times;</span>
                        </div>
                        <h2>Welcome back!</h2>
                        <p>Log in to your Google account</p>
                        <button class="google-button">Sign up with Google</button>
                        <div class="breakpoint">
                            <div class="line"></div>
                            <div class="or">or</div>
                            <div class="line"></div>
                        </div>
                        <form action="login_handler.php" method="POST">
                            <input type="email" placeholder="E-mail" class="input-field" name="email" id="emailLogIn" required>
                            <div class="password-field">
                            <input type="password" placeholder="Password" class="input-field" name="password" id="passwordField" required>
                                <label for="showPassword" class="eye-icon">
                                    <i id="eyeIcon" class="fa fa-eye-slash"></i>
                                </label>
                                <input type="checkbox" id="showPassword" class="hidden">
                            </div>
                            <input type="checkbox" id="showSignUpPassword" class="hidden">
                            <div class="remember-device">
                                <input type="checkbox" id="rememberDevice" name="rememberDevice">
                                <label for="rememberDevice">Remember this device</label>
                            </div>
                            <button type="submit" class="sign-in-button" id="loginButton">Log In</button>
                        </form>
                        <div class="create-account-text">
                            <p>Don't have an account yet? <button class="create-account-button" id="createAccountButton">Create an account.</button></p>
                        </div>                        
                    </div>
                </div>
                </div>
                <div id="SignUpModal" class="modal" id="signupForm">
                    <div class="modal-content">
                        <div class="modal-header">
                            <img src="assets/logo.ico" alt="Logo" class="logo">
                            <span class="close">&times;</span>
                        </div>
                        <!-- <h2>Welcome back!</h2> -->
                        <p>Sign up with your Google account</p>
                        <button class="google-button">Sign up with Google</button>
                        <div class="breakpoint">
                            <div class="line"></div>
                            <div class="or">or</div>
                            <div class="line"></div>
                        </div>
                        <form action="signup_handler.php" method="POST">
                            <input type="email" placeholder="E-mail" class="input-field" id="emailSignUp" name="email">
                            <div class="password-field">
                                <input type="password" placeholder="Password" class="input-field" id="signUpPasswordField", name="password">
                                <label for="showSignUpPassword" class="eye-icon">
                                    <i id="signUpEyeIcon" class="fa fa-eye-slash"></i>
                                </label>
                                <input type="checkbox" id="showSignUpPassword" class="hidden">
                            </div>
                            <div class="confirm-password-field">
                                <input type="password" placeholder="Confirm Password" class="input-field" id="confirmPasswordField">
                            </div>
                            <div class="remember-device">
                                <input type="checkbox" id="rememberDevice">
                                <label for="rememberDevice">Remember this device</label>
                            </div>
                            <button type="submit" class="sign-up-button" id="signUpButton">Sign up</button>
                        </form>
                        <div class="error-message" id="errorMessage"></div>
                        <div class="create-account-text">
                            <p>Already have an account? <button class="create-account-button" id="LogInModalButton">Log in</button></p>
                        </div>                        
                    </div>
                </div>
            </th>
        </tr>
        <tr>
            <td colspan="6">
                <div style="border-top: 1px solid rgb(190, 190, 190);"></div>
            </td>
        </tr>
    </table>
    <script src="account_script.js"></script>
</body>

</html>
