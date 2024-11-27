document.addEventListener('DOMContentLoaded', () => {
    // Select the Swiper container element
    const swiperContainer = document.querySelector('.swiper-container');

    // Ensure Swiper container exists before initializing
    if (swiperContainer) {
        const swiper = new Swiper(swiperContainer, {
            loop: true,
            spaceBetween: 30,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                dynamicBullets: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                0: {
                    slidesPerView: 1,
                },
                576: {
                    slidesPerView: 1.5,
                    // spaceBetween: 10,
                },
                768: {
                    slidesPerView: 2,
                    // spaceBetween: 20,
                },
                1024: {
                    slidesPerView: 3,
                    // spaceBetween: 30,
                }
            },
        });
    } else {
        console.warn('Swiper container not found. Make sure the HTML structure is correct.');
    }
});





