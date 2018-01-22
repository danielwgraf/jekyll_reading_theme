$( document ).ready(function(){
  $(".button-collapse").sideNav();


});

$(window).scroll(function () {
  if ($(window).scrollTop() >= 50) {
    $('.navbar').css('opacity','100');
  } else {
    $('.navbar').css('opacity','0');
  }
});
