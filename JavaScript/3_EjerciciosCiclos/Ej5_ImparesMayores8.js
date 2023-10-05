//5) Realizá un programa que permita al usuario ingresar 5 edades. La computadora debe indicar cuántas edades fueron valores impares mayores que 18.

let edades = [];
for (let i = 0; i < 5; i++) {
  do {
    edades[i] = parseInt(prompt("Ingrese la " + [i + 1] + "° edad"));
    if (edades[i] < 1) {
      alert("LA EDAD TIENE QUE SER MAYOR A 0");
    }
  } while (edades[i] < 1);
}

document.write("Las edades impares mayores a 18 son:");
document.write("<br>");
for (let i = 0; i < 5; i++) {
  if (edades[i] % 2 != 0 && edades[i] > 18) {
    document.write(edades[i]);
    document.write("<br>");
  }
}
