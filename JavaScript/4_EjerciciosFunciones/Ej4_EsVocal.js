//4) esVocal, que devuelva si un caracter dado como parámetro es o no una letra  vocal (contemplar mayúsculas y minúsculas).

let vocal, mensaje;

function esVocal(vocal) {
  return (
    vocal.toUpperCase() === "A" ||
    vocal.toUpperCase() === "E" ||
    vocal.toUpperCase() === "I" ||
    vocal.toUpperCase() === "O" ||
    vocal.toUpperCase() === "U"
  );
}

caracter = prompt("Ingrese el caracter que desea mostrar");
mensaje = esVocal(caracter)? `${caracter} es una vocal` : `${caracter} NO es una vocal`;
document.write(mensaje);