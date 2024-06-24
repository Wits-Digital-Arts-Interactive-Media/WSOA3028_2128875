document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.slide-in');
    
    const checkSlide = () => {
        images.forEach(image => {
            const slideInAt = (window.scrollY + window.innerHeight) - image.height / 2;
            const imageBottom = image.offsetTop + image.height;
            const isHalfShown = slideInAt > image.offsetTop;
            const isNotScrolledPast = window.scrollY < imageBottom;

            if (isHalfShown && isNotScrolledPast) {
                image.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', checkSlide);
    checkSlide();
});
