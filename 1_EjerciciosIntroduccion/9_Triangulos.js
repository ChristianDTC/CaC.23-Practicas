//9) Realizá un programa que permita al usuario ingresar dos números enteros, que representan las medidas en grados de dos ángulos interiores de cierto triángulo. La computadora debe mostrar el valor en grados del ángulo restante.

let angulo1, angulo2, anguloRestante;

angulo1 = parseFloat(prompt("Ingrese el 1° ángulo"))
angulo2 = parseFloat(prompt("Ingrese el 2° ángulo"))
anguloRestante = 180 - angulo1 - angulo2

console.log(`El ángulo restante es de ${anguloRestante}°`)