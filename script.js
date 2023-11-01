// JavaScript code to generate boxes dynamically
const boxContainer = document.querySelector('.box-container');
let boxesPerColumn = 2; // Initial number of boxes per column

// Number of boxes per row (based on screen width)
const boxesPerRow = Math.floor(window.innerWidth / 100); // Assuming each box is 100px wide
const totalBoxes = boxesPerRow * boxesPerColumn; // Total number of boxes

// Generate boxes dynamically
for (let i = 1; i <= totalBoxes; i++) {
    const box = document.createElement('div');
    box.className = 'box';
    box.innerText = `Box ${i}`;
    boxContainer.appendChild(box);
}

// Function to generate additional boxes when "More Results" button is clicked
document.getElementById('moreResultsBtn').addEventListener('click', function() {
    // Increase boxesPerColumn by 1
    boxesPerColumn++;

    // Remove existing boxes
    boxContainer.innerHTML = '';

    // Calculate new total number of boxes
    const newTotalBoxes = boxesPerRow * boxesPerColumn;

    // Generate boxes dynamically based on updated boxesPerColumn
    for (let i = 1; i <= newTotalBoxes; i++) {
        const box = document.createElement('div');
        box.className = 'box';
        box.innerText = `Box ${i}`;
        boxContainer.appendChild(box);
    }
});


window.addEventListener('load', function() {
    const loginButton = document.getElementById('LogInButton');
    const SignUpButton = document.getElementById('SignUpButton');
    const createAccountButton = document.getElementById('createAccountButton');
    const LoginModal = document.getElementById('loginModal');
    const SignUpModal = document.getElementById('SignUpModal');
    const closeBtn = document.querySelectorAll('.close');

    loginButton.addEventListener('click', function(event) {
        event.preventDefault();
        LoginModal.style.display = 'block';
    });

    SignUpButton.addEventListener('click', function(event) {
        event.preventDefault();
        SignUpModal.style.display = 'block';
    });

    // Loop through all close buttons and attach event listener to each one
    closeBtn.forEach(function(btn) {
        btn.addEventListener('click', function() {
            LoginModal.style.display = 'none';
            SignUpModal.style.display = 'none';
        });
    });

    window.addEventListener('click', function(event) {
        if (event.target == LoginModal || event.target == SignUpModal) {
            LoginModal.style.display = 'none';
            SignUpModal.style.display = 'none';
        }
    });
});


const passwordField = document.getElementById('passwordField');
const showPasswordCheckbox = document.getElementById('showPassword');
const eyeIcon = document.getElementById('eyeIcon');

showPasswordCheckbox.addEventListener('change', function() {
    const passwordFieldType = showPasswordCheckbox.checked ? 'text' : 'password';
    passwordField.type = passwordFieldType;
    
    // Toggle eye icon style
    if (showPasswordCheckbox.checked) {
        eyeIcon.classList.remove('fa-eye-slash');
        eyeIcon.classList.add('fa-eye');
    } else {
        eyeIcon.classList.remove('fa-eye');
        eyeIcon.classList.add('fa-eye-slash');
    }
});

const signUpPasswordField = document.getElementById('signUpPasswordField');
const signUpShowPasswordCheckbox = document.getElementById('showSignUpPassword');
const signUpEyeIcon = document.getElementById('signUpEyeIcon');
const confirmPasswordField = document.getElementById('confirmPasswordField');
const signUpButton = document.getElementById('signUpButton');

signUpShowPasswordCheckbox.addEventListener('change', function() {
    const passwordFieldType = signUpShowPasswordCheckbox.checked ? 'text' : 'password';
    signUpPasswordField.type = confirmPasswordField.type = passwordFieldType;
    
    // Toggle eye icon style
    if (signUpShowPasswordCheckbox.checked) {
        signUpEyeIcon.classList.remove('fa-eye-slash');
        signUpEyeIcon.classList.add('fa-eye');
    } else {
        signUpEyeIcon.classList.remove('fa-eye');
        signUpEyeIcon.classList.add('fa-eye-slash');
    }
});

// Get the email, password, and login button elements
var emailField = document.getElementById('emailField');
var loginButton = document.getElementById('loginButton');

// Function to validate the form fields
function validateForm() {
    // Check if email and password fields are not empty
    if (emailField.value.trim() === '' || passwordField.value.trim() === '') {
        // Display an alert or any other error message as needed
        alert('Please fill out both email and password fields.');
        return false; // Prevent form submission
    }
    return true; // Allow form submission
}

// Attach the validateForm function to the login button's click event
loginButton.addEventListener('click', function(event) {
    if (!validateForm()) {
        event.preventDefault(); // Prevent form submission if validation fails
    }
});

signUpButton.addEventListener("click", function() {
    window.location.href = "signup.html";
});

// Get a reference to the "Create an account" button
var createAccountButton = document.getElementById("createAccountButton");

// Get a reference to the SignUpModal
var signUpModal = document.getElementById("SignUpModal");

// Add a click event listener to the button
createAccountButton.addEventListener("click", function () {
  signUpModal.style.display = "block"; // Display the SignUpModal
});

// You can also add code to close the modal when the close button (×) is clicked
var closeModalButton = signUpModal.querySelector(".close");
closeModalButton.addEventListener("click", function () {
  signUpModal.style.display = "none"; // Close the SignUpModal
});

// Get a reference to the "Log in" button inside the SignUpModal
var logInModalButton = document.getElementById("LogInModalButton");

// Get a reference to the LogInModal
var logInModal = document.getElementById("loginModal");

// Add a click event listener to the "Log in" button inside the SignUpModal
logInModalButton.addEventListener("click", function () {
  logInModal.style.display = "block"; // Display the LogInModal
  signUpModal.style.display = "none"; // Hide the SignUpModal if it's open
});

// You can also add code to close the LogInModal when the close button (×) is clicked
var closeModalButton = logInModal.querySelector(".close");
closeModalButton.addEventListener("click", function () {
  logInModal.style.display = "none"; // Close the LogInModal
});

// Get references to form elements and error message in SignUpModal
var signUpForm = document.getElementById("signupForm");
var emailSignUpField = document.getElementById("emailSignUp");
// var signUpPasswordField = document.getElementById("signUpPasswordField");
// var confirmPasswordField = document.getElementById("confirmPasswordField");
var errorMessage = document.getElementById("errorMessage");

// Function to validate the SignUp form fields
function validateSignUpForm() {
    // Reset previous error message
    errorMessage.textContent = "";

    // Check if email, password, and confirm password fields are not empty
    if (emailSignUpField.value.trim() === '' || signUpPasswordField.value.trim() === '' || confirmPasswordField.value.trim() === '') {
        errorMessage.textContent = "Please fill in all required fields.";
        return false; // Prevent form submission
    }

    // Check if password and confirm password fields match
    if (signUpPasswordField.value !== confirmPasswordField.value) {
        errorMessage.textContent = "Password and Confirm Password do not match.";
        return false; // Prevent form submission
    }

    return true; // Allow form submission if all checks pass
}

// Attach the validateSignUpForm function to the SignUp form's submit event
signUpForm.addEventListener("submit", function(event) {
    if (!validateSignUpForm()) {
        event.preventDefault(); // Prevent form submission if validation fails
    }
});

