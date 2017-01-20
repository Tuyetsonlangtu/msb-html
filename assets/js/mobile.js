$(function() {
    if ($(window).width < 990) {
        $('.header-on-mobile').sticky({
            offset: 0,
        });
    }
});

//toggle menu on mobile
function toggleMenuMobile() {
    if ($('html').hasClass('mm-opening')) {
        $('html').removeClass("mm-opening");
    } else
        $('html').addClass("mm-opening");
}

function toggleMobileFilter() {
    var filter = $('.filter-container');
    if (filter.hasClass('active')) {
        filter.removeClass('active')
    } else {
        filter.addClass('active');
    }
}