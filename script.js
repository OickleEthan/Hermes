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
