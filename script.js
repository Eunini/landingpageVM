document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header");
    const menuToggle = document.getElementById('mobile-menu');
    const mobileNav = document.querySelector('.nav');

    // Change header background on scroll
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });

    // Toggle mobile nav and animate button
    menuToggle.addEventListener("click", function () {
        menuToggle.classList.toggle("active");
        mobileNav.classList.toggle("active");
    });
});
