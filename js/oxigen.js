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

//Frase

var fr = [
  '“Piensa diferente, piensa OxigenArts.”',
  '“OxigenArts hace que tus sueños se hagan realidad.”',
  '“Las grandes ideas son aquellas de las que lo único que nos sorprende es que no se nos hayan ocurrido antes.”',
  "“No te preocupes, OxigenArts te lo tiene.”",
  '“OxigenArts, el mejor servicio en todo.”'
]

var frase = fr[Math.floor(Math.random()*fr.length)];

$('.frase').html(frase);

//Contact form
