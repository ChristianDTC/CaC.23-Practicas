//9) Realizá un programa que permita al usuario ingresar los lados a, b y c de un triángulo. La computadora informa si el triángulo es o no válido . En caso afirmativo, además informa si es equilátero, isósceles o escaleno.

let lado1, lado2, lado3, esTrianguloValido, formaTriangulo;

lado1 = parseInt(prompt("Ingrese el 1° lado"))
lado2 = parseInt(prompt("Ingrese el 2° lado"))
lado3 = parseInt(prompt("Ingrese el 3° lado"))

esTrianguloValido = (lado1 <= lado2+lado3) && (lado2 <= lado1+lado3) && (lado3 <= lado1+lado2)

if (esTrianguloValido) {
    if (lado1 == lado2 == lado3) {
        formaTriangulo = "Equilatero"
    } else if (lado1 == lado2 || lado2 == lado3 || lado1 == lado3) {
        formaTriangulo = "Isósceles"
    } else {
        formaTriangulo = "Escaleno"
    }
    document.write(`Es un triángulo válido y tiene forma ${formaTriangulo}`)
} else {
    document.write("El triángulo NO es válido")
}