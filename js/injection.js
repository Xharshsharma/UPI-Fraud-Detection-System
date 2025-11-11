// js/autoload.js

// Function to dynamically load external HTML (like navbar/footer)
function loadComponent(elementId, filePath) {
  fetch(filePath)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Failed to load ${filePath}`);
      }
      return response.text();
    })
    .then(data => {
      document.getElementById(elementId).innerHTML = data;
    })
    .catch(error => console.error(error));
}

// When page loads
document.addEventListener("DOMContentLoaded", () => {
  // Load Navbar
  loadComponent("navbar-placeholder", "components/navbar.html");

  // Load Footer
  loadComponent("footer-placeholder", "components/footer.html");
});
