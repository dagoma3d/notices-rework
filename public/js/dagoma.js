$(document).ready(function () {
  $('.float-label input').each(function (index, elem) {
    if ($(elem).val() !== '') {
      $(elem).addClass('fill');
    }
    else {
      $(elem).removeClass('fill');
    }
  });

  $('.video-overlay').on('click', function (e) {
    if ($(this).siblings('video').get(0).paused === true) {
      $(this).siblings('video').get(0).play();
    }
    else {
      $(this).siblings('video').get(0).pause();
    }
  });

  $('body').on('mouseout', '#drowpdown-header-cart', function (e) {
    $('.cart-widget-products').css('display', 'none');
  });
  $('body').on('mouseover', '#drowpdown-header-cart', function (e) {
    $('.cart-widget-products').css('display', 'block');
  });

  $('a.hidenexttime').on('click', function (e) {
    cookieAlert();
    $('#cnil-banner').hide();
  });

  $('body').on('click', '#product-available-alert-btn', function (e) {
    $('#available-product-alert-response').html("");
    $('#product-available-alert-btn-form').toggle('fast');
  });

  $(document).on('blur', '.float-label input', function () {
    $('.float-label input').each(function (index, elem) {
      if ($(elem).val() !== '') {
        $(elem).addClass('fill');
      }
      else {
        $(elem).removeClass('fill');
      }
    });
  });

  $('body').on('click', '#choose-lang', function() {
    $('#country-popup').addClass('open');
  });

  $('body').on('click', '#country-popup', function(e) {
      e.preventDefault();
      if($(e.target).hasClass('fa-close') || $(e.target).closest('.content-country').length !== 1) {
          $('#country-popup').removeClass('open');
      }
  });


});