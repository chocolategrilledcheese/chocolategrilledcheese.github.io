$('nav a').on('click', function() {

    var scrollAnchor = $(this).attr('data-scroll'),
        scrollPoint = $('section[data-anchor="' + scrollAnchor + '"]').offset().top - 0;

    $('body,html').animate({
        scrollTop: scrollPoint
    }, 800);

    return false;
})