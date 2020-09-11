function scroll_to_anchor(anchor_id) {
    var tag = $("#" + anchor_id + "");
    $('html,body').animate({ scrollTop: (tag.offset().top - 50) }, 'slow');
}

$('.btn-sub-step').on('click', function () {
    $('.block-sub').removeClass('active');

    var id_block = $(this).data('id');
    if (id_block) {
        setTimeout(function () {
            $('#' + id_block).addClass('active');
            setTimeout(function () {
                scroll_to_anchor(id_block);
            }, 150);
        }, 100);
    }
});