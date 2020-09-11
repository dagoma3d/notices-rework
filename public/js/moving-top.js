var banner = $('.moving-banner-top article');

$(document).ready(function () {
    // load_image_banner();
    trigger_banner();
    setTimeout(function(){
        resize_banner();
    }, 50);

    $(window).on('resize', resize_banner);
    banner.children('figure').children('.hover-tap').on('click', mobile_moving_banner);
});

function resize_banner(){
    var coeff_resize = get_window_width();
    var largeur = 0;

    banner.each(function (index, element) {
        var x_largeur = $(element).width();

        if((x_largeur < largeur) || (largeur === 0))
        {
            largeur = x_largeur;
        }
    });

    $(banner).children('figure').width(largeur * coeff_resize);

    doResize();
}

function doResize(){
    var hauteur = 0;
    banner.each(function (index, element) {
        var child_img = $(element).children('figure').children('img');
        var x_hauteur = $(child_img).height();

        if((x_hauteur < hauteur) || (hauteur === 0))
        {
            hauteur = x_hauteur;
        }
    });

    $('.moving-banner-top').height(hauteur);
}

function trigger_banner() {
    $(banner[0]).addClass('hover');
    $(banner[1]).addClass('covered');
}

function mobile_moving_banner(){
    $(banner).toggleClass('hover').toggleClass('covered');
}

function get_window_width(){
    var largeur_body = $('body').width();
    var coeff_resize = 0;

    if(largeur_body > 1280) {
        coeff_resize = 1.6;
    }
    else if(largeur_body <= 1280){
        coeff_resize = 1.8;
    }

    return coeff_resize;
}

function load_image_banner(){
    var image_banner_left = [
        '/medias/home/moving-top-gauche-2.jpg',
        '/medias/home/moving-top-gauche-2.jpg'
    ];

    var image_banner_right = [
        '/medias/home/moving-top-droite-2.jpg',
        '/medias/home/moving-top-droite-2.jpg'
    ];

    var random_nb = Math.floor(Math.random() * (image_banner_left.length));

    $(banner[0]).children('figure').children('img').attr('src', image_banner_left[random_nb]);
    $(banner[1]).children('figure').children('img').attr('src', image_banner_right[random_nb]);
}