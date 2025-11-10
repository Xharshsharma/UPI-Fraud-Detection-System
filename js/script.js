// ===== MOBILE MENU TOGGLE =====
const menuIcon = document.getElementById("menuIcon");
const navLinks = document.getElementById("navLinks");

menuIcon.addEventListener("click", () => {
  navLinks.classList.toggle("active");

  if (navLinks.classList.contains("active")) {
    navLinks.style.maxHeight = navLinks.scrollHeight + "px";
  } else {
    navLinks.style.maxHeight = "0px";
  }
});

// ===== NAVBAR SCROLL EFFECT =====
window.addEventListener("scroll", () => {
  const nav = document.querySelector(".navbar-container");
  if (window.scrollY > 20) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

// ===== CLICK TO OPEN DROPDOWNS ON MOBILE =====
document.querySelectorAll(".dropdown > a").forEach((drop) => {
  drop.addEventListener("click", (e) => {
    if (window.innerWidth <= 900) {
      e.preventDefault();
      const menu = drop.nextElementSibling;

      // Close any other open dropdowns first
      document.querySelectorAll(".dropdown-menu").forEach((otherMenu) => {
        if (otherMenu !== menu) {
          otherMenu.classList.remove("open");
          otherMenu.style.display = "none";
        }
      });

      // Toggle selected dropdown
      menu.classList.toggle("open");
      menu.style.display = menu.classList.contains("open") ? "flex" : "none";
    }
  });
});

// ===== RESET ON RESIZE (to avoid stuck menus) =====
window.addEventListener("resize", () => {
  if (window.innerWidth > 900) {
    navLinks.style.maxHeight = "none";
    navLinks.classList.remove("active");
    document.querySelectorAll(".dropdown-menu").forEach(menu => {
      menu.classList.remove("open");
      menu.style.display = "";
    });
  } else {
    navLinks.style.maxHeight = "0px";
  }
});

