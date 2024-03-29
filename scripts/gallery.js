document.addEventListener('DOMContentLoaded', function () {
    const dotNavigation = document.querySelector('.dot-navigation');
    const dots = document.querySelectorAll('.dot');
    const expandingDot = document.querySelector('.expanding-dot');
    const galleryContainer = document.querySelector('.gallery.carousel');

    // Calculate dot scroll amount
    const scrollAmount = galleryContainer.scrollWidth / (dots.length - 1);

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            galleryContainer.scrollTo({
                left: index * scrollAmount,
                behavior: 'smooth'
            });

            // Update active dot
            updateActiveDot(index);
        });
    });

    // Update expanding dot position on scroll
    dotNavigation.addEventListener('scroll', () => {
        const scrollPercentage = dotNavigation.scrollLeft / (dotNavigation.scrollWidth - dotNavigation.clientWidth);
        const newPosition = scrollPercentage * (dotNavigation.clientWidth - expandingDot.clientWidth); // Calculate new position for the expanding dot
        expandingDot.style.left = `${newPosition}px`; // Set the left position of the expanding dot
    });

    // Function to update active dot
    function updateActiveDot(index) {
        dots.forEach((dot, i) => {
            if (i === index) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }
});
