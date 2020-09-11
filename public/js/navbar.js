$(document).ready(function(){
    $(window).on('scroll', function(){
        $('.valid-step').on('click', function(){
            setTimeout(function(){
                var url = $('.valid-step').data('redirect');
                $(location).attr('href', url);
            }, 300);
        });

        var scrollAmount = $(window).scrollTop();

        if(scrollAmount > 130){
            $('.nav-vertical').addClass('closed');
        }
        else if(scrollAmount === 0){
            $('.nav-vertical').removeClass('closed');
        }
    });
});

$('.toggle-nav').on('click', function(){
    $(this).closest('.nav-vertical').toggleClass('closed');
});