// Number of Minecraft icons to display
const numberOfIcons = 100;

// Function to create and append Minecraft icons
function createIcons() {
  const container = document.querySelector('.minecraft-icons');
  
  for (let i = 0; i < numberOfIcons; i++) {
    const icon = document.createElement('div');
    icon.classList.add('minecraft-icon');
    icon.style.left = `${Math.random() * 99}%`; // Adjusted the range for positioning
    icon.style.top = `${Math.random() * 99}%`; // Adjusted the range for positioning
    container.appendChild(icon);
  }
}

// Call the function to create icons when the page loads
window.addEventListener('load', createIcons);
