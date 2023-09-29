//5) Realizá un programa que permita al usuario ingresar valores del mismo tipo para las variables a y b. Una vez cargadas, la computadora debe mostrar ambas variables por pantalla, intercambiar entre sí sus valores (que lo cargado en a quede en b, y viceversa), y volver a mostrarlas. 

let a, b, auxiliar;
a = parseInt(prompt("Ingrese el 1° número"))
b = parseInt(prompt("Ingrese el 2° número"))

console.log("El 1° número es: " + a)
console.log("El 2° número es: " + b)

auxiliar = a
a = b
b = auxiliar

console.log("El 1° número cambiado es: " + a)
console.log("El 2° número cambiado es: " + b)