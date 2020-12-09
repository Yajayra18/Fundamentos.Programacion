var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick);

var d = document.getElementById("dibujito");
var ancho = d.width;
var lienzo = d.getContext("2d");


function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal) {
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujoPorClick(){
  
  var lineas = parseInt(texto.value);
  var l = 0;
  var yi, xf;
  var colorcito = "#FAA";
  var espacio = ancho / lineas;
  /*
  while (l < lineas){
    yi = 10 * l;
    xf = 10 * (l + 1);
    dibujarLinea(colorcito, 0, yi, xf, 300);
    console.log("linea" + l);
    l++;
  }
  */

  for (l=0; l < lineas; l++){
    yi = espacio * l;
    xf = espacio * (l + 1);
    dibujarLinea(colorcito, 0, yi, xf, ancho);
    console.log("linea" + l);
  }

  for (l=0; l < lineas; l++){
    yi = ancho - (espacio * l);
    xf = ancho - (espacio * (l + 1));
    dibujarLinea(colorcito, ancho, yi, xf, 0);
    console.log("linea" + l);
  }

  dibujarLinea(colorcito, 1, 1, 1,ancho -1);
  dibujarLinea(colorcito, 1, ancho -1, ancho -1, ancho -1);
  dibujarLinea(colorcito, ancho -1, 1, 1,0);
  dibujarLinea(colorcito, ancho -1, 1, ancho -1, ancho -1);
    

}