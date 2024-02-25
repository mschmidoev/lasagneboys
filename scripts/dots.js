document.addEventListener('DOMContentLoaded', function () {
    const dotNavigation = document.querySelector('.dot-navigation');
    const dots = document.querySelectorAll('.dot');
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

    // Update active dot based on scroll position
    galleryContainer.addEventListener('scroll', () => {
        const scrollPercentage = galleryContainer.scrollLeft / (galleryContainer.scrollWidth - galleryContainer.clientWidth);
        const activeDotIndex = Math.round(scrollPercentage * (dots.length - 1));
        
        // Update active dot
        updateActiveDot(activeDotIndex);
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
    
    // Initially update active dot for first item
    updateActiveDot(0);
});
