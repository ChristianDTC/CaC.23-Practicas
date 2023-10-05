//9) Realizá un programa que permita al usuario ingresar un número natural. La computadora debe mostrar el factorial del número. El factorial de un entero positivo n se define como el producto de todos los números enteros positivos desde 1 hasta n. Por ejemplo, el factorial de 5 se calcula como: 5! = 1x2x3x4x5 = 120. Tené en cuenta que no se puede calcular el factorial de un número negativo.

let numeroFactorial, calculo = 1;

do {
  numeroFactorial = parseInt(
    prompt("Ingrese el números entero que quiere saber su factorial")
  );
  if (numeroFactorial < 1) {
    alert("TIENE QUE SER MAYOR A 0");
  }
} while (numeroFactorial < 1);

document.write(numeroFactorial + "! = ");
for (let i = 1; i <= numeroFactorial; i++) {
  if (i < numeroFactorial) {
    document.write(`${i}x`);
    calculo *= i;
  } else if (i == numeroFactorial) {
    calculo *= i;
    document.write(`${i} = ${calculo}`);
  }
}
