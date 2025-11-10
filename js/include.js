document.addEventListener("DOMContentLoaded", () => {
  const navbarContainer = document.getElementById("navbar");
  const footerContainer = document.getElementById("footer");

  // Load Navbar
  if (navbarContainer) {
    fetch("components/navbar.html")
      .then(res => res.text())
      .then(data => {
        navbarContainer.innerHTML = data;

        // Enable menu toggle after navbar loads
        const menuIcon = document.getElementById("menuIcon");
        const navLinks = document.getElementById("navLinks");
        if (menuIcon && navLinks) {
          menuIcon.addEventListener("click", () => {
            navLinks.classList.toggle("active");
            navLinks.style.maxHeight = navLinks.classList.contains("active")
              ? navLinks.scrollHeight + "px"
              : "0px";
          });
        }
      })
      .catch(err => console.error("❌ Navbar load failed:", err));
  }

  // Load Footer
  if (footerContainer) {
    fetch("components/footer.html")
      .then(res => res.text())
      .then(data => {
        footerContainer.innerHTML = data;
      })
      .catch(err => console.error("❌ Footer load failed:", err));
  }
});
