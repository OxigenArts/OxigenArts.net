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
  '“Lo importante no es tener muchas ideas, sino la idea oportuna en cada caso.”',
  '“Las ideas son como las pulgas, saltan de un hombre a otro. Pero no pican a todo el mundo.”',
  '“Las grandes ideas son aquellas de las que lo único que nos sorprende es que no se nos hayan ocurrido antes.”',
  "“Como fuerza social, un individuo con una idea vale por noventa y nueve con un solo interés.”",
  '“Las que conducen y arrastran al mundo no son las máquinas, sino las ideas.”'
]

var frase = fr[Math.floor(Math.random()*fr.length)];

$('.frase').html(frase);

//Contact form
