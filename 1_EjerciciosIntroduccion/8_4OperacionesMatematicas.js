//8) Realizá un programa que permita al usuario ingresar dos números enteros. La computadora debe mostrar los resultados de las 4 operaciones matemáticas básicas con tales números.

let numero1, numero2, suma, resta, division, multiplicacion;

numero1 = parseInt(prompt("Ingrese el 1° número entero"))
numero2 = parseInt(prompt("Ingrese el 2° número entero"))

suma = numero1 + numero2
resta = numero1 - numero2
if (numero2 == 0) {
    division = "No se puede realizar una división por 0 (cero)"
} else {
    division = numero1 / numero2
}
multiplicacion = numero1 * numero2

console.log(`El 1° número ingresado es: ${numero1}`)
console.log(`El 2° número ingresado es: ${numero2}`)
console.log(`Suma: ${numero1} + ${numero2} = ${suma}`)
console.log(`Resta: ${numero1} - ${numero2} = ${resta}`)
console.log(`Division: ${numero1} / ${numero2} = ${division}`)
console.log(`Multiplicación: ${numero1} * ${numero2} = ${multiplicacion}`)