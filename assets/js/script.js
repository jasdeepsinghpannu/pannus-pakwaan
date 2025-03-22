// Smooth Scroll for anchor links
document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("a[href^='#']");
    
    for (let link of links) {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    }
});

// Scroll Reveal Animation
document.addEventListener("DOMContentLoaded", function () {
    const revealElements = document.querySelectorAll(".service-box, .service-card");

    // Add 'visible' class to make sure they are always visible by default
    revealElements.forEach(el => {
        el.classList.add("visible");
    });

    const scrollReveal = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                scrollReveal.unobserve(entry.target); // Ensures they stay visible
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach(el => {
        scrollReveal.observe(el);
    });
});
