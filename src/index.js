const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const images = document.querySelectorAll('.images img');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let currentIndex = 0;

    images.forEach((img, index) => {
        img.addEventListener('click', () => {
            currentIndex = index;
            modal.style.display = 'block';
            modalImg.src = img.src;
        });
    });

    modal.addEventListener('click', (event) => {
        if (event.target === modal || event.target.classList.contains('close')) {
            modal.style.display = 'none';
        }
    });

    function showImage(index) {
        modalImg.src = images[index].src;
    }

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    });