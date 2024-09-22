// JavaScript for filling the slider
document.addEventListener("DOMContentLoaded", function () {
    const sliderFill = document.querySelector('.slider-fill');
    const sections = document.querySelectorAll('.content, .hero');
    const sectionCount = sections.length;

    // Ensure slider starts at 0% when the page loads
    sliderFill.style.height = '0%';

    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const sectionIndex = Array.from(sections).indexOf(entry.target);

                    // If the first section (hero) is visible, set height to 0
                    if (sectionIndex === 0) {
                        sliderFill.style.height = '0%';
                    } else {
                        // Fill based on which section is in view (excluding the hero)
                        const fillPercentage = (sectionIndex / (sectionCount - 1)) * 100;
                        sliderFill.style.height = `${fillPercentage}%`;
                    }
                }
            });
        },
        { threshold: 0.5 } // Trigger when 50% of section is visible
    );

    sections.forEach(section => {
        observer.observe(section);
    });
});

// Javascript for changing image by hover

document.querySelectorAll('.links-container a').forEach(link => {
    link.addEventListener('mouseover', function() {
        // Get the image source from the data attribute
        const imageSrc = this.getAttribute('data-image');
        // Get the gallery number from the parent container's data attribute
        const galleryNumber = this.closest('.links-container').getAttribute('data-gallery');
        // Get display
        const displayImage = document.getElementById(`display-image${galleryNumber}`);
        
        // Start the fade-out effect
        displayImage.classList.add('fade-out');

        // Wait for the fade-out transition to complete before changing the image source
        setTimeout(() => {
            displayImage.src = imageSrc;
            displayImage.classList.remove('fade-out'); // Start fade-in effect
        }, 500); // Match this to the CSS transition duration

    });
});

//JavaScript for copying email
        const emailDiv = document.getElementById('emailDiv');

emailDiv.addEventListener('click', function() {
    const originalText = emailDiv.innerText; // Save original text
    const copyText = "kevinqiu190@gmail.com"; // Text to copy
    
    // Change the text to "Copied!"
    emailDiv.innerText = "Copied!";

    // Copy the text to the clipboard
    navigator.clipboard.writeText(copyText).then(function() {
        // Success in copying to clipboard

        // Revert the text back to the original after a short delay
        setTimeout(function() {
            emailDiv.innerText = originalText;
        }, 1500); // 1.5 seconds delay before reverting
    }, function() {
        // Handle failure to copy if needed
        console.error("Failed to copy text to clipboard.");
    });
});

//Javascript for gallery
    const radioButtons = document.querySelectorAll('input[type=radio]');


const slideShow = () => {
 for(let i =0; i<radioButtons.length; i++){
   setInterval(() => {
     console.log(i)
   }, 3000)
 }
}


slideShow();