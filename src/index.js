function filterImages(category) {
    const allImages = document.querySelectorAll('.category');

    allImages.forEach(imageGroup => {
        const categoryTitle = imageGroup.querySelector('h2').textContent;

        if (category === 'All' || category === categoryTitle) {
            imageGroup.style.display = 'block';
        } else {
            imageGroup.style.display = 'none';
        }
    });
}
