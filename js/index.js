window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("logo").style.fontSize = "30px";
  } else {
    document.getElementById("logo").style.fontSize = "40px";
  }
}


////////////////////////////Anuncio//////////////////////////////////////
var start = 1;

setInterval(cambioImagen, 2000);

function cambioImagen() {
  var i;
  if (start == 1) {
    i = "img/anuncios/agua.png";
  }

  else if (start == 2) {
    i = "img/anuncios/roca.png";
  }

  else if (start == 3) {
    i = "img/anuncios/gas.png";
  }
  else {
    start = 1;
    i = "img/anuncios/agua.png";
  }
  document.getElementById("anuncio").src = "" + i;
  start++;
}
//----------------------------------------------------------//