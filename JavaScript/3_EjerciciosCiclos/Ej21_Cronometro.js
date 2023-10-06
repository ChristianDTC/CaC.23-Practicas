//21) Realizá un programa que permita al usuario ingresar un número de minutos. La computadora debe mostrar un cronómetro con el formato "mm:ss" desde "00:00" hasta un segundo antes del minuto ingresado.

let minutos, segundos, minutosIngresados;

minutosIngresados = parseInt(prompt("Ingrese la cantidad de minútos"));

for (let i = 0; i < minutosIngresados; i++) {
  for (let j = 0; j < 60; j++) {
    segundos = j < 10 ? `:0${j}` : `:${j}`;
    minutos = i < 10 ? `0${i}` : `${i}`;
    document.write(`${minutos}${segundos} - `);
  }
}
