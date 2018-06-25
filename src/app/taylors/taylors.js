$(document).ready(function() {
    $('.tf-hamburger').on('click', function() {
        $('nav').slideToggle();
    });

    $('.tf-menu-lvl1').on('click', function() {
        $('.tf-submenu1').slideToggle();
    });

    $('.tf-menu-lvl2').on('click', function() {
        $('.tf-submenu2').slideToggle();
    });
});