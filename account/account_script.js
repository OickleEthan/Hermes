// Create a new div element
var div = document.createElement('div');

// Set the style for the div element
div.style.position = 'fixed';
div.style.bottom = '0';
div.style.left = '0';
div.style.color = 'black';
div.style.padding = '10px';

// Update the content of the div with the screen width
function updateScreenWidth() {
  div.textContent = 'Screen Width: ' + window.innerWidth + 'px';
}

// Call the updateScreenWidth function to set the initial content
updateScreenWidth();

// Append the div element to the body of the document
document.body.appendChild(div);

// Update the screen width whenever the window is resized
window.addEventListener('resize', updateScreenWidth);

document.addEventListener('DOMContentLoaded', function() {
    // Get all account options
    var accountOptions = document.querySelectorAll('.account-option');

    // Add click event listeners to each account option
    accountOptions.forEach(function(option) {
        option.addEventListener('click', function() {
            // Remove the 'selected' class from all options
            accountOptions.forEach(function(opt) {
                opt.classList.remove('selected');
            });

            // Add the 'selected' class to the clicked option
            option.classList.add('selected');

            var dataUrl = option.getAttribute('data-url');

            // Use AJAX to load content from the specified URL
            var xhr = new XMLHttpRequest();
            xhr.open('GET', dataUrl, true);
            xhr.onreadystatechange = function() {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    // Display content in the middle of the screen
                    var content = xhr.responseText;
                    displayContent(content);
                }
            };
            xhr.send();
        });
    });

    // Manually trigger a click event on the "Personal Info" option when the page loads
    var personalInfoOption = document.querySelector('.account-option[data-url="personal_info.php"]');
    if (personalInfoOption) {
        personalInfoOption.click();
    }

    // Function to display content in the middle of the screen
    function displayContent(content) {
        var contentDiv = document.querySelector('.content');
        contentDiv.innerHTML = content;

        // Show content in the middle of the screen
        contentDiv.style.display = 'block';
        contentDiv.style.position = 'fixed';
        contentDiv.style.top = '75px';
        contentDiv.style.left = '0px';
        contentDiv.style.background = 'white';
        contentDiv.style.padding = '20px';
        contentDiv.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
    }
});
