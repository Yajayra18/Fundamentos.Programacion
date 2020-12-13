var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");
/* "tile.png"; --->llamamos la imagen*/

var fondo = {
  url: "tile.png",
  cargaOK: false
};

var vaca = {
  url: "vaca.png",
  cargaOK: false
};

fondo.imagen = new Image(); /*--> cargamos la imagen*/
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo); /*el escuchador cuando detecta que la imagen ha sido cargada inicia la función dibujar*/

vaca.imagen = new Image();
vaca.imagen.scr = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

function cargarFondo()
{
  fondo.cargaOK = true;
  dibujar();
}

function cargarVacas()
{
  vaca.cargaOK = true;
  dibujar();
}

function dibujar() {
  if (fondo.cargaOK == true)
  {
    papel.drawImage(fondo.imagen, 0, 0);
  }
  if (vaca.cargaOK == true)
  {
    papel.drawImage(vaca.imagen, 100, 0);
  }
}

function aleatorio(min,maxi)
{
  var resultado;
  resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
  return resultado;
}