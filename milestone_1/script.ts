// Get the button and the skills section elements
const toggleButton = document.getElementById('toogle-skills') as HTMLButtonElement;
const skillsSection = document.getElementById('skills') as HTMLElement;

// Add event listener to the button
toggleButton.addEventListener('click', () => {
    // Check if the skills section is currently displayed
    if (skillsSection.style.display === 'none') {
        skillsSection.style.display = 'block'; // Show the skills section
    } else {
        skillsSection.style.display = 'none';  // Hide the skills section
    }
});
