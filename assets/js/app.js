window.addEventListener("scroll", () => {

    const header = document.querySelector(".header");

    if(window.scrollY > 30){

        header.classList.add("scrolled");

    }else{

        header.classList.remove("scrolled");

    }

});

// Accessible mobile navigation
const menuToggle = document.querySelector(".menu-toggle");
const primaryNavigation = document.querySelector(".nav-links");

if (menuToggle && primaryNavigation) {
    const closeMenu = () => {
        primaryNavigation.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation menu");
        menuToggle.innerHTML = '<i class="fas fa-bars" aria-hidden="true"></i>';
    };

    menuToggle.addEventListener("click", () => {
        const isOpen = primaryNavigation.classList.toggle("open");
        menuToggle.setAttribute("aria-expanded", String(isOpen));
        menuToggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
        menuToggle.innerHTML = isOpen
            ? '<i class="fas fa-xmark" aria-hidden="true"></i>'
            : '<i class="fas fa-bars" aria-hidden="true"></i>';
    });

    primaryNavigation.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", closeMenu);
    });

    document.addEventListener("click", event => {
        if (!primaryNavigation.contains(event.target) && !menuToggle.contains(event.target)) {
            closeMenu();
        }
    });

    document.addEventListener("keydown", event => {
        if (event.key === "Escape") closeMenu();
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 900) closeMenu();
    });
}
