// Smooth scroll
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Scroll reveal animation (like modern portfolio sites)
window.addEventListener("scroll", reveal);

function reveal() {
    document.querySelectorAll(".reveal").forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const visiblePoint = 100;

        if (elementTop < windowHeight - visiblePoint) {
            el.classList.add("active");
        }
    });
}
