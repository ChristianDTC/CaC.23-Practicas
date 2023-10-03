//2) Realizá un programa que permita al usuario ingresar la cantidad de inscriptos a una conferencia y la cantidad de asientos disponibles el auditorio. La computadora debe indicar si alcanzan los asientos, en caso contrario, indicar cuántos faltan para que todos los inscriptos puedan sentarse. 

let cantidadInscriptos, cantidadAsientos, alcanzaAsientos;

cantidadInscriptos = parseInt(prompt("Ingrese la cantidad de inscriptos"))
cantidadAsientos = parseInt(prompt("Ingrese la cantidad de asientos"))
alcanzaAsientos = cantidadAsientos >= cantidadInscriptos? "Alcanzan los asientos" : `Faltan ${cantidadInscriptos-cantidadAsientos} asientos`
document.write(alcanzaAsientos)