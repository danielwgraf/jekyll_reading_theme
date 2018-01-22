$( document ).ready(function(){
  $(".button-collapse").sideNav();


});

$(window).scroll(function () {
  if ($(window).scrollTop() >= 50) {
    $('.navbar').css('background-color','red');
  } else {
    $('.navbar').css('background-color','transparent');
  }
});
