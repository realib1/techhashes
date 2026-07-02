const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    const navLink = document.querySelectorAll(".nav-link");
    
    hamburger.addEventListener("click", mobileMenu);
    hamburger.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            mobileMenu();
        }
    });
    navLink.forEach(n => n.addEventListener("click", closeMenu));
    
    function mobileMenu() {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");

        // Update aria-expanded state dynamically
        const isExpanded = hamburger.classList.contains("active");
        hamburger.setAttribute("aria-expanded", isExpanded);
    }
    
    function closeMenu() {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
        hamburger.setAttribute("aria-expanded", "false");
    }