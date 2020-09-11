$('.user-locale').click((e) => {
  var user_locale = $(e.target).data('id');
  document.cookie = "user_locale=" + user_locale;
  document.location.reload();
});