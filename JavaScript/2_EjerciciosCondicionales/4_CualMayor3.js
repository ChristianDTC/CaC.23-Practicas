//4) Realizá un programa que permita al usuario ingresar tres números enteros. La computadora debe indicar cuál de ellos es el mayor.

let numero1, numero2, numero3, resultado;

numero1 = parseInt(prompt("Ingrese el 1° número"))
numero2 = parseInt(prompt("Ingrese el 2° número"))
numero3 = parseInt(prompt("Ingrese el 3° número"))

resultado = numero1 == numero2 == numero3? "Los números son iguales" : `El número mayor es ${Math.max(numero1, numero2,numero3)}`
console.log(resultado)