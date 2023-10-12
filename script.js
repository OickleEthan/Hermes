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