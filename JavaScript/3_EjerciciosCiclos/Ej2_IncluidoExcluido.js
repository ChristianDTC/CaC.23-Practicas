//2) Realizá un programa que permita al usuario ingresar dos números enteros num1 y num2, donde el primero siempre deberá ser menor o igual al segundo. La computadora debe mostrar la secuencia de números existentes entre ambos: (Ver ejemplo) A) Incluyéndolos; B) Excluyéndolos.

let numero1, numero2;

do {
  numero1 = parseInt(prompt("Ingrese el 1° número"));
  numero2 = parseInt(prompt("Ingrese el 2° número"));
  if (numero1 > numero2) {
    alert("EL PRIMER NUMERO DEBE SER MENOR QUE EL SEGUNDO")
  }

} while (numero1 > numero2);

document.write("Rango incluido " + numero1 + " y " + numero2)
document.write("<br>")
for (let i = numero1; i <= numero2; i++) {
    document.write(i + " - ")
}
document.write("<br>")
document.write("Rango sin incluir " + numero1 + " y " + numero2)
document.write("<br>")
for (let i = numero1+1; i < numero2; i++) {
    document.write(i + " - ")
}