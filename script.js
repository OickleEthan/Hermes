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


// Add event listener to the "Log in" button to show the modal
const loginButton = document.querySelector('.menu-item[href="#"]');
const modal = document.getElementById('loginModal');
const closeBtn = document.querySelector('.close');

loginButton.addEventListener('click', function(event) {
    event.preventDefault(); // Prevents the default behavior of the link
    modal.style.display = 'block'; // Display the modal
});

// Close the modal when the close button is clicked
closeBtn.addEventListener('click', function() {
    modal.style.display = 'none'; // Hide the modal
});

// Close the modal when the user clicks anywhere outside the modal
window.addEventListener('click', function(event) {
    if (event.target == modal) {
        modal.style.display = 'none'; // Hide the modal
    }
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
