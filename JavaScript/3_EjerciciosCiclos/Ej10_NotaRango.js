//10) Realizá un programa que permita validar una nota de examen. Se espera que la nota que el usuario ingrese sea un número comprendido entre 0 y 10. La misma debe ser tantas veces ingresada como sean necesarias hasta que quede comprendida dentro del rango descripto.

let nota;

do {
  nota = parseFloat(prompt("Ingrese la nota del examen"));
  if (nota < 0 || nota > 10) {
    alert("TIENE QUE SER ENTRE 0 Y 10");
  }
} while (nota < 0 || nota > 10);
document.write(`La nota ingresada fue ${nota.toFixed(2)}`)