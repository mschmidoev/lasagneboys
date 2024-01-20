function moveGalleryImages(galleryId, direction) {
    const galleryContainer = document.querySelector(`#${galleryId} .gallery-container`);
    const scrollAmount = window.scrollY;

    // Move the gallery horizontally based on the scroll position and direction
    const translateValue = direction === 'right' ? scrollAmount : -scrollAmount;
    galleryContainer.style.transform = `translateX(${translateValue}px)`;
}
