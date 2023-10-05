//12) Realizá un programa que permita validar una opción ingresada. La computadora preguntará al usuario si desea continuar una operación de la forma "¿Deseás continuar? [S/N]". Se espera que el usuario ingrese una 'S' o una 'N' (incluir las minúsculas). La opción debe ser tantas veces ingresada como sean necesarias hasta que quede comprendida dentro de las posibilidades esperadas. Realizá este ejercicio en dos versiones: con ciclo while y con ciclo do-while.

let validarOpcion;

do {
  validarOpcion = prompt("¿Deseás continuar? [S/N]").toUpperCase();
  if (validarOpcion == "S") {
    alert("SIGUE EJECUCION");
  } else if (validarOpcion != "N") {
    alert("OPCION INVALIDA");
  }
} while (validarOpcion != "N");
alert("FIN PROGRAMA - DO WHILE");

validarOpcion = prompt("¿Deseás continuar? [S/N]").toUpperCase();
while (validarOpcion != "N") {
  if (validarOpcion == "S") {
    alert("SIGUE EJECUCION");
  } else if (validarOpcion != "N") {
    alert("OPCION INVALIDA");
  }
  validarOpcion = prompt("¿Deseás continuar? [S/N]").toUpperCase();
}
document.write("FIN PROGRAMA - WHILE");