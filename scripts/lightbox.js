document.addEventListener('DOMContentLoaded', function () {
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.style.display = 'none'; // Initially hide the lightbox
    document.body.appendChild(lightbox);

    const galleryLinks = document.querySelectorAll('.gallery a');
    let currentIndex = 0;

    galleryLinks.forEach(function (link, index) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            currentIndex = index;
            openLightbox(this.href, this.querySelector('img').alt);
        });
    });

    window.closeLightbox = function () {
        lightbox.style.display = 'none'; // Hide the lightbox
        document.removeEventListener('keydown', handleKeystroke); // Remove the event listener for keystrokes
    };

    lightbox.addEventListener('click', function (e) {
        if (e.target === lightbox) {
            closeLightbox(); // Close the lightbox if clicked outside the image
        }
    });

    function handleKeystroke(e) {
        if (e.key === 'Escape') {
            closeLightbox(); // Close the lightbox if escape key is pressed
        } else if (e.key === 'ArrowRight') {
            currentIndex = (currentIndex + 1) % galleryLinks.length;
            openLightbox(galleryLinks[currentIndex].href, galleryLinks[currentIndex].querySelector('img').alt);
        } else if (e.key === 'ArrowLeft') {
            currentIndex = (currentIndex - 1 + galleryLinks.length) % galleryLinks.length;
            openLightbox(galleryLinks[currentIndex].href, galleryLinks[currentIndex].querySelector('img').alt);
        }
    }

    function openLightbox(imageUrl, imageAlt) {
        const lightboxContent = `
            <button class="close-button" onclick="closeLightbox()">X</button>
            <img src="${imageUrl}" alt="${imageAlt}">
        `;

        lightbox.innerHTML = lightboxContent;
        lightbox.style.display = 'flex'; // Display the lightbox
        document.addEventListener('keydown', handleKeystroke); // Add the event listener for keystrokes
    }
});
