//3) Realizá un programa que permita al usuario ingresar dos números enteros. La computadora debe indicar cuál de ellos es el mayor. 

let numero1, numero2, resultado, sonIguales, numero1Mayor;

numero1 = parseInt(prompt("Ingrese el 1° número"))
numero2 = parseInt(prompt("Ingrese el 2° número"))

// OPCION 1
if (numero1 == numero2) {
    resultado = `El 1° número (${numero1}) y el 2° número (${numero2})\nSon IGUALES `
} else if (numero1 > numero2) {
    resultado = `El 1° número (${numero1}) es el mayor`
} else {
    resultado = `El 2° número (${numero2}) es el mayor`
}

console.log("OPCION 1")
console.log(resultado)

//OPCION 2
sonIguales = numero1 == numero2
numero1Mayor = numero1 > numero2
resultado = sonIguales? `El 1° número (${numero1}) y el 2° número (${numero2})\nSon IGUALES ` : numero1Mayor?
 `El 1° número (${numero1}) es el mayor` : `El 2° número (${numero2}) es el mayor`

console.log("OPCION 2")
console.log(resultado)