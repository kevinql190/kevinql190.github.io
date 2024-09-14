// Add event listener for scroll
window.addEventListener('scroll', function() {
    let scrollPosition = window.scrollY;
    const body = document.body;

    // Toggle scrolled class based on scroll position
    if (scrollPosition > 50) {
        body.classList.add('scrolled');
    } else {
        body.classList.remove('scrolled');
    }
});