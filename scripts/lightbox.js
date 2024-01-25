    document.addEventListener('DOMContentLoaded', function () {
        const lightbox = document.createElement('div');
        lightbox.className = 'lightbox';
        document.body.appendChild(lightbox);

        const galleryLinks = document.querySelectorAll('.gallery-container a');

        galleryLinks.forEach(function (link) {
            link.addEventListener('click', function (e) {
                e.preventDefault();

                const imageUrl = this.href;
                const imageAlt = this.querySelector('img').alt;

                const lightboxContent = `
                    <button class="close-button" onclick="closeLightbox()">X</button>
                    <img src="${imageUrl}" alt="${imageAlt}">
                `;

                lightbox.innerHTML = lightboxContent;
                lightbox.style.display = 'flex';
            });
        });

        window.closeLightbox = function () {
            lightbox.style.display = 'none';
        };

        lightbox.addEventListener('click', function (e) {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });

        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') {
                closeLightbox();
            }
        });
    });