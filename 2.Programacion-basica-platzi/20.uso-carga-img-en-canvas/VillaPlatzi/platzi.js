var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");
var mapa = "tile.png";

var imagen = new Image();
imagen.src = mapa;
imagen.addEventListener("load", dibujar);

function dibujar()
{
  papel.drawImage(imagen, 0, 0);
}

function aleatorio(min,maxi)
{
  var resultado;
  resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
  return resultado;
}