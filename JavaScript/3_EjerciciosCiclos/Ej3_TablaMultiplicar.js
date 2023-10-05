//3) Realizá un programa que permita al usuario ingresar un número entero n entre 1 y 10. La computadora debe mostrar la tabla de multiplicar de n.

let numero1;

do {
    numero1 = parseInt(prompt("Ingrese la tabla de multiplicar que quiera ver"));
    if (numero1 > 10 || numero1 < 1) {
      alert("SOLO PUEDE SER DEL 1 AL 10")
    }
  
  } while (numero1 > 10 || numero1 < 1);
  
  document.write("TABLA DEL " + numero1)
  document.write("<br>")
  for (let i = 1; i <= 10; i++) {
      document.write(numero1 + " x " + i + " = " + (numero1 * i))
      document.write("<br>")
  }