//7) Realizá un programa que permita al usuario ingresar el ancho y el largo de un terreno en metros y el valor del metro cuadrado de tierra. La computadora debe mostrar el valor total del terreno y la cantidad de metros de alambre que serían necesarios para cercarlo completamente en tres pasadas. 

let ancho, largo, valorMetroCuadrado, metrosAlambre, valorTotalTerreno;

ancho = parseFloat(prompt("Ingrese el ancho del terreno:"))
largo = parseFloat(prompt("Ingrese el largo del terreno:"))
valorMetroCuadrado = parseFloat(prompt("Ingrese el valor del metro cuadrado del terreno:"))

metrosAlambre = (ancho * largo) * 3
valorTotalTerreno = (ancho * largo) * valorMetroCuadrado

console.log(`El valor total del terreno es de $${valorTotalTerreno}`)
console.log(`Se necesitan ${metrosAlambre}m2 de alambre para cercarlo completamente en tres pasadas`)