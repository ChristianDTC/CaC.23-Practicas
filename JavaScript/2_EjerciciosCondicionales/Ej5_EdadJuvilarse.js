//5) Realizá un programa que permita al usuario ingresar su edad (entre 1 y 120 años) y su género ('F' para mujeres, 'M' para hombres). La computadora debe indicar si la persona está en edad de jubilarse1. En caso de haber ingresado valores erróneos (edad fuera de rango o género inválido), informar tal situación.

let edad, genero, edadValida, generoValido;

edad = parseInt(prompt("Ingrese su edad"))
genero = prompt("Ingrese su género")

edadValida = edad > 0 && edad < 121
generoValido = genero == "F" || genero =="M"

if(edadValida && generoValido) {
    document.write("La persona esta en edad de jubilarse")
} else if(!edadValida){
    document.write("Edad fuera de rango")
} else {
    document.write("Género inválido")
}