
var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");
/* var mapa = "tile.png"; --->llamamos la imagen*/

var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};


console.log(teclas);

var cerdox = 100;
var cerdoy = 100;

var fondo = {
  url: "tile.png",
  cargaOK: false
};

var cerdo = {
  url: "cerdo.png",
  cargaOK: false
};

var cantidad = 1;
fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);


function cargarFondo()
{
  fondo.cargaOK = true;
  dibujar();
}

function cargarCerdos()
{
  cerdo.cargaOK = true;
  dibujar();
  console.log("aparicion de cerdo");
}

function dibujar() {
  if (fondo.cargaOK)
  {
    console.log("se dibujó el fondo");
    papel.drawImage(fondo.imagen, 0, 0);
  }
  if (cerdo.cargaOK)
  {
    console.log("se dibujó el fondo");
    document.addEventListener("keydown", dibujarTeclado);
    function dibujarTeclado(evento) 
    {
      var movimiento = 1;
      if (fondo.cargaOK)
        {
          console.log("se dibujó el fondo");
          papel.drawImage(fondo.imagen, 0, 0);
        }
      switch(evento.keyCode)
      {
        case teclas.UP:
          papel.drawImage(cerdo.imagen, cerdox, cerdoy - movimiento);
          cerdoy = cerdoy - movimiento;
        break;
        case teclas.DOWN:
          papel.drawImage(cerdo.imagen, cerdox, cerdoy + movimiento);
          cerdoy = cerdoy + movimiento;
        break;
        case teclas.LEFT:
          papel.drawImage(cerdo.imagen, cerdox - movimiento, cerdoy);
          cerdox = cerdox - movimiento;
        break;
        case teclas.RIGHT:
          papel.drawImage(cerdo.imagen, cerdox + movimiento, cerdoy);
          cerdox = cerdox + movimiento;
        break;
      }
    }
  }
  }

