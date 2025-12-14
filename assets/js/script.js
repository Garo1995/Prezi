


document.addEventListener("DOMContentLoaded", () => {
    const animatedItems = document.querySelectorAll(
        ".fade-left, .fade-right, .fade-top, .fade-bottom"
    );

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                } else {

                }
            });
        },
        {
            threshold: 0.15,
        }
    );

    animatedItems.forEach((item) => observer.observe(item));
});













let intelligenceSwiper = new Swiper(".create-slider", {
    slidesPerView: 2,
    spaceBetween: 10,
    speed: 800,
    pagination: {
        el: ".create-pagination",
        clickable: true,
    },
    breakpoints: {
        767: {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 11,
        },
        320: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 10,
        },

    },
});













