//4) Realizá un programa que permita al usuario ingresar un número natural n. La computadora debe mostrar los primeros n múltiplos de 3 excepto aquellos que sean a la vez múltiplos de 5.

let numero1, contador = 1, control = 0;

do {
  numero1 = parseInt(
    prompt(
      "Ingrese la cantidad de multiplas de 3 (excepto los multipos de 5) que quiera ver"
    )
  );
  if (numero1 < 1) {
    alert("TIENE QUE SER UN NUMERO MAYOR A 0");
  }
} while (numero1 < 1);

document.write("<br>");
document.write("MULTIPLOS DE 3");
document.write("<br>");

while (control != numero1) {
  if (contador % 3 == 0 && contador % 5 !=0) {
    document.write(contador);
    document.write("<br>");
    control++;
  }
  contador++
}
