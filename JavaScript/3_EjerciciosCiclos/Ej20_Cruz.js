//20) Realizá un programa que permita al usuario ingresar dos números enteros que representen el ancho y el alto de una matriz de cruces. La computadora debe mostrar dicha matriz.

let ancho, alto;

ancho = parseInt(prompt("Ingrese el ancho de la matriz"));
alto = parseInt(prompt("Ingrese el alto de la matriz"));

for (let i = 0; i < alto; i++) {
  for (let j = 0; j < ancho; j++) {
    document.write(" X ");
  }
  document.write("<br>")
}
