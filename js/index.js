window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("logo").style.fontSize = "30px";
    /*document.getElementById("logotipo").style.width = "80px";
    document.getElementById("logotipo").style.height = "80px";*/
  } else {
    //document.getElementById("logotipo").style.webkitTransition = "all 0.8s";
    document.getElementById("logo").style.fontSize = "45px";
    /*document.getElementById("logotipo").style.width = "150px";
    document.getElementById("logotipo").style.height = "150px";*/
  }
}


////////////////////////////Anuncio//////////////////////////////////////
var start = 1;

setInterval(cambioImagen, 2000);

function cambioImagen() {
  var i;
  if (start == 1) {
    i = "img/anuncios/anuncio-1.jpg";
  }

  else if (start == 2) {
    i = "img/anuncios/anuncio-2.jpg";
  }

  else if (start == 3) {
    i = "img/anuncios/anuncio-3.jpg";
  }
  else {
    start = 1;
    i = "img/anuncios/anuncio-1.jpg";
  }
  document.getElementById("anuncio").src=""+i;
  start++;
}
//----------------------------------------------------------//