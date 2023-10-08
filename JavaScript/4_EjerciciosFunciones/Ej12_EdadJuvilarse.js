//12) Realizá un programa que permita al usuario ingresar su edad (entre 1 y 120 años) y su género ('F' o 'M'). La computadora debe indicar si la persona está o no en edad de jubilarse.  Las mujeres se jubilan con 60 años o más. Los hombres se jubilan con 65 años o más.

let edad, genero, edadValida, generoValido;

function controlEdad(edad) {
  do {
    edad = parseInt(prompt("Ingrese su edad"));
    if (edad < 1 || edad > 120) {
      alert("LA EDAD TIENE QUE SER ENTRE 1 Y 120 AÑOS");
    }
  } while (edad < 1);
  return edad;
}

function controlGenero(genero) {
  do {
    genero = (prompt("Ingrese su género")).toUpperCase();
    if (genero != "F" && genero != "M") {
      alert("EL GENERO TIENE QUE SER F o M");
    }
  } while (genero != "F" && genero != "M");
  return genero;
}

function puedeJuvilarse(edad, genero) {
  return (genero == "F" && edad >= 60) || (genero == "M" && edad >= 65)
    ? "La persona esta en edad de jubilarse"
    : "La persona NO esta en edad de jubilarse";
}

edad = controlEdad(edad);
genero = controlGenero(genero);

document.write(puedeJuvilarse(edad, genero));
