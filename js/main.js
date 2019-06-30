$(function() {
    $('#btn-menu').click(function(event) {
            var menu = $('.main-menu');
            if (menu.hasClass('mobile-menu')) {
                menu.removeClass('mobile-menu')
            }
            else {
              menu.addClass('mobile-menu');
            }
    });
    $(window).scroll(function(event) {
            var menu = $('.main-menu');
            if (menu.hasClass('mobile-menu')) {
                menu.removeClass('mobile-menu');
            }
    });
});


















$(function() {
    $('.slide-adv').owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        smartSpeed: 500,
        autoplay: true,
        autoplayTimeout: 12000,
        navText: ['<i class="fal fa-chevron-circle-left"></i>', '<i class="fal fa-chevron-circle-right"></i>'],
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1,
            },
            1000: {
                items: 1
            }
        }
    });
});

// slider-feedback

$(function() {
    $('.slider-feedback').owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        margin: 30,
        smartSpeed: 500,
        items: 4,
        autoplay: true,
        autoplayTimeout: 4000,
        navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
});
$(function() {
    $('.slider-teacher').owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        margin: 30,
        smartSpeed: 500,
        items: 4,
        autoplay: true,
        autoplayTimeout: 4000,
        navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    });
});

$(function() {
    $('.slide-top').owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        margin: 15,
        smartSpeed: 500,
        items: 4,
        autoplay: true,
        autoplayTimeout: 4000,
        navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 6
            }
        }
    });
});
$(function() {
    $('.slide-bottom').owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        margin: 15,
        smartSpeed: 500,
        items: 4,
        autoplay: true,
        autoplayTimeout: 4000,
        navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    });
});

$(document).ready(function() {
    $('.row-gallery').each(function() { // the containers for all your galleries
        $(this).magnificPopup({
            delegate: 'a', // the selector for gallery item
            type: 'image',
            gallery: {
                enabled: true
            }
        });
    });
});

$(function() {
    $('.wrapper-student-home').owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        margin: 20,
        smartSpeed: 500,
        items: 4,
        autoplay: true,
        autoplayTimeout: 4000,
        navText: ['<i class="fal fa-chevron-double-left"></i>', '<i class="fal fa-chevron-double-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
});

$(function() {
    $('.panel-title a').click(function(event) {
        $('.panel-title a').removeClass('active');
        var btn = $(this);
        if (btn.hasClass('active')) {
            btn.addClass('active');
        }
        else{
            btn.removeClass('active');
        }

    });
});