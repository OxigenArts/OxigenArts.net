$("a.smooth").click(function() {
    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top-60
    }, 500);
});
$("#menu ul").click(function() {
  if( $(window).width() < 768){
    $('#menu').collapse('toggle');
  }
});
