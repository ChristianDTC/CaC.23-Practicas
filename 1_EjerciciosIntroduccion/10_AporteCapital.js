//10) Realizá un programa que permita al usuario ingresar los nombres de tres inversores junto al capital invertido por cada uno. La computadora debe informar qué porcentaje del total aportó cada uno y cuál es el monto del total aportado entre los tres.

let nombre1Inversor, nombre2Inversor, nombre3Inversor, capital1Inversor, capital2Inversor, capital3Inversor, capitalTotal, porcentaje1Inversor, porcentaje2Inversor, porcentaje3Inversor;

nombre1Inversor = prompt("Ingrese el nombre del 1° inversor")
capital1Inversor = parseFloat(prompt("Ingrese el capital del 1° inversor"))
nombre2Inversor = prompt("Ingrese el nombre del 2° inversor")
capital2Inversor = parseFloat(prompt("Ingrese el capital del 2° inversor"))
nombre3Inversor = prompt("Ingrese el nombre del 3° inversor")
capital3Inversor = parseFloat(prompt("Ingrese el capital del 3° inversor"))
capitalTotal = capital1Inversor + capital2Inversor + capital3Inversor
porcentaje1Inversor = (capital1Inversor * 100) / capitalTotal
porcentaje2Inversor = (capital2Inversor * 100) / capitalTotal
porcentaje3Inversor = (capital3Inversor * 100) / capitalTotal

console.log(`El inversor ${nombre1Inversor} aporto el ${porcentaje1Inversor}% del capital`)
console.log(`El inversor ${nombre2Inversor} aporto el ${porcentaje2Inversor}% del capital`)
console.log(`El inversor ${nombre3Inversor} aporto el ${porcentaje3Inversor}% del capital`)
console.log(`El capital total aportado es de $${capitalTotal}`)