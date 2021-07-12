const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
const ham = document.querySelector('.hamburger');

navToggle.addEventListener('click', () => {
    if (nav.style.maxHeight) {
        nav.style.maxHeight = null;
        ham.classList.remove('hamburger-open');
    }
    else {
        nav.style.maxHeight = nav.scrollHeight + "px";
        ham.classList.add('hamburger-open');
    }
});

$(document).ready(function () {
    $('.testimony-container').slick({
        dots: false,
        infinite: true,
        autoplay: true,
        arrows: false,
        variableHeight: true,
        speed: 900,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
});