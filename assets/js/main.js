var tplModal = function(modalContent, modalOkText) {
    return '<div class="commonDialog modal fade text-xs-center">\
                <div class="modal-dialog" role="document">\
                    <div class="modal-content">\
                        <div class="modal-body">\
                            <p class="text-xs-center">' + modalContent + '</p>\
                        </div>\
                        <div class="modal-footer text-xs-center">\
                            <button type="button" class="btn btn-primary">' + modalOkText + '</button>\
                        </div>\
                    </div>\
                </div>\
            </div>';
}
$(function() {
    $('.navigation-conponent .list-inline-item').hover(function() {
        $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
    }, function() {
        $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
    });
    $('.signUp-container').sticky({
        offset: 40,
        onUnstick: function() {
            $('.signUp-container').css('left', 'auto');
        }
    });

    $('.dropdown-category-favor').on({
        "show.bs.dropdown": function() {
            $('.back-drop').addClass('active');
        },
        "hide.bs.dropdown": function() {
            $('.back-drop').removeClass('active');
        },
        "shown.bs.dropdown": function() {
            var favorite_category_block = $('.favorite-category-block');
            equalHeight(favorite_category_block);
        },
    })
});

function gototop() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
}

function equalHeight(element) {
    element.matchHeight();
}

function addCommas(nStr) {
    nStr += '';
    x = nStr.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2;
}

function showModal(modalContent, modalOkText) {
    $('body').append(tplModal(modalContent, modalOkText));
    $('.commonDialog').modal('show');
    $('.commonDialog').on('hidden.bs.modal', function() {
        $('.commonDialog').remove();
    })
}

var leftGotoTop = 0;
$(window).on('load', function() {
    leftGotoTop = $('.gototop-container').offset().left;

    $('.gototop-container').css({
        'left': leftGotoTop + 'px',
        'position': 'fixed',
        opacity: '0'
    })
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > $(window).innerHeight() / 2) {
            $('.gototop-container').css('opacity', 1);
        } else {
            $('.gototop-container').css('opacity', 0);
        }
    })
});