var estado = 0;
var colorLinea = "red";

var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");

var x;
var y;

document.addEventListener("mousedown", presionarMouse);
document.addEventListener("mouseup", soltarMouse);
document.addEventListener("mousemove", dibujarMouse);

function dibujarMouse(evento)
{
  if (estado == true) {
    var xFinal = evento.clientX - 8;
    var yFinal = evento.clientY - 80;

    dibujarLinea(colorLinea, x, y, xFinal, yFinal, papel)
  }
  x = evento.clientX - 8;
  y = evento.clientY - 80;
}

function presionarMouse(evento) 
{
  estado = true;
}

function soltarMouse(evento)
{
  estado = false;
}


function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo) {
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 3;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}