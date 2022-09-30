$('.sign_in').on("click", function () {
  $('.main__registration').removeClass('dn');
  $('.main__authorization').addClass('dn');
})
$('.sign_up').on("click", function () {
  $('.main__registration').addClass('dn');
  $('.main__authorization').removeClass('dn');
})
