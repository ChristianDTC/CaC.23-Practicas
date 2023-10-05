//7) Realizá un programa que permita al usuario ingresar un número entero cant. Acto seguido, que permita ingresar cant números reales, correspondientes a las estaturas de un equipo de jugadores de baloncesto (en metros). La computadora debe mostrar la estatura promedio.

let estatura = [], cantidadEstatura, promedioEstatura = 0;

do {
    cantidadEstatura = parseInt(prompt("Ingrese la cantidad de estaturas a cargar"));
    if (cantidadEstatura < 1) {
      alert("TIENE QUE SER MAYOR A 0");
    }
  } while (cantidadEstatura < 1);

for (let i = 0; i < cantidadEstatura; i++) {
    estatura[i] = parseFloat(prompt(`Ingrese la ${i+1}° estatura en metros`))
    promedioEstatura += estatura[i]
}
promedioEstatura = promedioEstatura / cantidadEstatura
document.write(`El promedio de las estaturas es ${promedioEstatura.toFixed(2)}`);