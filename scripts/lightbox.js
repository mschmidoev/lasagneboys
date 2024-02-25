document.addEventListener('DOMContentLoaded', function () {
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.style.display = 'none'; // Initially hide the lightbox
    document.body.appendChild(lightbox);

    const galleryLinks = document.querySelectorAll('.gallery a');

    galleryLinks.forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            openLightbox(this.href, this.querySelector('img').alt);
        });
    });

    window.closeLightbox = function () {
        lightbox.style.display = 'none'; // Hide the lightbox
    };

    lightbox.addEventListener('click', function (e) {
        if (e.target === lightbox) {
            closeLightbox(); // Close the lightbox if clicked outside the image
        }
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            closeLightbox(); // Close the lightbox if escape key is pressed
        }
    });

    function openLightbox(imageUrl, imageAlt) {
        const lightboxContent = `
            <button class="close-button" onclick="closeLightbox()">X</button>
            <img src="${imageUrl}" alt="${imageAlt}">
        `;

        lightbox.innerHTML = lightboxContent;
        lightbox.style.display = 'flex'; // Display the lightbox
    }
});
