$('.tf-hamburger').on('click', function() {
    $('.tf-js-active').slideToggle();
});

$('.tf-js-toggle1').on('click', function() {
    $('.tf-submenu1').slideToggle();
});

$('.tf-js-toggle2').on('click', function() {
    $('.tf-submenu2').slideToggle();
});

$(window).resize(function() {
    if($(window).width() > 800) {
        $("ul").removeAttr('style');
    }
});