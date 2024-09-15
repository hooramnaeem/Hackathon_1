// Get the button and the skills section elements
var toggleButton = document.getElementById('toogle-skills');
var skillsSection = document.getElementById('skills');
// Add event listener to the button
toggleButton.addEventListener('click', function () {
    // Check if the skills section is currently displayed
    if (skillsSection.style.display === 'none') {
        skillsSection.style.display = 'block'; // Show the skills section
    }
    else {
        skillsSection.style.display = 'none'; // Hide the skills section
    }
});
