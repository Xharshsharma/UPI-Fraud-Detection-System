// 1️⃣ Navbar injection
document.addEventListener("DOMContentLoaded", function() {
    fetch('components/navbar.html')
        .then(response => response.text())
        .then(data => {
            const navbarPlaceholder = document.getElementById('navbar-placeholder');
            navbarPlaceholder.innerHTML = data;

            // 2️⃣ Mobile menu toggle
            const menuIcon = document.getElementById('menuIcon');
            const navLinks = document.getElementById('navLinks');

            menuIcon.addEventListener('click', () => {
                navLinks.classList.toggle('active');
            });

            // 3️⃣ Mobile dropdown toggle
            const dropdowns = document.querySelectorAll('.dropdown');
            dropdowns.forEach(dropdown => {
                const link = dropdown.querySelector('a');
                link.addEventListener('click', (e) => {
                    if(window.innerWidth <= 992){
                        e.preventDefault();
                        const menu = dropdown.querySelector('.dropdown-menu');
                        menu.style.display = (menu.style.display === 'flex') ? 'none' : 'flex';
                    }
                });
            });
        });
});
