// Animation Trigger
const animatedButton = document.getElementById('animated-button');
animatedButton.addEventListener('click', () => {
  animatedButton.style.backgroundColor = '#FFD700'; // Trigger color change dynamically
  animatedButton.textContent = 'Clicked!';
});

// Local Storage: Store and Retrieve User Preferences
const themeSelector = document.getElementById('theme');
const saveButton = document.getElementById('save-preferences');
const preferencesDisplay = document.getElementById('preferences-display');

// Save Preferences to Local Storage
saveButton.addEventListener('click', () => {
  const selectedTheme = themeSelector.value;
  localStorage.setItem('userTheme', selectedTheme);
  applyTheme(selectedTheme);
  preferencesDisplay.textContent = `You selected the ${selectedTheme} theme.`;
});

// Retrieve Preferences on Page Load
window.addEventListener('load', () => {
  const savedTheme = localStorage.getItem('userTheme');
  if (savedTheme) {
    themeSelector.value = savedTheme;
    applyTheme(savedTheme);
    preferencesDisplay.textContent = `Your saved theme is ${savedTheme}.`;
  }
});

// Apply Theme Function
function applyTheme(theme) {
  document.body.className = theme; // Dynamically change the theme class on the body
}
