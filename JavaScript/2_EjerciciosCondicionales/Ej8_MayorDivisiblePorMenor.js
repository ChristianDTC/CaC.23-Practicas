//8) Realizá un programa que permita al usuario ingresar dos números enteros. La computadora debe indicar si el mayor es divisible3 por el menor.

let numero1, numero2, numeroMenor, numeroMayor, esDivisible;

numero1 = parseInt(prompt("Ingrese el 1° número"))
numero2 = parseInt(prompt("Ingrese el 2° número"))

numeroMayor = numero1 > numero2? numero1 : numero2
numeroMenor = numero1 < numero2? numero1 : numero2
if (numeroMenor == 0) {
    document.write("No se puede dividir por 0")
} else {
    esDivisible = numeroMayor % numeroMenor == 0? "El mayor es divisible por el menor" : "El mayor NO es divisible por el menor"
    document.write(esDivisible)
}
