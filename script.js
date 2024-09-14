// Add event listener for scroll
window.addEventListener('scroll', function() {
    // Check how far the user has scrolled
    let scrollPosition = window.scrollY;

    // Get reference to body element
    const body = document.body;

    // Toggle classes based on scroll position
    if (scrollPosition > 100) {
        body.classList.add('scrolled');
    } else {
        body.classList.remove('scrolled');
    }
});