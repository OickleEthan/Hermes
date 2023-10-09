// JavaScript code to generate boxes dynamically
const boxContainer = document.querySelector('.box-container');

// Number of boxes per row (based on screen width)
const boxesPerRow = Math.floor(window.innerWidth / 100); // Assuming each box is 100px wide

// Number of boxes per column
const boxesPerColumn = 2;

// Total number of boxes
const totalBoxes = boxesPerRow * boxesPerColumn;

// Generate boxes dynamically
for (let i = 1; i <= totalBoxes; i++) {
    const box = document.createElement('div');
    box.className = 'box';
    box.innerText = `Box ${i}`;
    boxContainer.appendChild(box);
}